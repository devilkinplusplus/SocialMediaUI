import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateUser } from 'src/app/contracts/users/createUser';
import { CreateUserResponse } from 'src/app/contracts/users/createUserResponse';
import { UserOneResponse, UserResponse } from 'src/app/contracts/users/userResponse';
import { User } from 'src/app/contracts/users/user';
import { BaseResponse } from 'src/app/contracts/baseResponse';
import { UserRolesResponse } from 'src/app/contracts/users/userRoles';

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

  async updatePassword(userId: string, resetToken: string, newPassword: string, successCallBack?: () => void, errorCallBack?: (error) => void) {
    const observable: Observable<any> = this.httpClient.post({
      action: "resetPassword",
      controller: "users"
    }, {
      userId: userId,
      resetToken: resetToken,
      newPassword: newPassword,
    });

    const promiseData: Promise<any> = firstValueFrom(observable);
    promiseData.then(value => successCallBack()).catch(error => errorCallBack(error));
    await promiseData;
  }

  async getUsers(page:number = 0,size:number = 5,success?:() => void,error?:() => void) : Promise<UserResponse>{
   const obs : Observable<UserResponse> =
     this.httpClient.get<UserResponse>({controller:"users",queryString:`page=${page}&size=${size}`});

     const response : UserResponse =  await firstValueFrom(obs);

     if(response.succeeded){
       success();
     }else{
       error();
     }

     return response;
  }


  async assignRoles(userId:string,roleType:string,success?:()=>void,error?:()=>void) {
   const obs : Observable<any> = this.httpClient.post({
        controller:"users",
        action:"assignRole"
       },{userId,roleType})

    const res = await firstValueFrom(obs) as BaseResponse;
    if(!res.succeeded){
      error()
    }else{
      success()
    }
  }

  async getUserRoles(userId:string,error?:()=>void) : Promise<UserRolesResponse> {
    const obs : Observable<UserRolesResponse> = this.httpClient.get<UserRolesResponse>({
      controller:"users",
      action:"userRoles",
      queryString:`userId=${userId}`
    });

    const res : UserRolesResponse = await firstValueFrom(obs) as UserRolesResponse;

    if(!res){
      error();
    }

    return res;
  }

  async getUserById(userId:string,error?:()=>void):Promise<UserOneResponse>{
    const obs = this.httpClient.get({controller:"users",action:"user"},userId);
    const response : UserOneResponse = await firstValueFrom(obs) as UserOneResponse;

    if(!response.succeeded){
      error();
      return null;
    }
    return response;
  }

}
