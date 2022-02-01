import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';
import {
  Climate,
  DateTime,
  IClimate,
  IClimateResponse,
  IDateTime,
  MonthInWords,
} from 'src/app/core/models/common/Climate';
import { ILanguage } from 'src/app/core/models/common/Language';
import { IMenu } from 'src/app/core/models/common/Menu';
import { DataService } from 'src/app/core/services/common/data.service';
import { HttpService } from 'src/app/core/services/common/http-service.service';
import { RouterConstant } from 'src/app/shared/constants/RouterConstant';
import { environment } from 'src/environments/environment';
import language from '../../../../assets/files/json/lang.json';
import menu from '../../../../assets/files/json/menu.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  navList: IMenu[] = [];
  profileList: IMenu[] = [];
  lang!: ILanguage;
  langs!: ILanguage[];
  selectedLang!: ILanguage;
  showLangList: boolean = false;
  subscriptionOneSecond!: Subscription;
  subscriptionThreeSecond!: Subscription;
  subscriptionTenSecond!: Subscription;
  climateResponse: IClimateResponse | undefined;
  climate: IClimate | undefined;
  dateTime: IDateTime | undefined;
  leftListSliding: boolean[] = [false, true, true, true, true, true, true];
  status: boolean = false;
  constructor(
    public dataService: DataService,
    public title: Title,
    public httpService: HttpService,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.lang = language.languages[0];
    this.langs = language.languages;
    this.renderer.addClass(document.body, this.lang.value + '-font');
  }
  ngOnInit(): void {
    this.title.setTitle(this.lang.title + ' - ' + this.lang.subTitle);
    this.subscriptionOneSecond = interval(1000).subscribe((x) => {
      this.processDateTime();
    });
    this.subscriptionThreeSecond = interval(3000).subscribe((x) => {
      this.processLeftListSliding();
    });
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
    this.navList = menu.menuList;
    this.profileList = menu.profileList;
  }
  ngOnDestroy(): void {
    this.subscriptionOneSecond.unsubscribe();
    this.subscriptionThreeSecond.unsubscribe();
    this.subscriptionTenSecond.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.getClimateResponse();
    //this.getServerStatus();
    this.subscriptionTenSecond = interval(60000).subscribe((x) => {
      //this.getServerStatus();
    });
  }

  outsideClick(clicked: any) {
    if (clicked) {
      this.showLangList = false;
    }
  }

  changeLanguage(lang: ILanguage) {
    this.dataService.setSelectedLang(lang);
    this.title.setTitle(lang.title + ' - ' + lang.subTitle);
    this.showLangList = false;
    this.getClimateResponse();
  }

  getLanguages(langs: ILanguage[]) {
    let langsArray: string[] = [];
    if (langs && langs.length > 0) {
      langs.forEach(function (lang) {
        langsArray.push(lang.value);
      });
    }
    return langsArray;
  }

  getClimateResponse() {
    this.httpService
      .getWithoutParams(environment.weatherApi + this.selectedLang.langUri)
      .subscribe((data) => {
        this.climateResponse = <IClimateResponse>data;
        this.processClimateResponse();
      });
  }

  processClimateResponse() {
    if (this.climateResponse) {
      let climate = new Climate();
      climate.weatherCondition = this.climateResponse.current.condition.text;
      climate.temperatureC = this.climateResponse.current.temp_c;
      climate.temperatureF = this.climateResponse.current.temp_f;
      climate.iconUrl = this.climateResponse.current.condition.icon;
      climate.windMPH = this.climateResponse.current.wind_mph;
      climate.windKPH = this.climateResponse.current.wind_kph;
      climate.windDegree = this.climateResponse.current.wind_degree;
      climate.windDirection = this.climateResponse.current.wind_dir;
      climate.humidity = this.climateResponse.current.humidity;
      climate.cloud = this.climateResponse.current.cloud;
      this.climate = climate;
      this.processDateTime();
    }
  }

  processDateTime() {
    if (!this.climate) {
      this.climate = new Climate();
    }
    let date = new Date();
    let dateTime = new DateTime();
    dateTime.day =
      date.getDate() > 9 ? '' + date.getDate() : '0' + date.getDate();
    dateTime.dayInWord = date.toLocaleString('en-us', { weekday: 'long' });
    dateTime.month = date.getMonth();
    dateTime.monthInWord = MonthInWords[date.getMonth()];
    dateTime.year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    dateTime.period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    dateTime.hour = hours > 9 ? '' + hours : '0' + hours;
    dateTime.minute = minutes > 9 ? '' + minutes : '0' + minutes;
    dateTime.second = seconds > 9 ? '' + seconds : '0' + seconds;
    dateTime.date =
      dateTime.dayInWord +
      ' ' +
      dateTime.monthInWord +
      ', ' +
      dateTime.day +
      ' ' +
      dateTime.year;
    dateTime.time =
      dateTime.hour + ':' + dateTime.minute + ' ' + dateTime.period;
    this.climate.dateTime = dateTime;
  }

  processLeftListSliding() {
    let prevIndex = this.leftListSliding.indexOf(false);
    let index = this.leftListSliding.indexOf(false) + 1;
    if (index == this.leftListSliding.length) {
      index = 0;
      prevIndex = this.leftListSliding.length - 1;
    }
    this.leftListSliding[prevIndex] = true;
    this.leftListSliding[index] = false;
  }

  getServerStatus() {
    this.httpService.get(RouterConstant.STATUS).subscribe((data: any) => {
      if (data && data.status === 'UP') {
        this.status = true;
      }
    });
  }
}