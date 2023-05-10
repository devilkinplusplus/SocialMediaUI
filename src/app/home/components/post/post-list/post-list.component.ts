import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
}
$(document).ready(function() {
  $("#com_1").click(function() {
    $('#comment-section_1').toggleClass('hidden');
  });
  $("#com_2").click(function() {
    $('#comment-section_2').toggleClass('hidden');
  });
  $("#com_3").click(function() {
    $('#comment-section_3').toggleClass('hidden');
  });

  $("#like_1").click(function(){
    $("#like_1").toggleClass("text-blue-500");
  })

  $("#like_2").click(function(){
    $("#like_2").toggleClass("text-blue-500");
  })

  $("#like_3").click(function(){
    $("#like_3").toggleClass("text-blue-500");
  })

});
