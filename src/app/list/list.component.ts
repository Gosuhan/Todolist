import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public appService: AppService) { }

  editList(object, newEdit) {
    this.appService.Todolist[this.appService.Todolist.indexOf(object)] = newEdit;
    console.log(object);
  }

  deleteList(item) {
    const index = this.appService.Todolist.indexOf(item);
    this.appService.Todolist.splice(index, 1);
    // OU EN UNE SEULE LIGNE: this.appService.Todolist.splice(this.appService.Todolist.indexOf(item), 1);
  }

  deleteTodolist($event) {
    this.appService.Todolist = [];
  }

  ngOnInit() {
  }

}
