import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { PostListResponse } from 'src/app/contracts/posts/postListResonse';
import { Observable, first, firstValueFrom } from 'rxjs';
import { LikeResponse } from 'src/app/contracts/posts/likeResponse';
import { CreatePostDto, CreatePostResponse } from 'src/app/contracts/posts/createPost';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClientService) { }

  async getPosts(page:number=0,size:number = 0): Promise<PostListResponse>{
    const obs: Observable<PostListResponse> = this.httpClient.get<PostListResponse>({
      controller:"posts",queryString:`page=${page}&size=${size}`
    })
    const response : PostListResponse = await firstValueFrom(obs);

    if(response.succeeded){
      return response;
    }

    return null;
  }

  async likePost(postId:string,userId:string) : Promise<LikeResponse>{
   const obs:Observable<any | LikeResponse> = this.httpClient.post<any | LikeResponse>({
      controller:'posts',action:"like"
    },{
        postId,userId
    });

    const respone : LikeResponse = await firstValueFrom(obs) as LikeResponse;

    return respone;
  }

  async createPost(createPostDto:CreatePostDto,success?:()=>void,error?:()=>void){
    const obs : Observable<any | CreatePostResponse> = this.httpClient.post<any | CreatePostResponse>({
      controller:"posts",
      headers:  new HttpHeaders({ "responseType": "blob" })
    },{
      createPostDto
    });

    const response : CreatePostResponse = await firstValueFrom(obs) as CreatePostResponse;

    if(response.succeeded){
      success();
    }
    else{
      error();
    }
  }

}
