import { Component } from '@angular/core';
import { CoreService } from "./core/services/core.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Արաքս թռչնաֆաբրիկայի առաքիչների աշխատավարձերի ավտոմատ հաշվարկ1';
  employees = [];
  constructor(private coreService: CoreService){
  }

  getData(){
    this.employees = this.coreService.generateData();
  }
  newData(){
    this.employees = this.coreService.generateData();
  }
}
