import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Test key - replace with real key
  private scriptLoaded = false;

  constructor() {}

  loadScript(): Promise<void> {
    if (this.scriptLoaded) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
      document.head.appendChild(script);
    });
  }

  execute(action: string = 'login'): Observable<string> {
    return from(
      this.loadScript().then(() => {
        return new Promise<string>((resolve, reject) => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            window.grecaptcha.ready(() => {
              window.grecaptcha
                .execute(this.siteKey, { action })
                .then((token: string) => resolve(token))
                .catch((error: any) => reject(error));
            });
          } else {
            reject(new Error('reCAPTCHA not loaded'));
          }
        });
      })
    );
  }

  getSiteKey(): string {
    return this.siteKey;
  }
}
