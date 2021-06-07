import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() entry;
  @Input() baseURL;  //from gallery.component.html

  constructor() {
   
  }

  ngOnInit() {
    this.entry.displayurl=this.baseURL+this.entry.image;
  }

}
