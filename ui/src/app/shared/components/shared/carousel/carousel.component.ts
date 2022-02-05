import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ICarousel } from 'src/app/core/models/common/Carousel';
import { ILanguage } from 'src/app/core/models/common/Language';
import { DataService } from 'src/app/core/services/common/data.service';
import image from '../../../../../assets/files/json/image.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  imageList!: ICarousel[];
  @Input() selectedLang!: ILanguage;
  imageSliderSubscription: Subscription | undefined;
  image!: ICarousel;
  constructor(public dataService: DataService) {
    this.imageList = image.imageList;
  }

  ngOnInit(): void {
    if (this.imageList.length > 0) {
      this.setAllImageActiveFalse();
      this.imageList[0].active = true;
      this.image = this.imageList[0];
    }
    this.imageSliderSubscription = interval(3000).subscribe((x) => {
      this.processImageSlider();
    });
  }

  ngOnDestroy(): void {
    this.imageSliderSubscription?.unsubscribe();
  }

  processImageSlider() {
    if (this.imageList && this.imageList.length > 0) {
      let currentIndex = this.getCurrentIndex() + 1;
      if (currentIndex === this.imageList.length) {
        currentIndex = 0;
      }
      this.setAllImageActiveFalse();
      this.imageList[currentIndex].active = true;
      this.image = this.imageList[currentIndex];
    }
  }

  getCurrentIndex() {
    return this.imageList.findIndex((x: ICarousel) => {
      return x.active === true;
    });
  }

  setAllImageActiveFalse() {
    this.imageList.forEach(function (value) {
      value.active = false;
    });
  }

  setImageSlider(index: number) {
    this.setAllImageActiveFalse();
    this.imageList[index].active = true;
    this.image = this.imageList[index];
  }
}
