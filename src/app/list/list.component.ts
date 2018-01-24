import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public appService: AppService) { }

  deleteList(item) {
    const index = this.appService.Todolist.indexOf(item);
    this.appService.Todolist.splice(index, 1);
  }

  deleteTodolist($event) {
    this.appService.Todolist = [];
  }

  ngOnInit() {
  }

}
