import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../entry.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.css']
})
export class NewentryComponent implements OnInit {

  @Output() newEntry = new EventEmitter(); //send a refresh list event, when new entry is made

  user = '';
  entry: any = {};  //entry from newentry.component.html
  fileToUpload: File = null;  //fileToUpload set in an event change


  handleFileInput(target): void {
    this.fileToUpload = target.files.item(0);
  }


  constructor(private entryService: EntryService,
    private cookieService: CookieService, private router: Router, private _location: Location) {
    if (this.cookieService.check('name')) {
      this.user = this.cookieService.get('name')
    }
    else {
      this.user = this.entryService.user;
    }
  }

  ngOnInit() {
  }

  save(createListingForm): void {
    //FormData is alternative to JSON
    let formData = new FormData();
    formData.append('title', this.entry.title);
    formData.append('author', this.user);
    formData.append('listPrice', this.entry.listPrice);
    formData.append('description', this.entry.description ? this.entry.description : `No description is provided for "${this.entry.title}".`);
    if (this.fileToUpload != null) {
      formData.append('image', this.fileToUpload, this.fileToUpload.name);
    }
    console.log("submitting new entry");
    this.entryService.createEntry(formData)
      .subscribe((entry: any) => {
        this.newEntry.emit();
        createListingForm.reset();
        this.router.navigate([`/detail/${entry._id}`]);
      });
  }

  backClicked() {
    this._location.back();
  }

}
