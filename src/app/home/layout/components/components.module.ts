import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainModule } from "../../components/main/main.module";
import { UikitModule } from "../../components/uikit/uikit.module";
import { MatMenuModule } from '@angular/material/menu'
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule, RouterModule,MatMenuModule,MatDividerModule,
        MainModule,
        UikitModule
    ]
})
export class ComponentsModule { }
