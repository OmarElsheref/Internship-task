import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: string = 'en';


  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  translateText(text: string): string {
    
    const translations: { [key: string]: { [key: string]: string } } = {
      "en": {
        "Add Product": "Add Product",
        "No Products Available": "No Products Available",
        "Dashboard": "Dashboard"
      },
      "ar": {
        "Add Product": "أضف منتج",
        "No Products Available": "لا توجد منتجات",
        "Dashboard": "لوحة التحكم"
      }
    };
    return translations[this.currentLang][text] || text;
  }
}
