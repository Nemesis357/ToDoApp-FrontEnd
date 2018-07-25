import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'To Do Application';
  greeting = {'id': 'XXX', 'content': 'Hello World'};

  constructor() { }

  ngOnInit() {
  }

}
