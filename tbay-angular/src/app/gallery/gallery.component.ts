import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [EntryService]
})
export class GalleryComponent implements OnInit {

  entries=null;
  numEntries=1;
  imageBaseURL='';

  constructor(private entryService:EntryService){
    this.updateEntryList();
    this.imageBaseURL=this.entryService.imageBaseURL;
  }


  ngOnInit(){  //makes sure everything is set up before running this call
  }

  getNumberOfEntries(){ //return count of entries
    return this.numEntries;
  }

  updateEntryList():void{
    this.entryService.listUnsold().subscribe((entries)=>{
      this.entries=entries;
      this.numEntries=this.entries.length;
    });
  }
}
