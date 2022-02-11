import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../models/common/Language';
import { DataService } from '../../services/common/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
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
    if (this.showSideMenu) {
      this.menuLeft = 0;
      this.mainLeft = 250;
    } else {
      this.menuLeft = -250;
      this.mainLeft = 0;
    }
  }
  ngOnInit(): void {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
  }
}
