import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreatePostDto,  } from 'src/app/contracts/posts/createPost';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { AuthCheckService } from 'src/app/services/auth-check.service';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { PostService } from 'src/app/services/models/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  constructor(private postService:PostService,private auth:AuthCheckService,private spinner:NgxSpinnerService,
              private toastr:CustomToastrService) {}

  async post(content:string){
    const userId:string = this.auth.getIdFromToken();

    const formData = new FormData();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    debugger;

    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('files', fileInput.files[i]);
    }


    const createPostDto = new CreatePostDto();
    createPostDto.content = content;
    createPostDto.files = formData;
    createPostDto.userId = userId;


    this.spinner.show(SpinnerType.SquareJellyBox);

    await this.postService.createPost(createPostDto,()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox)
    },()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Something went wrong","Error",{
        messageType:MessageType.Error,position:MessagePosition.BottomRight
      })
    });

  }

}
