import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { UserService } from '../../services/user.service';
import { HttpService } from '../../services/http.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  tasks: Array<Task>
  
  constructor(private http: HttpService) {
    http.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  ngOnInit() {
  }

}
