import {
  MaterialModule
} from "./chunk-WM4JIUPE.js";
import "./chunk-NY622NM3.js";
import "./chunk-AK7Q3UBH.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  ReactiveFormsModule
} from "./chunk-Z6TDORLQ.js";
import {
  Router,
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/core/auth/guest.guard.ts
var GuestGuard = class _GuestGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (!this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/dashboard"]);
    return false;
  }
  static {
    this.\u0275fac = function GuestGuard_Factory(t) {
      return new (t || _GuestGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GuestGuard, factory: _GuestGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/auth/auth-routing.module.ts
var routes = [
  {
    path: "",
    canActivate: [GuestGuard],
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", loadComponent: () => import("./chunk-2DB3HLEV.js").then((c) => c.LoginStandaloneComponent) },
      { path: "register", loadComponent: () => import("./chunk-4CPF6FMX.js").then((c) => c.RegisterComponent) }
    ]
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(t) {
      return new (t || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule,
      AuthRoutingModule
    ] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-7VWUBDEH.js.map
