import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../models/common/Language';
import { DataService } from '../../services/common/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  selectedLang!: ILanguage;
  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
  }
}
