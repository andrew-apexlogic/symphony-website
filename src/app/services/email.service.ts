import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://apexlogic.freshdesk.com/api/v2/tickets'; // Replace with your Freshdesk domain
  private apiKey = 'VvyWbpdzDrXQ8xjR5Kzf'; // Replace with your API Key

  constructor(private http: HttpClient) {}

  createTicket(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.apiKey}:X`), // Encode API Key
      'Content-Type': 'application/json'
    });

    const ticketData = {
      description: `New Demo Request from ${formData.name} at ${formData.organization}.
      
      Contact Info:
      Phone - ${formData.phone}
      Email - ${formData.email}`, // User's message
      subject: `New Demo Request from ${formData.organization}`,
      email: formData.email,
      priority: 1,
      status: 2, // 'Open' status in Freshdesk
      source: 7, // Set source to API
    };

    return this.http.post(this.apiUrl, ticketData, { headers });
  }
}