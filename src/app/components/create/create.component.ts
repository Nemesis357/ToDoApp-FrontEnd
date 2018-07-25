import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpService, private user: UserService) { }

  ngOnInit() {
    this.user.getUser().subscribe(res => {
      console.log("User: ", res);
    })
  }

  submit(form) {
    this.http.createNew(form).subscribe(res => {
      console.log("RESULT: ", res);
    })
  }

}
