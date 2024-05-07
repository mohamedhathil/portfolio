import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  hipo:any=true
  pay:any
  repo:any
  constructor() {}
  ngOnInit(): void{
   
  }
  func(val:any){
    this.hipo = val === 'hipo';
    this.pay = val === 'pay';
    this.repo = val === 'repo';
  }    
}
