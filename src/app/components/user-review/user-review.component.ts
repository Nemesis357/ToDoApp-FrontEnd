import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { HttpService } from '../../services/http.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  selectedUser: string;
  user: User;

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {
    this.route.params.forEach(params => {
      this.selectedUser = params.username;
    })
    http.getUser(this.selectedUser).subscribe(res => this.user = res)
  }

  ngOnInit() {
  }

  updateUser(userId) {
    console.log("Code development in progress...")
  }
  
  deleteUser(userId) {
    this.http.deleteUser(userId).subscribe(res => {
      this.router.navigate(['/admin'])
    })
  }

  isAdmin() {
    let isAdmin: boolean = false;
    this.user.roles.forEach(role => {
      if(this.user.roles.length === 0 || role.name == 'ROLE_ADMIN') isAdmin = true;
    })
    return isAdmin;
  }

  isUser() {
    let isUser: boolean = false;
    this.user.roles.forEach(role => {
      if(role.name == 'ROLE_USER') isUser = true;
    })
    return isUser;
  }

  makeAdmin(userId) {
    this.http.makeAdmin(userId).subscribe(res => {
      if(res) this.http.getUser(this.selectedUser).subscribe(res => this.user = res);
    })
  }

  makeUser(userId) {
    this.http.makeUser(userId).subscribe(res => {
      if(res) this.http.getUser(this.selectedUser).subscribe(res => this.user = res);
    })
  }
}
