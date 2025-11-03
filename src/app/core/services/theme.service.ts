import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light';

  setTheme(theme: string): void {
    console.log('Setting theme to:', theme);
    this.currentTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    console.log('Body classes:', document.body.className);
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
