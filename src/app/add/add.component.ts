import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addList(object) {
    this.appService.Todolist.push(object);
    console.log(this.appService.Todolist);
  }

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
