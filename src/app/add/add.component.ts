import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService : DataService, private router: Router) { }

  ngOnInit(): void {
  }
onAddEmployee(empName,empDes){
  this.dataService.addEmploye({name:empName,designation:empDes})
  this.router.navigate(['empdetails']);
}
}
