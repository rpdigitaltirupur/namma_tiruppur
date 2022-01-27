export interface ILanguage {
  name: string;
  icon: string;
  value: string;
  title: string;
  subTitle: string;
  langUri: string;
  font: string;
  translate: any;
}

export class Language implements ILanguage {
  name!: string;
  icon!: string;
  value!: string;
  title!: string;
  subTitle!: string;
  langUri!: string;
  font!: string;
  translate!: any;
}
