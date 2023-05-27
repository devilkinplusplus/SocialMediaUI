import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/contracts/users/user';
import { UserResponse } from 'src/app/contracts/users/userResponse';
import { ShowRolesDialogComponent } from 'src/app/dialogs/admin/show-roles-dialog/show-roles-dialog.component';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private userService:UserService,private spinner:NgxSpinnerService,
              private toastr:CustomToastrService, public dialog:MatDialog){}

  displayedColumns: string[] = ['fullname', 'username', 'email', 'role'];
  dataSource : MatTableDataSource<User> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async ngOnInit() {
    await this.getUsers();
  }

  async getUsers(){
    this.spinner.show(SpinnerType.SquareJellyBox);
    const users : UserResponse = await this.userService.getUsers(
      this.paginator ? this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,
        ()=>{
          this.spinner.hide(SpinnerType.SquareJellyBox);
        },()=>{
          this.spinner.hide(SpinnerType.SquareJellyBox);
          this.toastr.message("Something went wrong","Error",{
            messageType:MessageType.Error,
            position:MessagePosition.BottomRight
          })
        });
    this.dataSource = new MatTableDataSource<User>(users.values);
    this.paginator.length = users.userCount;
  }

  async onPageChange(){
    await this.getUsers();
  }

  onShowRoles(id:string){
    const dialofRef = this.dialog.open(ShowRolesDialogComponent,{
      data:id
    });
    dialofRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }

}
