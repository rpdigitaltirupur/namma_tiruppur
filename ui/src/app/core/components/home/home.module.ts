import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HomeComponent } from './home.component';
import { HistoryComponent } from './history/history.component';
import { TodayComponent } from './today/today.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HistoryComponent,
    TodayComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, TooltipModule],
})
export class HomeModule {}
