import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private http: HttpService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  submit(form) {
    if (form.password === form.passwordRepeat) {
      const user = {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password
      }
      this.http.signUp(user).subscribe(res => {
        const user: any = res;
        if(user) {
          this.userService.addUser(user).subscribe(res => {
            if(res) this.router.navigate(['/overview'])
          })
        }
      })
    } else console.log("ERROR! Passwords do not match!");
  }

}
