import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToElement() {
    const targetElement = document.querySelector('.element-to-scroll-to');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      console.error('Target element not found');
    }
  }
}

