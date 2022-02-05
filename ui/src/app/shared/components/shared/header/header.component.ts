import { Component, Input, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { IMenu } from 'src/app/core/models/common/Menu';
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
  constructor() {
    this.navList = menu.menuList;
    this.profileList = menu.profileList;
  }

  ngOnInit(): void {}
}
