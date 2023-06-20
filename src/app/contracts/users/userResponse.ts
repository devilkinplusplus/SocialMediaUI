import { BaseResponse } from "../baseResponse";
import { User } from "./user";

export class UserResponse extends BaseResponse{
  values:User[];
  userCount:number;
}

export class UserOneResponse extends BaseResponse{
  value:User;
}
