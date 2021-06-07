import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-entrydetail',
  templateUrl: './entrydetail.component.html',
  styleUrls: ['./entrydetail.component.css']
})
export class EntrydetailComponent implements OnInit {

  entry: any = null; // mongo doc
  entrydisplayurl: string = '';  //basepath + path to photo
  user = "";
  userSameAsEntrySeller: boolean = false;
  userSameAsEntryBuyer: boolean = false;
  getEntryComplete: boolean = false; // to prevent flickering
  entryEdit: any = null; // a copy of entry for editing.

  editDropDown: boolean = false;

  isItemSold: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private entryService: EntryService,
    private cookieService: CookieService, private _location: Location) {
    if (this.cookieService.check('name')) {
      this.user = this.cookieService.get('name')
    }
    else {
      this.user = this.entryService.user;
    }
    this.getEntry();
  }

  ngOnInit() {
    //runs on init after Angular is done creating component
  }

  getEntry(): void {
    const param = this.route.snapshot.paramMap.get('id');  //get id in url from routes in app.modules.ts
    this.entryService.getEntry(param)
      .subscribe(
        (entry) => {
          this.entry = entry;
          try {
            this.entrydisplayurl = this.entryService.imageBaseURL + this.entry.image;
            if (this.entry.author == this.user) {
              this.userSameAsEntrySeller = true;
            }
            if (this.entry.buyer == this.user) {
              this.userSameAsEntryBuyer = true;
            }
            if (this.entry.buyer) {
              this.isItemSold = true;
            }
            // make copy of entry for editing
            this.entryEdit = JSON.parse(JSON.stringify(entry));
          }
          catch (error) {
            this.entry = null;
          }
          finally {
            this.getEntryComplete = true;
          }
        },
        (error) => {
          // for 404 errors
          this.entry = null;
          this.getEntryComplete = true;
        }
      );
    return;
  }

  goToBottom = () => {
    try {
      window.scrollTo(
        {
          top: 1000,
          left: 0,
          behavior: 'smooth'
        });
    }
    catch (e) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  toggleEditMode(): void {
    // toggle the Edit Form
    this.editDropDown = (this.editDropDown ? false : true);
  }

  backClicked() {
    this._location.back();
  }

  deleteEntry(): void {
    if (confirm("Delete this entry?")) {
      this.entryService.deleteEntry(this.entry._id)
        .subscribe((result) => {
          this._location.back();
        });
    }
  }


  buyItem(): void {
    if (confirm("Buy this item?")) {
      this.entry.buyer = this.user;
      this.entryService.updateEntry(this.entry._id, this.entry)
        .subscribe((entry: any) => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate([`/detail/${entry._id}`])
          )
        });
    }
  }

  update(createListingForm): void {
    this.entryService.updateEntry(this.entry._id, this.entryEdit)
      .subscribe((entry: any) => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate([`/detail/${entry._id}`])
        )
      });
  }
}
