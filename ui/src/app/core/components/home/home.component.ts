import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { IMenu } from 'src/app/core/models/common/Menu';
import { DataService } from 'src/app/core/services/common/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  navList: IMenu[] = [];
  profileList: IMenu[] = [];
  selectedLang!: ILanguage;
  showSideMenu!: Boolean;
  menuLeft: number = -250;
  mainLeft: number = 0;
  constructor(public dataService: DataService) {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
    this.showSideMenu = this.dataService.showSideMenu.value;
    this.changeSideMenuLeft();
    this.dataService.getShowSideMenu().subscribe((value) => {
      this.showSideMenu = value;
      this.changeSideMenuLeft();
    });
  }
  changeSideMenuLeft() {
    if(this.showSideMenu) {
      this.menuLeft = 0;
      this.mainLeft = 250;
    }
    else {
      this.menuLeft = -250;
      this.mainLeft = 0;
    }
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}
  outsideClick(clicked: any) {}
}
