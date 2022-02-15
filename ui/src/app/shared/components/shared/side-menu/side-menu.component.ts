import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from '../../../../core/models/common/Menu';
import { ILanguage } from '../../../../core/models/common/Language';
import menu from '../../../../../assets/files/json/menu.json';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  navList: IMenu[] = [];
  profileList: IMenu[] = [];
  @Input() selectedLang!: ILanguage;
  constructor() {
    this.navList = menu.menuList;
    this.profileList = menu.profileList;
  }

  ngOnInit(): void {}
}
