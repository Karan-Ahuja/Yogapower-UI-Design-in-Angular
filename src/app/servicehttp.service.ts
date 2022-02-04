import { Injectable } from '@angular/core';
 import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {

  constructor(private http:HttpClient) { }
  
  // default_data = this.http.get("http://localhost:3000/ShowDefault");

  // english_data = this.http.post("http://localhost:3000/english", "English");

  // hindi_data = this.http.post("http://localhost:3000/hindi", "Hindi");

  // Datalng(Langname){
  // 	console.log(Langname);

  // 	return this.http.post("http://localhost:3000/english", "English");

 // }

}
