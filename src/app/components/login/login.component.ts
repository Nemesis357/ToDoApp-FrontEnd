import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  isAdminWarning: boolean;
  
  constructor(private http: HttpService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let isAdmin = params.isAdmin;
      this.isAdminWarning = !isAdmin;
    })
  }

  submit(form) {
    if(form.username !== "" && form.password !== "") {
      const user = {
        usernameOrEmail: form.username,
        password: form.password
      }
      this.http.signIn(user).subscribe(user => {
        this.userService.addUser(user).subscribe(res => {
          if(res) this.router.navigate(['/overview'])
        })
      })
    } 
  }
}
