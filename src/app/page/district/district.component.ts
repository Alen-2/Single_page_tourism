import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { districts } from 'src/assets/data';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {

  collection=districts;
  constructor(public router:Router){}

  districts:any;
  ngOnInit(){
    this.districts=districts;
  }

  goto(id:any){
    localStorage.setItem("title",id);
    this.router.navigate(['/singlepage']);
  }
}
