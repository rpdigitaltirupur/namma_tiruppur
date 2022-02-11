import { Component, Input, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { IMenu } from 'src/app/core/models/common/Menu';
import { DataService } from 'src/app/core/services/common/data.service';
import menu from '../../../../../assets/files/json/menu.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navList: IMenu[] = [];
  profileList: IMenu[] = [];
  @Input() selectedLang!: ILanguage;
  showSideMenu: Boolean;
  constructor(private dataService: DataService) {
    this.navList = menu.menuList;
    this.profileList = menu.profileList;
    this.showSideMenu = this.dataService.showSideMenu.value;
    this.dataService.getShowSideMenu().subscribe((value) => {
      this.showSideMenu = value;
    });
  }

  ngOnInit(): void {}

  showHideSideMenu() {
    this.dataService.setShowSideMenu(!this.showSideMenu);
  }
}
