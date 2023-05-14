import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateUser } from 'src/app/contracts/users/createUser';
import { CreateUserResponse } from 'src/app/contracts/users/createUserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClientService) { }

  async create(createUser:CreateUser) : Promise<CreateUserResponse> {
    const obs : Observable<CreateUser | CreateUserResponse> = this.httpClient.post<CreateUser | any>({
      controller:"users"
    },{
      createUser
    });

    return await firstValueFrom(obs) as CreateUserResponse;
  }


}
