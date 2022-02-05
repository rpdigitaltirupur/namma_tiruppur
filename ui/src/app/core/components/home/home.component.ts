import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  constructor(
    public dataService: DataService,
  ) {}
  ngOnInit(): void {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
  }
  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}

  outsideClick(clicked: any) {}

}
