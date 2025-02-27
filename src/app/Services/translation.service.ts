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
        "Dashboard": "Dashboard",
        "Products": "Products",
        "Settings": "Settings",
        "Ecommerce": "Ecommerce",
        "User Listing": "User Listing",
        "Add New User": "Add New User",
        "Next": "Next",
        "Previous": "Previous",
        "Showing 1 to 5 of 5 entries": "Showing 1 to 5 of 5 entries",
        "ID": "ID",
        "NAME": "NAME",
        "EMAIL": "EMAIL",
        "Search users...": "Search users..."
      },
      "ar": {
        "Add Product": "أضف منتج",
        "No Products Available": "لا توجد منتجات",
        "Dashboard": "لوحة التحكم",
        "Products": "المنتجات",
        "Settings": "الإعدادات",
        "Ecommerce": "متجر إلكتروني",
        "User Listing": "قائمة المستخدمين",
        "Add New User": "إضافة مستخدم جديد",
        "Next": "التالي",
        "Previous": "السابق",
        "Showing 1 to 5 of 5 entries": "عرض 1 إلى 5 من 5 إدخالات",
        "ID": "رقم التعريف",
        "NAME": "الاسم",
        "EMAIL": "الايميل",
        "Search users...": "بحث المستخدمين..."
      }
    };
    return translations[this.currentLang][text] || text;
  }
}
