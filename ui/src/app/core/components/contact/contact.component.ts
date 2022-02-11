import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILanguage } from '../../models/common/Language';
import { DataService } from '../../services/common/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  selectedLang!: ILanguage;
  ContactFormGroup!: FormGroup;
  showSideMenu!: Boolean;
  menuLeft: number = -250;
  mainLeft: number = 0;
  constructor(public dataService: DataService) {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
    this.showSideMenu = this.dataService.showSideMenu.value;
    this.changeSideMenuLeft();
    this.dataService.getShowSideMenu().subscribe((value) => {
      this.showSideMenu = value;
      this.changeSideMenuLeft();
    });
  }

  changeSideMenuLeft() {
    if(this.showSideMenu) {
      this.menuLeft = 0;
      this.mainLeft = 250;
    }
    else {
      this.menuLeft = -250;
      this.mainLeft = 0;
    }
  }
  ngOnInit(): void {
    this.ContactFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }
}
