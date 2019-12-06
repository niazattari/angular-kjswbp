import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo;
  @Input() index;

  @Output() delete:EventEmitter<any> = new EventEmitter<any>();
  @Output() edit:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  deleteTodo() {
    this.delete.emit({index:this.index});
  }
  editTodo() {
    this.edit.emit({index:this.edit}); 
  }

}