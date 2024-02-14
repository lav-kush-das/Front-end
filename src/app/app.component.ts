import { Component,ViewChild,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Elements } from './elements';


const ELEMENT_DATA: Elements[] = [

{ sensor: 'A',
   desc:"Reformer",
  unit: 'Gcal/hr',
  optimization:false,
  current_value:133.6,
  optimised_value:0,
  operator_low:151,
  operator_high:152,
  status:false
},

{ sensor: 'B',
desc:"Pressuer",
unit: 'Gcal/hr',
optimization:true,
current_value:110,
optimised_value:1,
operator_low:104,
operator_high:200,
status:true
},

{ sensor: 'C',
desc:"Pressuer",
unit: 'Gcal/hr',
optimization:true,
current_value:110,
optimised_value:1,
operator_low:104,
operator_high:200,
status:true
},

{ sensor: 'D',
desc:"Pressuer",
unit: 'Gcal/hr',
optimization:true,
current_value:110,
optimised_value:1,
operator_low:104,
operator_high:200,
status:true
},

{ sensor: 'E',
desc:"Pressuer",
unit: 'Gcal/hr',
optimization:true,
current_value:110,
optimised_value:1,
operator_low:104,
operator_high:200,
status:true
},


];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'materialApp';
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void{
  this.dataSource.sort=this.sort;
  this.dataSource.paginator=this.paginator;

  
}

  displayedColumns: string[] = ['sensor', 'desc', 'unit','optimization','current_value',
  'optimised_value','operator_low','operator_high','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addValue(){};

}
