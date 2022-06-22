import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  employees:{id:number,name:string,designation:string};
  constructor(private dataService : DataService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employees={
      id:this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
      designation: this.route.snapshot.params['designation']
  };

}
onEdit(id:number,designation:string){
  this.dataService.changeDesignation({index:id, NewDes: designation});
  this.router.navigate(['/empdetails']);
}
}
