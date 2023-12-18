import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Task } from '../../model/task';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';
  constructor(private crudService:CrudService)
  {}
  ngOnInit():void
  {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
    addTask()
    {
      this.taskObj.task_name=this.addTaskValue
      this.crudService.addTask(this.taskObj).subscribe(res=>{
        this.ngOnInit();
        this.addTaskValue='';
      },err=>
      {
        alert(err);
      })
    }
    getAllTask()
    {
      this.crudService.getAllTask().subscribe(res=>
        {
         this.taskArr=res;
       

        },err=>{
          alert("Unable to get list");
        })
        }

        editTask() {
          this.taskObj.task_name = this.editTaskValue;
          this.crudService.updateTask(this.taskObj).subscribe(res => {
            this.ngOnInit();
          }, err=> {
            alert("Failed to update task");
          })
        }

        deleteTask(etask:Task)
        {
          this.crudService.deleteTask(etask).subscribe(res=>{
            this.ngOnInit();
          },err=>{
            alert("Unable to delete")
          });        }
          call(etask : Task) {
            this.taskObj = etask;
            this.editTaskValue = etask.task_name;
          }
        
  }


