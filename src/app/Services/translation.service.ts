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
        "Product Listing": "Product Listing",
        "Add New Product": "Add New Product",
        "Next": "Next",
        "Previous": "Previous",
        "Showing": "Showing",
        "to": "to",
        "of": "of",
        "products": "products",
        "Product Image": "Product Image",
        "Product Name": "Product Name",
        "Product Description": "Product Description",
        "Price": "Price",
        "Actions": "Actions",
        "Search products...": "Search products...",
        "Logout": "Logout"
      },
      "ar": {
        "Add Product": "أضف منتج",
        "No Products Available": "لا توجد منتجات",
        "Dashboard": "لوحة التحكم",
        "Products": "المنتجات",
        "Settings": "الإعدادات",
        "Ecommerce": "متجر إلكتروني",
        "Product Listing": "قائمة المنتجات",
        "Add New Product": "إضافة منتج جديد",
        "Next": "التالي",
        "Previous": "السابق",
        "Showing 1 to 5 of 5 entries": "عرض  إلى 5 من 5 إدخالات",
        "Showing": "عرض",
        "to": "إلى",
        "of": "من",
        "products": "منتجات",
        "Product Image": "صورة المنتج",
        "Product Name": "اسم المنتج",
        "Product Description": "وصف المنتج",
        "Price": "السعر",
        "Actions": "الأفعال",
        "Search products...": "بحث المنتجات...",
        "Logout": "تسجيل الخروج"
      }
    };
    return translations[this.currentLang][text] || text;
  }
}
