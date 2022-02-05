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
  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getSelectedLang().subscribe((value) => {
      this.selectedLang = value;
    });
    this.ContactFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }
}
