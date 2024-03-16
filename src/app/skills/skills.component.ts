import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeTab = 'search';


  constructor(){}
  ngOnInit(): void {}
  search(activeTab: string, $event: MouseEvent): void {
    $event.preventDefault();
    this.activeTab = activeTab;
  }


  result(activeTab: string, $event: MouseEvent): void {
    $event.preventDefault();
    this.activeTab = activeTab;
  }
  option(activeTab: string, $event: MouseEvent): void {
    $event.preventDefault();
    this.activeTab = activeTab;
  }
  styles(activeTab: string, $event: MouseEvent): void {
    $event.preventDefault();
    this.activeTab = activeTab;
  }
}
