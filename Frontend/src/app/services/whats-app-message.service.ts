import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppMessageService {

  private accountSid = environment.ACCOUNT_SID;
  private authToken =  environment.AUTH_TOKEN;
  private twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;


  constructor(private http: HttpClient) {}

  sendMessage(to: string, contentVariables: object): Observable<any> {
    const body = new URLSearchParams();
    body.set('To', `whatsapp:${to}`);
    body.set('From', 'whatsapp:+14155238886');
    body.set('ContentSid', 'HXb5b62575e6e4ff6129ad7c8efe1f983e');
    body.set('ContentVariables', JSON.stringify(contentVariables));

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.accountSid}:${this.authToken}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.twilioUrl, body.toString(), { headers });
  }
}
