import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SwiperComponent} from "angular2-useful-swiper";

import '../../../node_modules/swiper/dist/js/swiper.js';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

  images: any[];

  config: SwiperOptions  = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  constructor( private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadImages();
    this.cd.detectChanges();
  }


  loadImages() {
    this.images = [
      {"id":1,"image":"'http://lorempixel.com/200/200/sports"},
      {"id":2,"image":"'http://lorempixel.com/200/200/city"},
      {"id":3,"image":"'http://lorempixel.com/200/200/nature"},
      {"id":4,"image":"'http://lorempixel.com/200/200/sports"},
      {"id":5,"image":"'http://lorempixel.com/200/200/city"},
      {"id":6,"image":"'http://lorempixel.com/200/200/nature"}
    ];
  }

  next() {
    this.usefulSwiper.swiper.slideNext();
  }

  previous() {
    this.usefulSwiper.swiper.slidePrev();
  }

  getTotalSlides(): number[] {
    let pages: number[] = [];
    for (let i = 0; i < this.images.length; i++) {
      pages.push(i);
    }
    return pages;
  }

  isActiveDot(pageNum): boolean {
    return pageNum === this.usefulSwiper.swiper.activeIndex;
  }


}
