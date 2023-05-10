import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentModule } from "../comment/comment.module";
import {MatMenuModule} from '@angular/material/menu'


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
        CommonModule, MatMenuModule,
        CommentModule
    ]
})
export class PostModule { }
