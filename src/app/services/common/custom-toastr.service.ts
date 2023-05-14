import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }

  message(message:string,title:string,options?:Partial<ToastrOptions>){
    this.toastr[options.messageType](message,title,{
      positionClass:options.position,
      closeButton:options.showCloseButton
    })
  }

}

export class ToastrOptions {
  messageType: MessageType = MessageType.Success;
  position: MessagePosition = MessagePosition.BottomRight;
  showCloseButton:boolean = false;
}

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export enum MessagePosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
