import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cell-editors/select-editor.component";
import * as i3 from "../cell-editors/textarea-editor.component";
import * as i4 from "../cell-editors/checkbox-editor.component";
import * as i5 from "../cell-editors/completer-editor.component";
import * as i6 from "../cell-editors/input-editor.component";
function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-editor", 6);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r2.cell)("inputClass", ctx_r2.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r3.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r4.cell)("inputClass", ctx_r4.inputClass);
} }
export class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
DefaultEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
        i0.ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
        i0.ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
        i0.ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
        i0.ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "textarea");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "completer");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.SelectEditorComponent, i3.TextareaEditorComponent, i4.CheckboxEditorComponent, i5.CompleterEditorComponent, i6.InputEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7O0lDRGxELHdDQU1nQjtJQUhELHNOQUEyQiw0TUFBQSwrTUFBQTtJQUcxQyxpQkFBZ0I7OztJQUxELGtDQUFhLGlDQUFBOzs7O0lBTzVCLDBDQU1rQjtJQUhELDJOQUEyQixtTkFBQSxzTkFBQTtJQUc1QyxpQkFBa0I7OztJQUxELGtDQUFhLGlDQUFBOzs7O0lBTzlCLDBDQUlrQjtJQURELDZOQUEyQjtJQUM1QyxpQkFBa0I7OztJQUhELGtDQUFhLGlDQUFBOzs7SUFLOUIsc0NBRW1COzs7SUFERCxrQ0FBYTs7OztJQUcvQix1Q0FNZTtJQUhELHVOQUEyQiw2TUFBQSxnTkFBQTtJQUd6QyxpQkFBZTs7O0lBTEQsa0NBQWEsaUNBQUE7O0FEbkIvQixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQUV2RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDOzt3RkFSVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1RqQyw4QkFDSTtRQUFBLHlGQU1BO1FBRUEsNkZBTUE7UUFFQSw2RkFJQTtRQUVBLCtGQUVBO1FBRUEsdUZBTUE7UUFDSixpQkFBTTs7UUFsQ0QsOENBQTRCO1FBQ2QsZUFBc0I7UUFBdEIscUNBQXNCO1FBUXBCLGVBQTBCO1FBQTFCLHlDQUEwQjtRQVExQixlQUEwQjtRQUExQix5Q0FBMEI7UUFNekIsZUFBMkI7UUFBM0IsMENBQTJCOztrRERkcEMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q2VsbERlZmF1bHQgfSBmcm9tICcuL2VkaXQtY2VsbC1kZWZhdWx0JztcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQtZWRpdC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdENvbXBvbmVudCBleHRlbmRzIEVkaXRDZWxsRGVmYXVsdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldEVkaXRvclR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IudHlwZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbbmdTd2l0Y2hdPVwiZ2V0RWRpdG9yVHlwZSgpXCI+XHJcbiAgICA8c2VsZWN0LWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ2xpc3QnXCJcclxuICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uRWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uU3RvcEVkaXRpbmcpPVwib25TdG9wRWRpdGluZygpXCI+XHJcbiAgICA8L3NlbGVjdC1lZGl0b3I+XHJcblxyXG4gICAgPHRleHRhcmVhLWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG9uRWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAob25TdG9wRWRpdGluZyk9XCJvblN0b3BFZGl0aW5nKClcIj5cclxuICAgIDwvdGV4dGFyZWEtZWRpdG9yPlxyXG5cclxuICAgIDxjaGVja2JveC1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgPC9jaGVja2JveC1lZGl0b3I+XHJcblxyXG4gICAgPGNvbXBsZXRlci1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjb21wbGV0ZXInXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIj5cclxuICAgIDwvY29tcGxldGVyLWVkaXRvcj5cclxuXHJcbiAgICA8aW5wdXQtZWRpdG9yICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAob25FZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIChvblN0b3BFZGl0aW5nKT1cIm9uU3RvcEVkaXRpbmcoKVwiPlxyXG4gICAgPC9pbnB1dC1lZGl0b3I+XHJcbjwvZGl2PiJdfQ==