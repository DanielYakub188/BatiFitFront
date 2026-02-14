import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
  constructor(private Http: HttpClient){}

  getUserInfo()
  {
    return this.Http.get(`${this.apiUrl}/profile/info`)
  }

  registerUserInfo(
    name:string,
    age:number,
    gender:string,
    goal:string,
    heightCm:number,
    weightKg:number,
    fatPercent:number,)
  {
    const headers = new HttpHeaders({
      name: name,
      age: age,
      gender:gender,
      goal:goal,
      heightCm:heightCm,
      weightKg:weightKg,
      fatPercent:fatPercent

    });
    return this.Http.post(`${this.apiUrl}/`,{headers})
  }
}
