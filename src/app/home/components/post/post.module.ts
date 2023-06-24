import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentModule } from "../comment/comment.module";
import {MatMenuModule} from '@angular/material/menu'
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PostCreateComponent,
        PostListComponent
    ],
    exports: [
        PostCreateComponent,
        PostListComponent
    ],
    imports: [
        CommonModule, MatMenuModule,FormsModule,
        CommentModule,FileUploadModule
    ]
})
export class PostModule { }
