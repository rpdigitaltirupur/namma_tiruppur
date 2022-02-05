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
import { ILanguage } from './core/models/common/Language';
import language from '../assets/files/json/lang.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  lang!: ILanguage;
  langs!: ILanguage[];
  constructor(
    public title: Title,
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.lang = language.languages[0];
    this.langs = language.languages;
    this.renderer.addClass(document.body, this.lang.value + '-font');
  }
  ngOnInit(): void {
    this.title.setTitle(this.lang.title + ' - ' + this.lang.subTitle);
  }
  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}
}
