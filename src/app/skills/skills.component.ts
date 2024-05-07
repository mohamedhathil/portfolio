import { Component , HostListener, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeTab = 'search';
  isVisible: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {}
  @ViewChild('container') container!: ElementRef;
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
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const containerTop = this.container.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if any part of the container is within the viewport
    if (containerTop <= windowHeight) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  
  }
  
  
  
