import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { FloatLabelModule } from "primeng/floatlabel";
import { NgIf } from "@angular/common";
import { FormDataService } from "../services/form-data.service";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgxCaptchaModule } from "ngx-captcha";
import { ReCAPTCHAService } from "../services/Backend.service";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import * as bcrypt from "bcryptjs";
import { environment } from "../../environments/environment";
declare var google: any;
declare var grecaptcha: any;
@Component({
  selector: "app-sign-in",
  imports: [
    ToastModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FloatLabelModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: "./sign-in.component.html",
  styleUrl: "./sign-in.component.css",
  providers: [MessageService],
})
export class SignInComponent {
  public messageservice = inject(MessageService);
  user: any = null;
  signInForm!: FormGroup;
  isOtpSent = false;
  isOtpVerified = false;
  email: string | null = null;
  captchaToken: string | null = null;
  isUserLogin_Google: boolean = false;
  isPasswordMatch!: any;
  sessionId = Math.random().toString(36).substr(2, 9);
  siteKey = environment.SITE_KEY;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router,
    private route: ActivatedRoute,
    private reCAPTCHAService: ReCAPTCHAService
  ) {
    if (localStorage.getItem("isLoggedIn")) {
      formDataService.isLoggin.next(true);
    }
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],

      // recaptcha :['',[Validators.required]]
    });
    this.loadRecaptchaScript();

    this.reCAPTCHAService.user$.subscribe((userData) => {
      console.log(userData);
      if (userData) {
        this.user = userData.user;
        console.log(this.user);
        this.isUserLogin_Google = true;
        if (this.isUserLogin_Google == true) {
          this.authUser();
        }
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("google-signin-btn"),
      { theme: "outline", size: "large" }
    );
  }

  loadRecaptchaScript() {
    if (
      !document.querySelector(
        `script[src="https://www.google.com/recaptcha/enterprise.js?render=${this.siteKey}"]`
      )
    ) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.siteKey}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }
  async executeRecaptcha() {
    return new Promise<string>((resolve, reject) => {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(this.siteKey, {
            action: "LOGIN",
          });
          resolve(token);
        } catch (error) {
          reject("CAPTCHA execution failed");
        }
      });
    });
  }

  checkAdmin(id: any) {
    const emailControl = this.signInForm.get("email");
    if (emailControl) {
      const email = emailControl.value as string;
      if (email.includes("srkay.com")) {
        this.formDataService
          .updateUserLoginStatus(id, true, true, this.sessionId)
          .subscribe(
            (response) => {
              localStorage.setItem("isAdmin", "true");
              this.formDataService.isAdmin.next(true);
              this.router.navigate(["/home"]);

              console.log("Admin status updated successfully:", response);
            },
            (error) => {
              console.error("Error updating admin status:", error);
            }
          );
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.signInForm.invalid) {
      this.messageservice.add({
        severity: "error",
        summary: "Error",
        detail: "Invalid Credentials",
        life: 3000,
      });

      return;
    }
    try {
      this.captchaToken = await this.executeRecaptcha();
      console.log("reCAPTCHA Token:", this.captchaToken);

      this.reCAPTCHAService
        .verifyRecaptcha(this.captchaToken)
        .subscribe((response: any) => {
          if (response.success) {
            // this.verifyOtp();
            this.authUser();
          } else {
            // alert('reCAPTCHA verification failed');
            this.messageservice.add({
              severity: "error",
              summary: "Error",
              detail: "reCAPTCHA verification failed",
              life: 3000,
            });
          }
        });
    } catch (error) {
      this.messageservice.add({
        severity: "error",
        summary: "Error",
        detail: "reCAPTCHA verification failed",
        life: 3000,
      });
    }
  }

  authUser() {
    this.formDataService.getUsers().subscribe((users) => {
      if (!users || users.length === 0) {
        this.messageservice.add({
          severity: "error",
          summary: "Error",
          detail: "No users found in database",
          life: 3000,
        });
        return;
      }

      const user = users.find(
        (user) =>
          user?.email === this.signInForm.value.email ||
          user?.email === this.user?.email
      );

      console.log(user);

      if (user) {
        const isPasswordMatch = bcrypt.compareSync(
          this.signInForm.value.password,
          user.password
        );

        if (isPasswordMatch || this.isUserLogin_Google === true) {
          if (user.isLoggedIn) {
            this.formDataService
              .updateUserLoginStatus(user.id, false, user.isAdmin, null)
              .subscribe(() => {
                this.performLogin(user);
              });
          } else {
            this.performLogin(user);
          }
        } else {
          // alert('Invalid Credentials');
          this.messageservice.add({
            severity: "error",
            summary: "Error",
            detail: "Invalid Credentials",
            life: 3000,
          });
        }
      } else {
        this.messageservice.add({
          severity: "error",
          summary: "Error",
          detail: "User not found",
          life: 3000,
        });
      }
    });
    this.reCAPTCHAService.userSubject.next(null);
  }

  public performLogin(user: any) {
    this.formDataService
      .updateUserLoginStatus(user.id, true, user.isAdmin, this.sessionId)
      .subscribe(() => {
        localStorage.setItem("isLoggedIn", user.id);
        localStorage.setItem("sessionId", this.sessionId);

        if (user.subscription == true) {
          localStorage.setItem("Subscription", "true");
        }

        this.checkAdmin(user.id);
        alert("Login successful");

        this.messageservice.add({
          severity: "success",
          summary: "success",
          detail: "Login successful",
          life: 3000,
        });
        this.user = null;
        this.isUserLogin_Google = false;
        this.formDataService.isLoggin.next(true);
        this.router.navigate(["/home"]);
      });
  }
}
