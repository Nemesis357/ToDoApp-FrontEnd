import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private http: HttpService) { }

  ngOnInit() {
  }

  submit(form) {
    console.log("Submit", form);
    if (form.password === form.passwordRepeat) {
      const user = {
        email: form.email,
        password: form.password
      }
      this.http.signUp(user).subscribe(res => {
        console.log(res);
      })
    } else console.log("ERROR!");
  }

}
