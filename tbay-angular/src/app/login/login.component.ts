import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameField:any;

  constructor(private cookieService: CookieService ) { }

  ngOnInit() {
  }


  ChangeName(obj:any){
    if (confirm("Change Name?")){
      this.cookieService.set( 'name', obj.nameField );
      // must use following to refresh page instead of Router
      location.href='/';
    }
  }

}
