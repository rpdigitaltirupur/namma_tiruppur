import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HomeComponent } from './home.component';
import { HistoryComponent } from './history/history.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HistoryComponent, TodayComponent],
  imports: [CommonModule, HomeRoutingModule, TooltipModule, SharedModule],
})
export class HomeModule {}
