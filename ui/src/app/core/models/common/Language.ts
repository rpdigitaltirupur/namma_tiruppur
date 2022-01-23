export interface ILanguage {
  name: string;
  icon: string;
  value: string;
  title: string;
  subTitle: string;
  langUri: string;
  font: string;
}

export class Language implements ILanguage {
  name!: string;
  icon!: string;
  value!: string;
  title!: string;
  subTitle!: string;
  langUri!: string;
  font!: string;
}
