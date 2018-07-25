import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userSet: boolean;
  username: string;
  
  constructor(private userService: UserService, private router: Router) {
    userService.isSet().subscribe(res => {
      if(res !== null)
        this.userSet = true;
      else 
        this.userSet = false;
      })
      userService.getUser().subscribe(user => {
        if(user) this.username = user.username
      })
  }

  ngOnInit() {
  }

  logout() {
    this.userService.removeUser().subscribe(res => {
      this.userSet = !res;
      this.router.navigate(['/login']);
    })
  }
}
