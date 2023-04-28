import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('500ms ease-in-out'))
    ])
  ]
})
export class GalleryComponent {

  currentIndex = 0;

  images = [
    { url: "assets/img/hagi.jpg", alt: "Gheorghe Hagi"},
    { url: "assets/img/kaka.jpg", alt: "Ricardo Kaka"},
    { url: "assets/img/ibra.jpg", alt: "Zlatan Ibrahimovic"},
    { url: "assets/img/cr7.webp", alt: "Cristiano Ronaldo"}
  ];

  nextImage() {
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
  
  
}
