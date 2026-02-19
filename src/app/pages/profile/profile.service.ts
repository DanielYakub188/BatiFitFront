import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonalAtributes } from 'src/app/shared/models/personalAtributes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
  constructor(private Http: HttpClient){}

  getUserInfo(): Observable<PersonalAtributes>
  {
    return this.Http.get<PersonalAtributes>(`${this.apiUrl}/profile/info`)
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
      fatPercentage:fatPercent

    });
    return this.Http.post(`${this.apiUrl}/register`,{headers})
  }
  updateProfile(data: PersonalAtributes) {

    const headers = new HttpHeaders({
      name: data.name,
      age: data.age.toString(),
      gender: data.gender,
      goal: data.goal,
      heightCm: data.heightCm.toString(),
      weightKg: data.weightKg.toString(),
      fatPercentage: data.fatPercent.toString()
    });

    return this.Http.put(`${this.apiUrl}/profile/update`, {}, { headers });
  }
}
