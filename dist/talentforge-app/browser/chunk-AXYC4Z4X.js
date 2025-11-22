import {
  EmailService
} from "./chunk-3OPJ2QOJ.js";
import {
  ClientService
} from "./chunk-HDDOCNXX.js";
import "./chunk-3CPV5NE5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z6TDORLQ.js";
import {
  Router,
  RouterLink,
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-CPNXOV62.js";

// src/app/features/clients/clients-manage.component.ts
var _c0 = (a0) => ["/clients", a0];
function ClientsManageComponent_tr_55_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_button_36_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const client_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deactivateClient(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, "\u{1F6AB}");
    \u0275\u0275elementEnd();
  }
}
function ClientsManageComponent_tr_55_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_button_37_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const client_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.activateClient(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function ClientsManageComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_tr_click_0_listener() {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewClient(client_r2.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 33);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 34)(20, "button", 35);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(21, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 36);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_22_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.editClient(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(23, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 37);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_24_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.inviteUser(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(25, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 38);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_26_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.sendEmail(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(27, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 39);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_28_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.viewJobs(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(29, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 40);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_30_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.addNote(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(31, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 41);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_32_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.viewDocuments(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(33, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 42);
    \u0275\u0275listener("click", function ClientsManageComponent_tr_55_Template_button_click_34_listener($event) {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.viewContracts(client_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(35, "\u{1F4DC}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ClientsManageComponent_tr_55_button_36_Template, 2, 0, "button", 43)(37, ClientsManageComponent_tr_55_button_37_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.industry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r2.contactPerson || client_r2.contact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.activeJobs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.totalHires);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", client_r2.status === "Active")("inactive", client_r2.status === "Inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(client_r2.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, client_r2.id));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", client_r2.status === "Active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r2.status === "Inactive");
  }
}
function ClientsManageComponent_button_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ClientsManageComponent_button_70_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r7 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
function ClientsManageComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53)(12, "div", 54)(13, "span", 55);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 56);
    \u0275\u0275text(16, "Active Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 54)(18, "span", 55);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 56);
    \u0275\u0275text(21, "Total Hires");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 57)(23, "div", 58)(24, "span", 5);
    \u0275\u0275text(25, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "div", 59);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 60);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 61);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 62)(34, "span", 63);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 64);
    \u0275\u0275text(38, "View Details \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, client_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r8.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r8.industry);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", client_r8.status === "Active")("inactive", client_r8.status === "Inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r8.status, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(client_r8.activeJobs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(client_r8.totalHires);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(client_r8.contactPerson || client_r8.contact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DE} ", client_r8.phone, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Client since ", \u0275\u0275pipeBind2(36, 15, client_r8.since, "MMM yyyy"), "");
  }
}
function ClientsManageComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_75_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4, "Edit Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.name, $event) || (ctx_r2.newClient.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 70)(13, "label");
    \u0275\u0275text(14, "Industry *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.industry, $event) || (ctx_r2.newClient.industry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 9);
    \u0275\u0275text(17, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 10);
    \u0275\u0275text(19, "Finance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 11);
    \u0275\u0275text(21, "Healthcare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 12);
    \u0275\u0275text(23, "Retail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 13);
    \u0275\u0275text(25, "Education");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 70)(27, "label");
    \u0275\u0275text(28, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.contact, $event) || (ctx_r2.newClient.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 70)(31, "label");
    \u0275\u0275text(32, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.email, $event) || (ctx_r2.newClient.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 70)(35, "label");
    \u0275\u0275text(36, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.phone, $event) || (ctx_r2.newClient.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 70)(39, "label");
    \u0275\u0275text(40, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.address, $event) || (ctx_r2.newClient.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 70)(43, "label");
    \u0275\u0275text(44, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.website, $event) || (ctx_r2.newClient.website = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 70)(47, "label");
    \u0275\u0275text(48, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "textarea", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_75_Template_textarea_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.description, $event) || (ctx_r2.newClient.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 78)(51, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_75_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 2);
    \u0275\u0275listener("click", function ClientsManageComponent_div_75_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateClient());
    });
    \u0275\u0275text(54, "Update Client");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.industry);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.contact);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.website);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.description);
  }
}
function ClientsManageComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_76_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNoteModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_76_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNoteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_76_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.noteText, $event) || (ctx_r2.noteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 78)(13, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_76_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNoteModal());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 2);
    \u0275\u0275listener("click", function ClientsManageComponent_div_76_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNote());
    });
    \u0275\u0275text(16, "Save Note");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Add Note for ", ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.noteText);
  }
}
function ClientsManageComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_77_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEmailModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_77_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEmailModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_77_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emailData.to, $event) || (ctx_r2.emailData.to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 70)(13, "label");
    \u0275\u0275text(14, "Subject *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_77_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emailData.subject, $event) || (ctx_r2.emailData.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 70)(17, "label");
    \u0275\u0275text(18, "Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 83);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_77_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emailData.body, $event) || (ctx_r2.emailData.body = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 78)(21, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_77_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEmailModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 84);
    \u0275\u0275listener("click", function ClientsManageComponent_div_77_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendEmailMessage());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Send Email to ", ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emailData.to);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emailData.subject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emailData.body);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.sending);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.sending ? "Sending..." : "Send Email");
  }
}
function ClientsManageComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_78_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_78_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4, "Add New Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.name, $event) || (ctx_r2.newClient.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 70)(13, "label");
    \u0275\u0275text(14, "Industry *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.industry, $event) || (ctx_r2.newClient.industry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 87);
    \u0275\u0275text(17, "Select industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 9);
    \u0275\u0275text(19, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 10);
    \u0275\u0275text(21, "Finance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 11);
    \u0275\u0275text(23, "Healthcare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 12);
    \u0275\u0275text(25, "Retail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 13);
    \u0275\u0275text(27, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 88);
    \u0275\u0275text(29, "Manufacturing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 89);
    \u0275\u0275text(31, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 70)(33, "label");
    \u0275\u0275text(34, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.contact, $event) || (ctx_r2.newClient.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 70)(37, "label");
    \u0275\u0275text(38, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.email, $event) || (ctx_r2.newClient.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 70)(41, "label");
    \u0275\u0275text(42, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.phone, $event) || (ctx_r2.newClient.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 70)(45, "label");
    \u0275\u0275text(46, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.address, $event) || (ctx_r2.newClient.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 70)(49, "label");
    \u0275\u0275text(50, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.website, $event) || (ctx_r2.newClient.website = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 70)(53, "label");
    \u0275\u0275text(54, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_78_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClient.description, $event) || (ctx_r2.newClient.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 78)(57, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_78_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(58, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 2);
    \u0275\u0275listener("click", function ClientsManageComponent_div_78_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveClient());
    });
    \u0275\u0275text(60, "Add Client");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.industry);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.contact);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.website);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClient.description);
  }
}
function ClientsManageComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_79_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDocumentsModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_79_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_79_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDocumentsModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "p");
    \u0275\u0275text(9, "This feature will show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Contracts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Agreements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Other documents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 93);
    \u0275\u0275text(20, "Document management coming soon...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 78)(22, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_79_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDocumentsModal());
    });
    \u0275\u0275text(23, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Documents for ", ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name, "");
  }
}
function ClientsManageComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeactivateModal());
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275listener("click", function ClientsManageComponent_div_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4, "Deactivate Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeactivateModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "p");
    \u0275\u0275text(9, "Are you sure you want to deactivate ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 95);
    \u0275\u0275text(14, "This client will be marked as inactive and won't appear in active client lists.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 78)(16, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_80_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeactivateModal());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 96);
    \u0275\u0275listener("click", function ClientsManageComponent_div_80_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDeactivate());
    });
    \u0275\u0275text(19, "Deactivate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name);
  }
}
function ClientsManageComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_81_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeContractsModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_81_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_81_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeContractsModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "p");
    \u0275\u0275text(9, "This feature will show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Active contracts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Contract history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Terms & conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Renewal dates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 93);
    \u0275\u0275text(20, "Contract management coming soon...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 78)(22, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_81_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeContractsModal());
    });
    \u0275\u0275text(23, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Contracts for ", ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name, "");
  }
}
function ClientsManageComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ClientsManageComponent_div_82_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInviteModal());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ClientsManageComponent_div_82_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ClientsManageComponent_div_82_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInviteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "label");
    \u0275\u0275text(10, "Company Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_82_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteData.companyName, $event) || (ctx_r2.inviteData.companyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 70)(13, "label");
    \u0275\u0275text(14, "Contact Person *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_82_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteData.contactPerson, $event) || (ctx_r2.inviteData.contactPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 70)(17, "label");
    \u0275\u0275text(18, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_div_82_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteData.email, $event) || (ctx_r2.inviteData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 78)(21, "button", 79);
    \u0275\u0275listener("click", function ClientsManageComponent_div_82_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInviteModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 100);
    \u0275\u0275listener("click", function ClientsManageComponent_div_82_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInvitation());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Invite User for ", ctx_r2.selectedClient == null ? null : ctx_r2.selectedClient.name, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inviteData.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inviteData.contactPerson);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inviteData.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isInviting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.isInviting ? "Sending..." : "Send Invitation");
  }
}
var ClientsManageComponent = class _ClientsManageComponent {
  constructor(clientService, emailService, router) {
    this.clientService = clientService;
    this.emailService = emailService;
    this.router = router;
    this.clients = [];
    this.searchQuery = "";
    this.selectedIndustry = "all";
    this.selectedStatus = "all";
    this.currentPage = 1;
    this.itemsPerPage = 25;
    this.showAddModal = false;
    this.showEditModal = false;
    this.showNoteModal = false;
    this.showEmailModal = false;
    this.showDocumentsModal = false;
    this.showContractsModal = false;
    this.showDeactivateModal = false;
    this.selectedClient = null;
    this.noteText = "";
    this.sending = false;
    this.newClient = {
      name: "",
      industry: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      description: ""
    };
    this.emailData = {
      to: "",
      subject: "",
      body: ""
    };
    this.showToast = false;
    this.toastMessage = "";
    this.toastType = "success";
    this.showInviteModal = false;
    this.isInviting = false;
    this.inviteData = {
      companyName: "",
      contactPerson: "",
      email: ""
    };
  }
  ngOnInit() {
    this.loadClients();
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.["editClientId"]) {
      const clientId = navigation.extras.state["editClientId"];
      setTimeout(() => this.editClient(clientId), 500);
    }
  }
  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error("Error loading clients:", err);
        this.showNotification("Failed to load clients", "error");
      }
    });
  }
  get filteredClients() {
    return this.clients.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || client.contact?.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesIndustry = this.selectedIndustry === "all" || client.industry === this.selectedIndustry;
      const matchesStatus = this.selectedStatus === "all" || client.status === this.selectedStatus;
      return matchesSearch && matchesIndustry && matchesStatus;
    });
  }
  get totalClients() {
    return this.filteredClients.length;
  }
  get totalPages() {
    return Math.ceil(this.totalClients / this.itemsPerPage);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalClients);
  }
  get paginatedClients() {
    return this.filteredClients.slice(this.startIndex, this.endIndex);
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  goToPage(page) {
    this.currentPage = page;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
  }
  viewClient(id) {
    this.router.navigate(["/clients", id]);
  }
  editClient(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    if (this.selectedClient) {
      this.newClient = __spreadProps(__spreadValues({}, this.selectedClient), {
        contact: this.selectedClient.contactPerson || this.selectedClient.contact
      });
      this.showEditModal = true;
    }
  }
  closeEditModal() {
    this.showEditModal = false;
    this.selectedClient = null;
  }
  updateClient() {
    if (!this.newClient.name || !this.newClient.email) {
      this.showNotification("Please fill in required fields", "error");
      return;
    }
    const _a = this.newClient, { contact } = _a, clientData = __objRest(_a, ["contact"]);
    const payload = __spreadProps(__spreadValues({}, clientData), {
      contactPerson: contact
    });
    console.log("Updating client with data:", payload);
    this.clientService.updateClient(this.selectedClient.id, payload).subscribe({
      next: (updatedClient) => {
        console.log("Backend returned updated client:", updatedClient);
        const index = this.clients.findIndex((c) => c.id === this.selectedClient.id);
        if (index !== -1) {
          this.clients[index] = updatedClient;
        }
        this.closeEditModal();
        this.showNotification("Client updated successfully", "success");
      },
      error: (err) => {
        console.error("Error updating client:", err);
        this.showNotification("Failed to update client", "error");
      }
    });
  }
  sendEmail(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    if (this.selectedClient) {
      this.emailData = {
        to: this.selectedClient.email,
        subject: `Regarding ${this.selectedClient.name}`,
        body: ""
      };
      this.showEmailModal = true;
    }
  }
  closeEmailModal() {
    this.showEmailModal = false;
    this.selectedClient = null;
    this.emailData = { to: "", subject: "", body: "" };
  }
  sendEmailMessage() {
    if (!this.emailData.subject || !this.emailData.body) {
      this.showNotification("Please fill in subject and message", "error");
      return;
    }
    this.sending = true;
    this.emailService.sendEmail(this.emailData.to, this.emailData.subject, this.emailData.body).subscribe({
      next: () => {
        this.showNotification("Email sent successfully", "success");
        this.closeEmailModal();
        this.sending = false;
      },
      error: (err) => {
        console.error("Error sending email:", err);
        this.showNotification("Failed to send email", "error");
        this.sending = false;
      }
    });
  }
  viewJobs(id) {
    window.location.href = `/jobs?clientId=${id}`;
  }
  addNote(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    this.noteText = "";
    this.showNoteModal = true;
  }
  closeNoteModal() {
    this.showNoteModal = false;
    this.selectedClient = null;
    this.noteText = "";
  }
  saveNote() {
    if (!this.noteText.trim()) {
      this.showNotification("Please enter a note", "error");
      return;
    }
    this.clientService.addNote(this.selectedClient.id, this.noteText).subscribe({
      next: () => {
        this.showNotification("Note saved successfully", "success");
        this.closeNoteModal();
      },
      error: (err) => {
        console.error("Error saving note:", err);
        this.showNotification("Failed to save note", "error");
      }
    });
  }
  viewDocuments(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    this.showDocumentsModal = true;
  }
  closeDocumentsModal() {
    this.showDocumentsModal = false;
    this.selectedClient = null;
  }
  viewContracts(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    this.showContractsModal = true;
  }
  closeContractsModal() {
    this.showContractsModal = false;
    this.selectedClient = null;
  }
  deactivateClient(id) {
    this.selectedClient = this.clients.find((c) => c.id === id);
    this.showDeactivateModal = true;
  }
  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedClient = null;
  }
  confirmDeactivate() {
    if (this.selectedClient) {
      this.clientService.updateClient(this.selectedClient.id, __spreadProps(__spreadValues({}, this.selectedClient), { status: "Inactive" })).subscribe({
        next: () => {
          this.loadClients();
          this.showNotification("Client deactivated", "success");
          this.closeDeactivateModal();
        },
        error: (err) => {
          console.error("Error deactivating client:", err);
          this.showNotification("Failed to deactivate client", "error");
        }
      });
    }
  }
  activateClient(id) {
    const client = this.clients.find((c) => c.id === id);
    if (client) {
      this.clientService.updateClient(id, __spreadProps(__spreadValues({}, client), { status: "Active" })).subscribe({
        next: () => {
          this.loadClients();
          this.showNotification("Client activated", "success");
        },
        error: (err) => {
          console.error("Error activating client:", err);
          this.showNotification("Failed to activate client", "error");
        }
      });
    }
  }
  openAddModal() {
    this.showAddModal = true;
    this.newClient = {
      name: "",
      industry: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      description: ""
    };
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  saveClient() {
    if (!this.newClient.name || !this.newClient.email) {
      this.showNotification("Please fill in required fields (Name and Email)", "error");
      return;
    }
    const _a = this.newClient, { contact } = _a, clientData = __objRest(_a, ["contact"]);
    const payload = __spreadProps(__spreadValues({}, clientData), {
      contactPerson: contact
    });
    this.clientService.createClient(payload).subscribe({
      next: () => {
        this.loadClients();
        this.closeAddModal();
        this.showNotification("Client added successfully", "success");
      },
      error: (err) => {
        console.error("Error adding client:", err);
        this.showNotification("Failed to add client", "error");
      }
    });
  }
  showNotification(message, type) {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3e3);
  }
  getInitials(name) {
    if (!name)
      return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  inviteUser(clientId) {
    const client = this.clients.find((c) => c.id === clientId);
    if (client) {
      this.selectedClient = client;
      this.showInviteModal = true;
      this.inviteData = {
        companyName: client.name,
        contactPerson: "",
        email: ""
      };
    }
  }
  closeInviteModal() {
    this.showInviteModal = false;
  }
  sendInvitation() {
    if (!this.inviteData.companyName || !this.inviteData.contactPerson || !this.inviteData.email) {
      this.showNotification("Please fill in all required fields", "error");
      return;
    }
    this.isInviting = true;
    const invitationData = __spreadProps(__spreadValues({}, this.inviteData), {
      clientId: this.selectedClient?.id
    });
    this.clientService.inviteClient(invitationData).subscribe({
      next: (response) => {
        this.isInviting = false;
        this.closeInviteModal();
        this.showNotification("Client invitation sent successfully!", "success");
      },
      error: (error) => {
        this.isInviting = false;
        console.error("Error sending invitation:", error);
        this.showNotification("Failed to send invitation. Please try again.", "error");
      }
    });
  }
  static {
    this.\u0275fac = function ClientsManageComponent_Factory(t) {
      return new (t || _ClientsManageComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsManageComponent, selectors: [["app-clients-manage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 85, vars: 30, consts: [[1, "clients-page"], [1, "header"], [1, "btn-primary", 3, "click"], [1, "filters"], [1, "search-bar"], [1, "icon"], ["type", "text", "placeholder", "Search clients...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "Technology"], ["value", "Finance"], ["value", "Healthcare"], ["value", "Retail"], ["value", "Education"], ["value", "Active"], ["value", "Inactive"], [1, "table-container"], [1, "data-table"], [3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "click", "disabled"], [1, "page-numbers"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "clients-grid", 2, "display", "none"], ["class", "client-card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "toast"], [3, "click"], [1, "email-small"], [1, "badge"], [1, "action-buttons"], ["title", "View Details", 1, "btn-action", 3, "click", "routerLink"], ["title", "Edit Client", 1, "btn-action", 3, "click"], ["title", "Invite User", 1, "btn-action", 3, "click"], ["title", "Email Client", 1, "btn-action", 3, "click"], ["title", "View Jobs", 1, "btn-action", 3, "click"], ["title", "Add Note", 1, "btn-action", 3, "click"], ["title", "View Documents", 1, "btn-action", 3, "click"], ["title", "View Contracts", 1, "btn-action", 3, "click"], ["class", "btn-action danger", "title", "Deactivate", 3, "click", 4, "ngIf"], ["class", "btn-action success", "title", "Activate", 3, "click", 4, "ngIf"], ["title", "Deactivate", 1, "btn-action", "danger", 3, "click"], ["title", "Activate", 1, "btn-action", "success", 3, "click"], [1, "client-card", 3, "routerLink"], [1, "card-header"], [1, "logo"], [1, "info"], [1, "industry"], [1, "status"], [1, "stats"], [1, "stat"], [1, "value"], [1, "label"], [1, "contact"], [1, "contact-info"], [1, "name"], [1, "email"], [1, "phone"], [1, "footer"], [1, "since"], [1, "btn-link"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Company address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://company.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Company description", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], ["rows", "6", "placeholder", "Enter your note here...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Email subject", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "8", "placeholder", "Enter your message...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["type", "text", "placeholder", "Company name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Manufacturing"], ["value", "Other"], ["type", "text", "placeholder", "Contact name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "contact@company.com", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+1 (555) 123-4567", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "color", "#64748b", "margin-top", "1rem"], [1, "modal", 2, "max-width", "400px", 3, "click"], [2, "color", "#64748b", "font-size", "0.875rem", "margin-top", "1rem"], [1, "btn-primary", 2, "background", "#dc2626", 3, "click"], ["type", "text", "placeholder", "Enter company name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter contact person name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Enter email address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"]], template: function ClientsManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage your client companies and relationships");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function ClientsManageComponent_Template_button_click_7_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "\u2795");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Add Client ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "div", 4)(13, "span", 5);
        \u0275\u0275text(14, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedIndustry, $event) || (ctx.selectedIndustry = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 8);
        \u0275\u0275text(18, "All Industries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 9);
        \u0275\u0275text(20, "Technology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 10);
        \u0275\u0275text(22, "Finance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 11);
        \u0275\u0275text(24, "Healthcare");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Retail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Education");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_Template_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(30, "option", 8);
        \u0275\u0275text(31, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 14);
        \u0275\u0275text(33, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 15);
        \u0275\u0275text(35, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 16)(37, "table", 17)(38, "thead")(39, "tr")(40, "th");
        \u0275\u0275text(41, "Client Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Active Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Total Hires");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th");
        \u0275\u0275text(51, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "tbody");
        \u0275\u0275template(55, ClientsManageComponent_tr_55_Template, 38, 16, "tr", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 19)(57, "div", 20);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 21)(60, "select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsManageComponent_Template_select_ngModelChange_60_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ClientsManageComponent_Template_select_change_60_listener() {
          return ctx.onItemsPerPageChange();
        });
        \u0275\u0275elementStart(61, "option", 23);
        \u0275\u0275text(62, "25 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "option", 23);
        \u0275\u0275text(64, "50 per page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "option", 23);
        \u0275\u0275text(66, "100 per page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "button", 24);
        \u0275\u0275listener("click", function ClientsManageComponent_Template_button_click_67_listener() {
          return ctx.previousPage();
        });
        \u0275\u0275text(68, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 25);
        \u0275\u0275template(70, ClientsManageComponent_button_70_Template, 2, 3, "button", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 24);
        \u0275\u0275listener("click", function ClientsManageComponent_Template_button_click_71_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(72, "Next");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 27);
        \u0275\u0275template(74, ClientsManageComponent_div_74_Template, 39, 20, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(75, ClientsManageComponent_div_75_Template, 55, 8, "div", 29)(76, ClientsManageComponent_div_76_Template, 17, 2, "div", 29)(77, ClientsManageComponent_div_77_Template, 25, 6, "div", 29)(78, ClientsManageComponent_div_78_Template, 61, 8, "div", 29)(79, ClientsManageComponent_div_79_Template, 24, 1, "div", 29)(80, ClientsManageComponent_div_80_Template, 20, 1, "div", 29)(81, ClientsManageComponent_div_81_Template, 24, 1, "div", 29)(82, ClientsManageComponent_div_82_Template, 25, 6, "div", 29);
        \u0275\u0275elementStart(83, "div", 30);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedIndustry);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngForOf", ctx.paginatedClients);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.startIndex + 1, " to ", ctx.endIndex, " of ", ctx.totalClients, " clients ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
        \u0275\u0275advance();
        \u0275\u0275property("value", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.pageNumbers);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredClients);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNoteModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEmailModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocumentsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeactivateModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showContractsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showInviteModal);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.showToast)("success", ctx.toastType === "success")("error", ctx.toastType === "error");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.clients-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066ff,\n      #00d4ff);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.filters[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 0.75rem 0;\n  font-size: 0.95rem;\n  outline: none;\n}\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 0.95rem;\n  margin-right: 1rem;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow-x: auto;\n  margin-bottom: 24px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.name-cell[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.email-small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.btn-action.danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n  color: white;\n}\n.btn-action.success[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border-color: #0066ff;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.clients-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.client-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.client-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  border-color: #0066ff;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 12px;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .industry[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.client-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.client-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.client-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.client-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0066ff;\n}\n.client-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.client-card[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  padding-left: 2.25rem;\n}\n.client-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.client-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .since[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.client-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0066ff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.client-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #64748b;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066ff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  display: none;\n  align-items: center;\n  gap: 0.75rem;\n  z-index: 2000;\n  min-width: 300px;\n  border-left: 4px solid;\n}\n.toast.show[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n  color: #065f46;\n}\n.toast.error[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n  color: #991b1b;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=clients-manage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsManageComponent, { className: "ClientsManageComponent" });
})();
export {
  ClientsManageComponent
};
//# sourceMappingURL=chunk-AXYC4Z4X.js.map
