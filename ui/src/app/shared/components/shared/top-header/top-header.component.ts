import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { DataService } from 'src/app/core/services/common/data.service';
import { RouterConstant } from '../../../constants/RouterConstant';
import {
  Climate,
  DateTime,
  IClimateResponse,
  MonthInWords,
} from 'src/app/core/models/common/Climate';
import language from '../../../../../assets/files/json/lang.json';
import { environment } from 'src/environments/environment';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/common/http-service.service';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  leftListSliding: boolean[] = [false, true, true, true, true, true, true];
  status: boolean = false;
  @Input() selectedLang!: ILanguage;
  subscriptionOneSecond!: Subscription;
  subscriptionThreeSecond!: Subscription;
  subscriptionTenSecond!: Subscription;
  showLangList: boolean = false;
  climateResponse: IClimateResponse | undefined;
  climate: any;
  lang!: ILanguage;
  langs!: ILanguage[];
  constructor(
    private dataService: DataService,
    private httpService: HttpService
  ) {
    this.lang = language.languages[0];
    this.langs = language.languages;
  }

  ngOnInit(): void {
    this.subscriptionOneSecond = interval(1000).subscribe((x) => {
      this.processDateTime();
    });
    this.subscriptionThreeSecond = interval(3000).subscribe((x) => {
      this.processLeftListSliding();
    });
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
      this.getClimateResponse();
    });
  }

  changeLanguage(lang: ILanguage) {
    this.dataService.setSelectedLang(lang);
    this.showLangList = false;
    this.getClimateResponse();
  }

  async getClimateResponse() {
    /*this.httpService
      .getWithoutParams(environment.weatherApi + this.selectedLang.langUri)
      .subscribe((data: IClimateResponse) => {
        this.climateResponse = <IClimateResponse>data;
        this.processClimateResponse();
      });*/
  }

  ngAfterViewInit(): void {
    this.getClimateResponse();
    this.getServerStatus();
    this.subscriptionTenSecond = interval(60000).subscribe((x) => {
      this.getServerStatus();
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOneSecond.unsubscribe();
    this.subscriptionThreeSecond.unsubscribe();
    this.subscriptionTenSecond.unsubscribe();
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
    /*this.httpService
      .get('http://localhost:8080' + RouterConstant.STATUS)
      .subscribe((data: any) => {
        if (data && data.status === 'UP') {
          this.status = true;
        }
      });*/
  }
}
