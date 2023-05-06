import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PostModule } from '../post/post.module';
import { UikitModule } from "../uikit/uikit.module";



@NgModule({
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule, PostModule,
    ]
})
export class MainModule { }
