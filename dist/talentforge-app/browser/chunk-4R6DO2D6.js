import {
  AuthFacadeService
} from "./chunk-AHXFDQY2.js";
import "./chunk-7UAQBOGW.js";
import "./chunk-SAOA7EEN.js";
import {
  UserRole
} from "./chunk-BAFRGCFI.js";
import {
  AuthService
} from "./chunk-KPX5MXOM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/admin/components/invite-user/invite-user.component.ts
function InviteUserComponent_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, InviteUserComponent_div_11_span_1_Template, 2, 0, "span", 16)(2, InviteUserComponent_div_11_span_2_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function InviteUserComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1, "Recruiter");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1, "Billing Manager");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1, "Platform Admin");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a role");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, InviteUserComponent_div_22_span_1_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role == null ? null : ctx_r0.role.errors == null ? null : ctx_r0.role.errors["required"]);
  }
}
function InviteUserComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function InviteUserComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function InviteUserComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Invitation");
    \u0275\u0275elementEnd();
  }
}
function InviteUserComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sending...");
    \u0275\u0275elementEnd();
  }
}
var InviteUserComponent = class _InviteUserComponent {
  constructor(fb, authFacade, authService) {
    this.fb = fb;
    this.authFacade = authFacade;
    this.authService = authService;
    this.loading = false;
    this.successMessage = "";
    this.errorMessage = "";
    this.isTenantAdmin = false;
    this.isPlatformAdmin = false;
    this.isPlatformSuperAdmin = false;
    this.inviteForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      role: ["", Validators.required]
    });
  }
  ngOnInit() {
    const user = this.authService.getCurrentUserValue();
    if (user) {
      this.isTenantAdmin = user.role === UserRole.TENANT_ADMIN;
      this.isPlatformAdmin = user.role === UserRole.PLATFORM_ADMIN || user.role === UserRole.PLATFORM_SUPER_ADMIN;
      this.isPlatformSuperAdmin = user.role === UserRole.PLATFORM_SUPER_ADMIN;
    }
  }
  get email() {
    return this.inviteForm.get("email");
  }
  get role() {
    return this.inviteForm.get("role");
  }
  onSubmit() {
    if (this.inviteForm.valid) {
      this.loading = true;
      this.successMessage = "";
      this.errorMessage = "";
      const invitationData = {
        email: this.email?.value,
        role: this.role?.value
      };
      this.authFacade.sendInvitation(invitationData).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = `Invitation sent to ${invitationData.email}`;
          this.inviteForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || "Failed to send invitation";
        }
      });
    }
  }
  static {
    this.\u0275fac = function InviteUserComponent_Factory(t) {
      return new (t || _InviteUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthFacadeService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteUserComponent, selectors: [["app-invite-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 16, consts: [[1, "invite-container"], [1, "invite-card"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "user@example.com", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["for", "role"], ["id", "role", "formControlName", "role", 1, "form-control"], ["value", ""], ["value", "RECRUITER", 4, "ngIf"], ["value", "TENANT_ADMIN", 4, "ngIf"], ["value", "BILLING_MANAGER", 4, "ngIf"], ["value", "PLATFORM_ADMIN", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "error-message"], ["value", "RECRUITER"], ["value", "TENANT_ADMIN"], ["value", "BILLING_MANAGER"], ["value", "PLATFORM_ADMIN"], [1, "success-message"]], template: function InviteUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Invite User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Send an invitation to create an account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function InviteUserComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 3)(8, "label", 4);
        \u0275\u0275text(9, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275template(11, InviteUserComponent_div_11_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 3)(13, "label", 7);
        \u0275\u0275text(14, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 8)(16, "option", 9);
        \u0275\u0275text(17, "Select role");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, InviteUserComponent_option_18_Template, 2, 0, "option", 10)(19, InviteUserComponent_option_19_Template, 2, 0, "option", 11)(20, InviteUserComponent_option_20_Template, 2, 0, "option", 12)(21, InviteUserComponent_option_21_Template, 2, 0, "option", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, InviteUserComponent_div_22_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, InviteUserComponent_div_23_Template, 2, 1, "div", 14)(24, InviteUserComponent_div_24_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(25, "button", 15);
        \u0275\u0275template(26, InviteUserComponent_span_26_Template, 2, 0, "span", 16)(27, InviteUserComponent_span_27_Template, 2, 0, "span", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.inviteForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", (ctx.role == null ? null : ctx.role.invalid) && (ctx.role == null ? null : ctx.role.touched));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isTenantAdmin || ctx.isPlatformAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isTenantAdmin || ctx.isPlatformAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPlatformAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPlatformSuperAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.role == null ? null : ctx.role.invalid) && (ctx.role == null ? null : ctx.role.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.inviteForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.invite-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.invite-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n  max-width: 500px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\np[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background: #d1fae5;\n  border-radius: 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #0066ff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0052cc;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invite-user.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteUserComponent, { className: "InviteUserComponent" });
})();
export {
  InviteUserComponent
};
//# sourceMappingURL=chunk-4R6DO2D6.js.map
