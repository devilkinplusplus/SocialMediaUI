import { BaseResponse } from "../baseResponse";

export class CreatePostDto{
  userId?:string;
  content?:string;
  files?:any;
}

export class CreatePostResponse extends BaseResponse{
}

