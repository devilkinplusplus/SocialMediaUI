import { BaseResponse } from "../baseResponse";
import { User } from "./user";

export class UserResponse extends BaseResponse{
  values:User[];
  userCount:number;
}
