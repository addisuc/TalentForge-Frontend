import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-OYAIDIFL.js";

// src/app/shared/components/toast/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toastSubject = new Subject();
    this.toasts$ = this.toastSubject.asObservable();
    this.idCounter = 0;
  }
  show(message, type = "info", duration) {
    const defaultDuration = type === "success" ? 5e3 : type === "error" ? 8e3 : 5e3;
    const toast = {
      id: this.idCounter++,
      message,
      type,
      duration: duration || defaultDuration
    };
    this.toastSubject.next(toast);
  }
  success(message, duration) {
    this.show(message, "success", duration);
  }
  error(message, duration) {
    this.show(message, "error", duration);
  }
  info(message, duration) {
    this.show(message, "info", duration);
  }
  warning(message, duration) {
    this.show(message, "warning", duration);
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-2XPUPG4G.js.map
