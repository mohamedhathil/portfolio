import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-comp',
  templateUrl: './skills-comp.component.html',
  styleUrls: ['./skills-comp.component.css']
})
export class SkillsCompComponent {
  isHtml:any=true
  isJS:any
  isAngular:any
  isNode:any
  isMysql:any
  constructor(){}
  ngOnInit(): void {}
     view(data:any){
      this.isHtml = data === 'html' ? true : false
      this.isJS=data === 'js'? true : false
      this.isAngular=data === 'angular'? true : false
      this.isNode=data === 'node'? true : false
      this.isMysql=data === 'sql'? true : false
     }
}
