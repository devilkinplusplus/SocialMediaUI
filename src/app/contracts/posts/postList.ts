import { User } from "../users/user";

export class PostList{
    id:string;
    userId:string;
    content:string;
    files:string[];
    likes:number;
    user:User;
}
