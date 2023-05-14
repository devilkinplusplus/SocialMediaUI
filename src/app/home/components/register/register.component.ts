import { Component, OnInit } from '@angular/core';
import { CreateUser } from 'src/app/contracts/users/createUser';
import { UserService } from 'src/app/services/models/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { Router } from '@angular/router';
import { CustomToastrService, MessageType } from 'src/app/services/common/custom-toastr.service';
import { MessagePosition } from '../../../services/common/custom-toastr.service';
import { CreateUserResponse } from 'src/app/contracts/users/createUserResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private userService:UserService, private formBuilder:FormBuilder,
              private spinner: NgxSpinnerService, private router: Router,private toastr:CustomToastrService){}

  form:FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.maxLength(25)]],
      lastName: ['',[Validators.required,Validators.maxLength(35)]],
      userName:['',[Validators.required,Validators.maxLength(16)]],
      email:['',[Validators.required,Validators.email,Validators.maxLength(30)]],
      password:['',Validators.required],
      date:['',Validators.required]
    })
  }

  get component() {
    return this.form.controls;
  }

  submitted: boolean = false;

  async create(user:CreateUser){
    if(this.form.invalid) return;
    this.submitted = true;

    this.spinner.show(SpinnerType.LineSpinClokwise);
    const result: CreateUserResponse  = await this.userService.create(user);

    if(result.succeeded){
      this.router.navigate(['/login']);
    }else{
      for (const item of result.errors) {
        this.toastr.message(item,"Error",{
          messageType:MessageType.Error,
          position:MessagePosition.BottomRight
        })
      }
    }

    this.spinner.hide(SpinnerType.LineSpinClokwise);
  }

}
