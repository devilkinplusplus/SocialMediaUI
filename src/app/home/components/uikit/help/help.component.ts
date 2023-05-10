import { Component } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

}

$(document).ready(function() {

  $("#c1_id").click(function(){
    $("#c1_content").slideToggle();
  });

  $("#c2_id").click(function(){
    $("#c2_content").slideToggle();
  });

  $("#c3_id").click(function(){
    $("#c3_content").slideToggle();
  });

  $("#q1_id").click(function(){
    $("#q1_content").slideToggle();
  });

  $("#q2_id").click(function(){
    $("#q2_content").slideToggle();
  });

  $("#q3_id").click(function(){
    $("#q3_content").slideToggle();
  });


});
