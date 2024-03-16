import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import * as AOS from 'aos';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  developerRoles: string[] = ['FrontEnd Developer', 'Web Developer'];
  currentRoleIndex = 0;
  

  @ViewChild('roleText')
  roleText!: ElementRef;

  ngAfterViewInit() {
    // Display first role immediately with animation
    this.triggerAnimation();

    // Change role every 2 seconds after the initial display
    interval(6000).subscribe(() => {
      this.changeRole();
      this.triggerAnimation();
    });
  }
  ngOnInit(): void{
    AOS.init();
  }

  // Function to cycle through roles
  changeRole() {
    this.currentRoleIndex = (this.currentRoleIndex + 1) % this.developerRoles.length;
  }

  // Function to trigger the text animation
  triggerAnimation() {
    const roleTextElement: HTMLElement = this.roleText.nativeElement;
    roleTextElement.classList.remove('animate-text');
    void roleTextElement.offsetWidth; // Trigger reflow to restart the animation
    roleTextElement.classList.add('animate-text');
  }
}
