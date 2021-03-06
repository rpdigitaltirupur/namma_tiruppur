import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    TopHeaderComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule, TooltipModule, RouterModule],
  exports: [
    TopHeaderComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SideMenuComponent
  ],
})
export class SharedModule {}
