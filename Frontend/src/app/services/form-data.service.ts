import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment' 


@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private apiUrl = environment.API_URL;
  private cloudinaryUrl = environment.CLOUDINARY_URL;
  private uploadPreset = environment.UPLOAD_PRESET; 

  public isLoggin = new BehaviorSubject<any>(false);
  public isLoggin$ = this.isLoggin.asObservable();

  public selectedUser = new BehaviorSubject<any>(null);
  public selectuser$ = this.selectedUser.asObservable();

  public cnt = new BehaviorSubject<any>(0);
  public cnt$ = this.cnt.asObservable();

  public select = new BehaviorSubject<any>(false);
  public select$ = this.select.asObservable();

  public isAdmin = new BehaviorSubject<any>(false);
  public isAdmin$ = this.isAdmin.asObservable();


  constructor(private http: HttpClient) {}


  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  updateUserLoginStatus(
    userId: any,
    isLoggedIn: boolean,
    isAdmin: boolean,
    sessionId: string | null
  ): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}`, {
      isAdmin: isAdmin,
      isLoggedIn: isLoggedIn,
      sessionId: sessionId,
    });
  }
  setUser(userId: any, value: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}`, {
      viewProfile: value,
    });
  }

  setUserVisible(userId: any, value: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}`, {
      isvisible: value,
    });
  }

  saveFormData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/formData`, data);
  }

  saveSubscription(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscription`, data);
  }
  getSubscription(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/subscription`);
  }
  changePrice(Id: any, value: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/subscription/${Id}`, {
      price: value,
    });
  }
  getFormData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/formData`);
  }
  updateFormData(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/formData/${data.id}`, data);
  }
  deleteFormData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/formData/${id}`);
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset); 

    return this.http.post(this.cloudinaryUrl, formData);
  }
  
  setSubscription(userId: any, value: boolean,subscriptionData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}`, {
      subscription: value,
      subscriptionName : subscriptionData
    });
  }


  public selectedSortOrder = new BehaviorSubject<any>('null');
  public selectedSortOrder$ = this.selectedSortOrder.asObservable();
  sendData(data: any) {
    this.selectedUser.next(data);
  }
}
