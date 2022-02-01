import { Component, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/core/models/common/Language';
import { DataService } from 'src/app/core/services/common/data.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  selectedLang!: ILanguage;

  constructor(public dataService: DataService) {
    this.dataService.getSelectedLang().subscribe((selectedLang) => {
      this.selectedLang = selectedLang;
    });
  }

  ngOnInit(): void {}
}
