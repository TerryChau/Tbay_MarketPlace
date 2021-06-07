import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  user = '';
  entries=null;
  numEntries=1;
  imageBaseURL='';

  constructor(private entryService:EntryService, private cookieService: CookieService){
    if (this.cookieService.check('name')) {
      this.user = this.cookieService.get('name')
    }
    else {
      this.user = this.entryService.user;
    }
    this.updateEntryList();
    this.imageBaseURL=this.entryService.imageBaseURL;
  }

  getNumberOfEntries(){ //return count of entries
    return this.numEntries;
  }

  ngOnInit(){
  }

  updateEntryList():void{
    this.entryService.listBuyerEntries(this.user).subscribe((entries)=>{
      this.entries=entries;
      this.numEntries=this.entries.length;
    });
  }
}
