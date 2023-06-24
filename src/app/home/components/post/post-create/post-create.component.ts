import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreatePostDto,  } from 'src/app/contracts/posts/createPost';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { AuthCheckService } from 'src/app/services/auth-check.service';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { PostService } from 'src/app/services/models/post.service';
import { UserService } from 'src/app/services/models/user.service';
import { User } from 'src/app/contracts/users/user';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  constructor(private postService:PostService,private auth:AuthCheckService,private spinner:NgxSpinnerService,
              private toastr:CustomToastrService,private userService:UserService) {}

  async ngOnInit() {
    await this.getUserInformations();
  }

  user:User;
  url:string = "https://localhost:7134/";
  @Output() fileUploadOptions:Partial<FileUploadOptions> = null;

  async post(content:string){
    const userId: string = this.auth.getIdFromToken();

    const createPostDto = new CreatePostDto();
    createPostDto.content = content;
    createPostDto.userId = userId;

    this.spinner.show(SpinnerType.SquareJellyBox);
    await this.postService.createPost(createPostDto,()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      window.location.reload();
    },()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Something went wrong","Error",{
        messageType:MessageType.Error,position:MessagePosition.BottomRight
      })
    });

  }

  async getUserInformations(){
    const userId:string = this.auth.getIdFromToken();
    const res = await this.userService.getUserById(userId,()=>{
      this.toastr.message("Login required","Login expired",{
        messageType:MessageType.Warning,
        position:MessagePosition.TopRight
      })
    });
    this.user = res.value;
  }




}
