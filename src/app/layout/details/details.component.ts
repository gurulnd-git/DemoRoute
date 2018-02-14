import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() : any {
    $('#etalage').etalage({
      thumb_image_width: 300,
      thumb_image_height: 400,
      source_image_width: 900,
      source_image_height: 1200,
      show_hint: true,
      click_callback: function(image_anchor, instance_id){
        alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
      }
    });
  }

}
