import { Component, Input, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { DataService } from 'src/app/core/services/common/data.service';
import language from '../../../../../assets/files/json/lang.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  languages: ILanguage[] = language.languages;
  @Input() selectedLang!: ILanguage;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  changeLanguage(lang: ILanguage) {
    this.dataService.setSelectedLang(lang);
  }
}
