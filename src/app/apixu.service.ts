import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string){
    return this.http.get(
        'https://api.weatherapi.com/v1/current.json?key=c9eeb482d2b0472697e110743230208&q='+location+'&aqi=no' 
    );
}
}
