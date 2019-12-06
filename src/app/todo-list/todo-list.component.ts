import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('txtTodo', {static:false}) txtTodoEl;
  
  todos = [
    "pakistan",
    "turkey",
    "saudiArabia"
  ]
  editMode = false;
  selectedIndex = null;
  constructor() { }

  ngOnInit() {
  }
  saveTodo() {
    let txtTodoEl = this .txtTodoEl.nativeElement;
    if(txtTodoEl.value.trim()=="")
       return;
    
    if(this.editMode) {
      this.todos[this.selectedIndex]= txtTodoEl.value;
      this.editMode = false;
      this.selectedIndex= null;
    }
    else {
       this.todos.push(txtTodoEl.value);
    }
   txtTodoEl.value="";
  }
  deleteTodo({index}) {
    console.log(index);
    this.todos.splice(index, 1);
  }
  editTodo({index}){
    this.editMode= true;
    this.selectedIndex = index;
    this.txtTodoEl.nativeElement.value = this.todos[index]
  }
}