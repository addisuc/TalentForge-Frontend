import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-Z6TDORLQ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYAIDIFL.js";
import "./chunk-CPNXOV62.js";

// src/app/features/candidate-portal/candidate-messages.component.ts
function CandidateMessagesComponent_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conv_r2.unread);
  }
}
function CandidateMessagesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function CandidateMessagesComponent_div_10_Template_div_click_0_listener() {
      const conv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConversation(conv_r2));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CandidateMessagesComponent_div_10_span_11_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.id) === conv_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conv_r2.initials);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(conv_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conv_r2.lastMessageTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conv_r2.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conv_r2.unread);
  }
}
function CandidateMessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedConversation.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedConversation.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedConversation.company);
  }
}
function CandidateMessagesComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275classProp("sent", msg_r4.sent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r4.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r4.time);
  }
}
function CandidateMessagesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, CandidateMessagesComponent_div_13_div_1_Template, 5, 4, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedConversation.messages);
  }
}
function CandidateMessagesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CandidateMessagesComponent_div_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function CandidateMessagesComponent_div_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275text(3, "Send");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
  }
}
function CandidateMessagesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p");
    \u0275\u0275text(2, "Select a conversation to start messaging");
    \u0275\u0275elementEnd()();
  }
}
var CandidateMessagesComponent = class _CandidateMessagesComponent {
  constructor() {
    this.newMessage = "";
    this.selectedConversation = null;
    this.conversations = [
      {
        id: 1,
        name: "Sarah Johnson",
        company: "TechCorp Recruiting",
        initials: "SJ",
        lastMessage: "Great! Let's schedule an interview for next week.",
        lastMessageTime: "10:30 AM",
        unread: 2,
        messages: [
          { content: "Hi John, I reviewed your application for the Senior Developer position.", time: "Yesterday 2:15 PM", sent: false },
          { content: "Thank you! I'm very interested in this opportunity.", time: "Yesterday 2:20 PM", sent: true },
          { content: "Great! Let's schedule an interview for next week.", time: "10:30 AM", sent: false }
        ]
      },
      {
        id: 2,
        name: "Michael Chen",
        company: "StartupXYZ",
        initials: "MC",
        lastMessage: "Thanks for applying. We'll review your profile.",
        lastMessageTime: "Yesterday",
        unread: 0,
        messages: [
          { content: "Thanks for applying. We'll review your profile.", time: "Yesterday 4:30 PM", sent: false },
          { content: "Looking forward to hearing from you!", time: "Yesterday 4:35 PM", sent: true }
        ]
      }
    ];
  }
  selectConversation(conv) {
    this.selectedConversation = conv;
    conv.unread = 0;
  }
  sendMessage() {
    if (this.newMessage.trim() && this.selectedConversation) {
      this.selectedConversation.messages.push({
        content: this.newMessage,
        time: "Just now",
        sent: true
      });
      this.newMessage = "";
    }
  }
  static {
    this.\u0275fac = function CandidateMessagesComponent_Factory(t) {
      return new (t || _CandidateMessagesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateMessagesComponent, selectors: [["app-candidate-messages"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "candidate-messages-page"], [1, "page-header"], [1, "messages-container"], [1, "conversations-list"], [1, "search-box"], ["type", "text", "placeholder", "Search messages...", 1, "search-input"], ["class", "conversation-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "message-thread"], ["class", "thread-header", 4, "ngIf"], ["class", "messages-list", 4, "ngIf"], ["class", "message-input-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "conversation-item", 3, "click"], [1, "conv-avatar"], [1, "conv-details"], [1, "conv-header"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "thread-header"], [1, "thread-avatar"], [1, "messages-list"], ["class", "message-bubble", 3, "sent", 4, "ngFor", "ngForOf"], [1, "message-bubble"], [1, "message-content"], [1, "message-time"], [1, "message-input-container"], ["type", "text", "placeholder", "Type a message...", 1, "message-input", 3, "ngModelChange", "ngModel"], [1, "btn-send", 3, "click"], [1, "empty-state"]], template: function CandidateMessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Messages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Communicate with recruiters and hiring managers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4);
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CandidateMessagesComponent_div_10_Template, 12, 7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275template(12, CandidateMessagesComponent_div_12_Template, 8, 3, "div", 8)(13, CandidateMessagesComponent_div_13_Template, 2, 1, "div", 9)(14, CandidateMessagesComponent_div_14_Template, 4, 1, "div", 10)(15, CandidateMessagesComponent_div_15_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.conversations);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedConversation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedConversation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedConversation);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedConversation);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.candidate-messages-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: calc(100vh - 140px);\n  display: flex;\n  flex-direction: column;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.messages-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 1.5rem;\n  flex: 1;\n  overflow: hidden;\n}\n.conversations-list[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow-y: auto;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.conversation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.conversation-item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.conv-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e0e7ff;\n  color: #3730a3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.conv-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.conv-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n}\n.conv-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.conv-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.conv-preview[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.message-thread[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.thread-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.thread-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #e0e7ff;\n  color: #3730a3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.thread-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.thread-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n.message-bubble.sent[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.message-content[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.message-bubble.sent[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n  padding: 0 4px;\n}\n.message-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.btn-send[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: white;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=candidate-messages.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateMessagesComponent, { className: "CandidateMessagesComponent" });
})();
export {
  CandidateMessagesComponent
};
//# sourceMappingURL=chunk-2EEOL2HV.js.map
