import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  isAdmin: boolean;
  users: Array<string>;

  constructor(private http: HttpService, private router: Router) {
    http.isAdmin().subscribe(res => {
      if(!res) router.navigate(['/login'], {queryParams: {isAdmin: res}});
      this.isAdmin = true;
    })

    http.getUsers().subscribe(users => this.users = users)
  }

  ngOnInit() {
  }

  deleteUserByUsername(user) {
    console.log("Code development in progress...")
  }

  
}
