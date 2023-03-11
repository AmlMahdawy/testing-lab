import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(public testServ:TestServiceService) { }

  ngOnInit(): void {
    this.testServ.getdata();
  }

  check(x:number){
    if(x>=0){
      return "positive number";
    }
    else{
      return "negative number"
    }
  }

}
