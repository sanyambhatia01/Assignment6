import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employees:{name,designation}[]=[];
  constructor(private dataService : DataService, private route : Router, private route2 : ActivatedRoute) { }

  ngOnInit() {
    this.employees=this.dataService.Employees;
  }
  onNameClick(){
    this.route.navigate(['/empInfo']); 
  }
  onReload(){
    this.route.navigate(['/empdetails'] , {relativeTo : this.route2}); 
   }
}
