import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ILanguage } from '../../models/common/Language';
import language from '../../../../assets/files/json/lang.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedLang: BehaviorSubject<ILanguage>;

  constructor() {
    this.selectedLang = new BehaviorSubject<ILanguage>(language.languages[0]);
  }

  getSelectedLang(): Observable<ILanguage> {
    return this.selectedLang.asObservable();
  }

  setSelectedLang(value: ILanguage): void {
    this.selectedLang.next(value);
  }
}
