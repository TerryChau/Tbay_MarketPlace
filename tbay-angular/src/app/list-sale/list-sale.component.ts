import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit {
  user = '';
  entries = null;
  numEntries = 0;
  imageBaseURL = '';

  constructor(private entryService: EntryService,
    private cookieService: CookieService) {

    if (this.cookieService.check('name')) {
      this.user = this.cookieService.get('name')
    }
    else {
      this.user = this.entryService.user;
    }
  }

  getNumberOfEntries() { //return count of entries
    return this.numEntries;
  }

  ngOnInit() {  //makes sure everything is set up before running this call
    this.updateEntryList();
    this.imageBaseURL = this.entryService.imageBaseURL;
  }

  updateEntryList(): void {
    this.entryService.listOnly(this.user).subscribe((entries) => {
      this.entries = entries;
      this.numEntries = this.entries.length;
    });
  }

}
