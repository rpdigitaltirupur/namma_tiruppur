import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ILanguage } from '../../models/common/Language';
import language from '../../../../assets/files/json/lang.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedLang: BehaviorSubject<ILanguage>;
  public showSideMenu: BehaviorSubject<Boolean>;

  constructor() {
    this.selectedLang = new BehaviorSubject<ILanguage>(language.languages[0]);
    this.showSideMenu = new BehaviorSubject<Boolean>(false);
  }

  getSelectedLang(): Observable<ILanguage> {
    return this.selectedLang.asObservable();
  }

  setSelectedLang(value: ILanguage): void {
    this.selectedLang.next(value);
  }

  getShowSideMenu(): Observable<Boolean> {
    return this.showSideMenu.asObservable();
  }

  setShowSideMenu(value: Boolean): void {
    this.showSideMenu.next(value);
  }
}
