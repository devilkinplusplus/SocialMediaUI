import { Component,  OnInit,  } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostList } from 'src/app/contracts/posts/postList';
import { PostService } from 'src/app/services/models/post.service';
import { UserService } from 'src/app/services/models/user.service';

declare var $: any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postService:PostService,private spinner:NgxSpinnerService,private userService:UserService) {
  }
  url:string = "https://localhost:7134/";
  posts:PostList[] = [];
  page:number = 0;
  size:number = 5;

  isPostLiked:boolean = false;

  async ngOnInit() {
   await this.getPosts(this.page,this.size);
  }

  async getPosts(page:number,size:number){
    const postList =  await this.postService.getPosts(page,size);
    for (const item of postList.values) {
      this.posts.push(item);
    }
  }


  async likePost(postId:string,userId:string){
    await this.postService.likePost(postId,userId);

     // Save the state of the class in localStorage
  }

  async load(){
     await this.getPosts(this.page + 1,this.size);
  }



}
$(document).ready(function() {
  $("#com_1").click(function() {
    $('#comment-section_1').toggleClass('hidden');
  });
  $("#com_2").click(function() {
    $('#comment-section_2').toggleClass('hidden');
  });
  $("#com_3").click(function() {
    $('#comment-section_3').toggleClass('hidden');
  });

  $("#like_1").click(function(){
    $("#like_1").toggleClass("text-blue-500");
  })

  $("#like_2").click(function(){
    $("#like_2").toggleClass("text-blue-500");
  })

  $("#like_3").click(function(){
    $("#like_3").toggleClass("text-blue-500");
  })

});
