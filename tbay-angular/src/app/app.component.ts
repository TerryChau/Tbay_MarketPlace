import { Component, OnInit } from '@angular/core';
import { EntryService} from './entry.service';
import { CookieService } from  'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EntryService]
})
export class AppComponent implements OnInit{
  user = '';


  constructor(private entryService:EntryService,
              private cookieService: CookieService){
  }

  ngOnInit(){  //makes sure everything is set up before running this call
    if (this.cookieService.check('name')){
      this.user=this.cookieService.get('name')
    }
    else{
      this.user=this.entryService.user;
    }
  }

}
