import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-show-roles-dialog',
  templateUrl: './show-roles-dialog.component.html',
  styleUrls: ['./show-roles-dialog.component.scss']
})
export class ShowRolesDialogComponent implements OnInit {
  constructor(private userService:UserService,private toastr:CustomToastrService,private spinner:NgxSpinnerService,
    public dialogRef: MatDialogRef<ShowRolesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,) {}

  roles:Role[] = [];

  async ngOnInit() {
    const userRoles = await this.userService.getUserRoles(this.data,()=>{
      this.toastr.message("An error occured","Error",{
        messageType: MessageType.Error,
        position:MessagePosition.BottomRight
      })
    });

    this.roles = [];
    for (const role of userRoles.values) {
      this.roles.push(new Role(this.data,role));
    }
  }
  selectedRole: { userId: string, value: string };

  assignRole(){
    const selectedUserId = this.selectedRole.userId;
    const selectedRoleName = this.selectedRole.value;
    this.spinner.show(SpinnerType.SquareJellyBox);

    this.userService.assignRoles(selectedUserId,selectedRoleName,()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Added","Success",{
        messageType:MessageType.Success,
        position:MessagePosition.BottomRight
      })
    },()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Something went wrong","Error",{
        messageType:MessageType.Error,
        position:MessagePosition.BottomRight
      })
    });
  }

}


class Role {
  constructor(userId: string, value: string) {
    this.userId = userId;
    this.value = value;
  }
  userId: string;
  value: string;
}
