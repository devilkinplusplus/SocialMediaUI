import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CustomToastrService, MessagePosition, MessageType } from '../custom-toastr.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(private httpClientService:HttpClientService,private toastr:CustomToastrService,private shared:SharedService) {  }

  @Input() options : Partial<FileUploadOptions>;
  public files: NgxFileDropEntry[] = [];


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData : FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append('files',_file,file.relativePath);
      })
    }

    this.httpClientService.post({
      controller:this.options.controller,
      action:this.options.action,
      queryString:this.options.queryString,
      headers:new HttpHeaders({"responseType":"blob"})
    },fileData).subscribe(data=>{
      console.log(data);
    },error=>{
      this.toastr.message("An error occured while uploading","Error",{
        messageType:MessageType.Error,
        position:MessagePosition.TopRight
      })
      console.log(error);
    })


  }

}


export class FileUploadOptions{
  controller?:string;
  action?:string;
  queryString?:string;
  accept?:string;
}










