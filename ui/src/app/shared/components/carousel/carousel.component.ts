import { Component, Input, OnInit } from '@angular/core';
import { ICarousel } from 'src/app/core/models/common/Carousel';
import { ILanguage } from 'src/app/core/models/common/Language';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() imageList!: ICarousel[];
  @Input() selectedLang!: ILanguage;
  image!: ICarousel;
  constructor() {}

  ngOnInit(): void {
    this.image = this.imageList[0];
  }
}
