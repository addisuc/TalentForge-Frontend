import {
  TenantService
} from "./chunk-2W7S4JUN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  RouterModule
} from "./chunk-OEVDKEI3.js";
import "./chunk-LI6IQ5NJ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/platform-admin/tenants-manage.component.ts
function TenantsManageComponent_tr_56_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function TenantsManageComponent_tr_56_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const tenant_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.suspendTenant(tenant_r2));
    });
    \u0275\u0275text(1, "Suspend");
    \u0275\u0275elementEnd();
  }
}
function TenantsManageComponent_tr_56_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function TenantsManageComponent_tr_56_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tenant_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activateTenant(tenant_r2));
    });
    \u0275\u0275text(1, "Activate");
    \u0275\u0275elementEnd();
  }
}
function TenantsManageComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 28)(22, "button", 29);
    \u0275\u0275listener("click", function TenantsManageComponent_tr_56_Template_button_click_22_listener() {
      const tenant_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(tenant_r2));
    });
    \u0275\u0275text(23, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 29);
    \u0275\u0275listener("click", function TenantsManageComponent_tr_56_Template_button_click_24_listener() {
      const tenant_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(tenant_r2));
    });
    \u0275\u0275text(25, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, TenantsManageComponent_tr_56_button_26_Template, 2, 0, "button", 30)(27, TenantsManageComponent_tr_56_button_27_Template, 2, 0, "button", 30);
    \u0275\u0275elementStart(28, "button", 31);
    \u0275\u0275listener("click", function TenantsManageComponent_tr_56_Template_button_click_28_listener() {
      const tenant_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteTenant(tenant_r2));
    });
    \u0275\u0275text(29, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tenant_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", tenant_r2.subdomain, ".talentforge.com");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r2.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r2.users);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r2.jobs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", tenant_r2.mrr, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tenant_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, tenant_r2.createdAt, "MMM d, yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", tenant_r2.status === "Active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tenant_r2.status === "Suspended");
  }
}
function TenantsManageComponent_div_74_label_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 60);
    \u0275\u0275element(1, "input", 61);
    \u0275\u0275elementStart(2, "div", 62)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", plan_r7.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", plan_r7.price, "/month");
  }
}
function TenantsManageComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function TenantsManageComponent_div_74_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function TenantsManageComponent_div_74_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h2", 36);
    \u0275\u0275text(4, "Add New Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function TenantsManageComponent_div_74_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 38);
    \u0275\u0275listener("ngSubmit", function TenantsManageComponent_div_74_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTenant());
    });
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 40)(10, "h3");
    \u0275\u0275text(11, "Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "label", 42);
    \u0275\u0275text(14, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 41)(17, "label", 44);
    \u0275\u0275text(18, "Subdomain *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 45);
    \u0275\u0275element(20, "input", 46);
    \u0275\u0275elementStart(21, "span", 47);
    \u0275\u0275text(22, ".talentforge.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24, "Only lowercase letters, numbers, and hyphens");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 40)(26, "h3");
    \u0275\u0275text(27, "Subscription Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 48);
    \u0275\u0275template(29, TenantsManageComponent_div_74_label_29_Template, 7, 3, "label", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 40)(31, "h3");
    \u0275\u0275text(32, "Admin User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 50)(34, "div", 41)(35, "label", 51);
    \u0275\u0275text(36, "First Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 41)(39, "label", 53);
    \u0275\u0275text(40, "Last Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 41)(43, "label", 55);
    \u0275\u0275text(44, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 57)(47, "button", 58);
    \u0275\u0275listener("click", function TenantsManageComponent_div_74_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 59);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.addTenantForm);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.plans);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r2.addTenantForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Creating..." : "Create Tenant", " ");
  }
}
function TenantsManageComponent_div_75_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 67)(2, "div", 68)(3, "label");
    \u0275\u0275text(4, "Subdomain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 68)(8, "label");
    \u0275\u0275text(9, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 68)(13, "label");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 68)(18, "label");
    \u0275\u0275text(19, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 68)(23, "label");
    \u0275\u0275text(24, "Active Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 68)(28, "label");
    \u0275\u0275text(29, "MRR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 68)(33, "label");
    \u0275\u0275text(34, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedTenant.subdomain, ".talentforge.com");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTenant.plan);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.selectedTenant.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedTenant.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTenant.users);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTenant.jobs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r2.selectedTenant.mrr, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 9, ctx_r2.selectedTenant.createdAt, "MMM d, yyyy"));
  }
}
function TenantsManageComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function TenantsManageComponent_div_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailsModal());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function TenantsManageComponent_div_75_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function TenantsManageComponent_div_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailsModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TenantsManageComponent_div_75_div_7_Template, 38, 12, "div", 65);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 66);
    \u0275\u0275listener("click", function TenantsManageComponent_div_75_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailsModal());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedTenant == null ? null : ctx_r2.selectedTenant.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedTenant);
  }
}
function TenantsManageComponent_div_76_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r10 = ctx.$implicit;
    \u0275\u0275property("value", plan_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r10.label);
  }
}
function TenantsManageComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function TenantsManageComponent_div_76_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function TenantsManageComponent_div_76_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h2", 70);
    \u0275\u0275text(4, "Edit Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function TenantsManageComponent_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 38);
    \u0275\u0275listener("ngSubmit", function TenantsManageComponent_div_76_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateTenant());
    });
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 41)(10, "label", 71);
    \u0275\u0275text(11, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 41)(14, "label", 73);
    \u0275\u0275text(15, "Subdomain *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 45);
    \u0275\u0275element(17, "input", 74);
    \u0275\u0275elementStart(18, "span", 47);
    \u0275\u0275text(19, ".talentforge.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 41)(21, "label", 75);
    \u0275\u0275text(22, "Subscription Plan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 76);
    \u0275\u0275template(24, TenantsManageComponent_div_76_option_24_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 57)(26, "button", 58);
    \u0275\u0275listener("click", function TenantsManageComponent_div_76_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 59);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.editTenantForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.plans);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.editTenantForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Updating..." : "Update Tenant", " ");
  }
}
function TenantsManageComponent_div_77_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "Are you sure you want to delete ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "This action cannot be undone.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.tenantToDelete.name);
  }
}
function TenantsManageComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function TenantsManageComponent_div_77_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275listener("click", function TenantsManageComponent_div_77_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h2", 79);
    \u0275\u0275text(4, "Delete Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function TenantsManageComponent_div_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TenantsManageComponent_div_77_div_7_Template, 8, 1, "div", 65);
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function TenantsManageComponent_div_77_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 80);
    \u0275\u0275listener("click", function TenantsManageComponent_div_77_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete());
    });
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.tenantToDelete);
  }
}
var TenantsManageComponent = class _TenantsManageComponent {
  constructor(tenantService, fb) {
    this.tenantService = tenantService;
    this.fb = fb;
    this.tenants = [];
    this.loading = false;
    this.showAddModal = false;
    this.showDetailsModal = false;
    this.showDeleteModal = false;
    this.showEditModal = false;
    this.selectedTenant = null;
    this.tenantToDelete = null;
    this.Math = Math;
    this.searchQuery = "";
    this.selectedPlan = "all";
    this.selectedStatus = "all";
    this.currentPage = 0;
    this.itemsPerPage = 25;
    this.totalElements = 0;
    this.plans = [
      { value: "Starter", label: "Starter - $500/month", price: 500 },
      { value: "Professional", label: "Professional - $1,200/month", price: 1200 },
      { value: "Enterprise", label: "Enterprise - $2,500/month", price: 2500 }
    ];
  }
  ngOnInit() {
    this.initForm();
    this.loadTenants();
  }
  initForm() {
    this.addTenantForm = this.fb.group({
      name: ["", Validators.required],
      subdomain: ["", [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      plan: ["Professional", Validators.required],
      adminEmail: ["", [Validators.required, Validators.email]],
      adminFirstName: ["", Validators.required],
      adminLastName: ["", Validators.required]
    });
    this.editTenantForm = this.fb.group({
      name: ["", Validators.required],
      subdomain: ["", [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      plan: ["", Validators.required]
    });
  }
  loadTenants() {
    this.loading = true;
    this.tenantService.getAllTenants(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.tenants = response.content || response;
        this.totalElements = response.totalElements || this.tenants.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openAddModal() {
    this.showAddModal = true;
    this.addTenantForm.reset({ plan: "Professional" });
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  addTenant() {
    if (this.addTenantForm.invalid) {
      Object.keys(this.addTenantForm.controls).forEach((key) => {
        this.addTenantForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const request = this.addTenantForm.value;
    this.tenantService.createTenant(request).subscribe({
      next: (newTenant) => {
        this.tenants.unshift(newTenant);
        this.totalElements++;
        this.loading = false;
        this.closeAddModal();
      },
      error: (err) => {
        console.error("Error creating tenant:", err);
        const errorMsg = err.error?.message || err.message || "Unknown error occurred";
        alert("Error: " + errorMsg);
        this.loading = false;
      }
    });
  }
  viewDetails(tenant) {
    this.selectedTenant = tenant;
    this.showDetailsModal = true;
  }
  closeDetailsModal() {
    this.showDetailsModal = false;
    this.selectedTenant = null;
  }
  suspendTenant(tenant) {
    if (confirm(`Suspend ${tenant.name}? Users will lose access immediately.`)) {
      this.tenantService.suspendTenant(tenant.id).subscribe({
        next: () => this.loadTenants()
      });
    }
  }
  activateTenant(tenant) {
    this.tenantService.activateTenant(tenant.id).subscribe({
      next: () => this.loadTenants()
    });
  }
  deleteTenant(tenant) {
    this.tenantToDelete = tenant;
    this.showDeleteModal = true;
  }
  confirmDelete() {
    if (this.tenantToDelete) {
      this.tenantService.deleteTenant(this.tenantToDelete.id).subscribe({
        next: () => {
          this.loadTenants();
          this.closeDeleteModal();
        }
      });
    }
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.tenantToDelete = null;
  }
  openEditModal(tenant) {
    this.selectedTenant = tenant;
    this.editTenantForm.patchValue({
      name: tenant.name,
      subdomain: tenant.subdomain,
      plan: tenant.plan
    });
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.selectedTenant = null;
  }
  updateTenant() {
    if (this.editTenantForm.invalid || !this.selectedTenant)
      return;
    this.loading = true;
    const updates = this.editTenantForm.value;
    this.tenantService.updateTenant(this.selectedTenant.id, updates).subscribe({
      next: (updatedTenant) => {
        const index = this.tenants.findIndex((t) => t.id === updatedTenant.id);
        if (index !== -1) {
          this.tenants[index] = updatedTenant;
        }
        this.loading = false;
        this.closeEditModal();
      },
      error: (err) => {
        console.error("Error updating tenant:", err);
        alert("Error: " + (err.error?.message || err.message || "Failed to update tenant"));
        this.loading = false;
      }
    });
  }
  get totalPages() {
    return Math.ceil(this.totalElements / this.itemsPerPage);
  }
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadTenants();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadTenants();
    }
  }
  onItemsPerPageChange() {
    this.currentPage = 0;
    this.loadTenants();
  }
  static {
    this.\u0275fac = function TenantsManageComponent_Factory(t) {
      return new (t || _TenantsManageComponent)(\u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantsManageComponent, selectors: [["app-tenants-manage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 19, consts: [[1, "tenants-page"], [1, "page-header"], [1, "btn-primary", 3, "click"], [1, "filters-section"], [1, "search-bar"], [1, "icon"], ["type", "text", "placeholder", "Search tenants...", 3, "ngModelChange", "ngModel"], [1, "filters"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "Enterprise"], ["value", "Professional"], ["value", "Starter"], ["value", "Active"], ["value", "Trial"], ["value", "Suspended"], [1, "table-container"], ["role", "table", 1, "data-table"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-info"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "badge"], [1, "action-buttons"], [1, "btn-action", 3, "click"], ["class", "btn-action secondary", 3, "click", 4, "ngIf"], [1, "btn-action", "danger", 3, "click"], [1, "btn-action", "secondary", 3, "click"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-labelledby", "add-tenant-title", 1, "modal-content", 3, "click"], [1, "modal-header"], ["id", "add-tenant-title"], ["aria-label", "Close", 1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-section"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "e.g., TechCorp Recruiting", 1, "form-control"], ["for", "subdomain"], [1, "input-group"], ["id", "subdomain", "type", "text", "formControlName", "subdomain", "placeholder", "techcorp", 1, "form-control"], [1, "input-suffix"], [1, "plan-options"], ["class", "plan-option", 4, "ngFor", "ngForOf"], [1, "form-row"], ["for", "adminFirstName"], ["id", "adminFirstName", "type", "text", "formControlName", "adminFirstName", 1, "form-control"], ["for", "adminLastName"], ["id", "adminLastName", "type", "text", "formControlName", "adminLastName", 1, "form-control"], ["for", "adminEmail"], ["id", "adminEmail", "type", "email", "formControlName", "adminEmail", "placeholder", "admin@company.com", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "plan-option"], ["type", "radio", "formControlName", "plan", 3, "value"], [1, "plan-card"], [1, "price"], ["role", "dialog", 1, "modal-content", "large", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "btn-secondary", 3, "click"], [1, "details-grid"], [1, "detail-item"], ["role", "dialog", "aria-labelledby", "edit-tenant-title", 1, "modal-content", 3, "click"], ["id", "edit-tenant-title"], ["for", "edit-name"], ["id", "edit-name", "type", "text", "formControlName", "name", 1, "form-control"], ["for", "edit-subdomain"], ["id", "edit-subdomain", "type", "text", "formControlName", "subdomain", 1, "form-control"], ["for", "edit-plan"], ["id", "edit-plan", "formControlName", "plan", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["role", "dialog", "aria-labelledby", "delete-tenant-title", 1, "modal-content", 3, "click"], ["id", "delete-tenant-title"], ["type", "button", 1, "btn-primary", "danger", 3, "click"]], template: function TenantsManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Tenant Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage all platform tenants and subscriptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function TenantsManageComponent_Template_button_click_7_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275text(8, "+ Add Tenant");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "span", 5);
        \u0275\u0275text(12, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function TenantsManageComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TenantsManageComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPlan, $event) || (ctx.selectedPlan = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "All Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "Enterprise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Professional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 12);
        \u0275\u0275text(23, "Starter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TenantsManageComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(25, "option", 9);
        \u0275\u0275text(26, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 14);
        \u0275\u0275text(30, "Trial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 15);
        \u0275\u0275text(32, "Suspended");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 16)(34, "table", 17)(35, "thead")(36, "tr")(37, "th");
        \u0275\u0275text(38, "Tenant Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Subdomain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "MRR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275template(56, TenantsManageComponent_tr_56_Template, 30, 15, "tr", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 19)(58, "div", 20);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 21)(61, "select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function TenantsManageComponent_Template_select_ngModelChange_61_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function TenantsManageComponent_Template_select_change_61_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(62, "option", 23);
        \u0275\u0275text(63, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "option", 23);
        \u0275\u0275text(65, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "option", 23);
        \u0275\u0275text(67, "100 per page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "button", 24);
        \u0275\u0275listener("click", function TenantsManageComponent_Template_button_click_68_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(69, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 25);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 24);
        \u0275\u0275listener("click", function TenantsManageComponent_Template_button_click_72_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(73, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(74, TenantsManageComponent_div_74_Template, 51, 4, "div", 26)(75, TenantsManageComponent_div_75_Template, 11, 2, "div", 26)(76, TenantsManageComponent_div_76_Template, 30, 4, "div", 26)(77, TenantsManageComponent_div_77_Template, 13, 1, "div", 26);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPlan);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(32);
        \u0275\u0275property("ngForOf", ctx.tenants);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.currentPage * ctx.itemsPerPage + 1, " to ", ctx.Math.min((ctx.currentPage + 1) * ctx.itemsPerPage, ctx.totalElements), " of ", ctx.totalElements, " tenants ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage + 1, " of ", ctx.totalPages, "");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage >= ctx.totalPages - 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showAddModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel], styles: ["\n\n.tenants-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n  position: relative;\n}\n.search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #334155;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.trial[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge.suspended[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #0066ff;\n  color: #0066ff;\n}\n.btn-action.secondary[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.btn-action.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-action.danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff 0%,\n      #00d4ff 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  color: #475569;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-content.large[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #64748b;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #334155;\n  margin: 0 0 1rem 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 8px 0 0 8px;\n}\n.input-group[_ngcontent-%COMP%]   .input-suffix[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.plan-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .plan-card[_ngcontent-%COMP%] {\n  border-color: #0066ff;\n  background: #eff6ff;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.plan-options[_ngcontent-%COMP%]   .plan-option[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.5rem;\n}\n.details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #1e293b;\n}\n/*# sourceMappingURL=tenants-manage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantsManageComponent, { className: "TenantsManageComponent" });
})();
export {
  TenantsManageComponent
};
//# sourceMappingURL=chunk-G4CBVFTT.js.map
