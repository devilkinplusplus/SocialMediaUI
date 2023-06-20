import { BaseResponse } from "../baseResponse";
import { PostList } from "./postList";

export class PostListResponse extends BaseResponse{
  values:PostList[];
}
