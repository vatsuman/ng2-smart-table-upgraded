import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-edit.component";
import * as i3 from "./default-edit.component";
function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-custom-editor", 3);
    i0.ɵɵlistener("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
} }
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-default-editor", 3);
    i0.ɵɵlistener("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
export class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
EditCellComponent.ɵfac = function EditCellComponent_Factory(t) { return new (t || EditCellComponent)(); };
EditCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
        i0.ɵɵtemplate(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "custom");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomEditComponent, i3.DefaultEditComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-edit-mode',
                template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `,
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBUS9ELG1EQUkyQjtJQURELHdPQUEyQjtJQUNyRCxpQkFBMkI7OztJQUhELGtDQUFhLGlDQUFBOzs7O0lBSXZDLG9EQUk0QjtJQURGLDBPQUEyQjtJQUNyRCxpQkFBNEI7OztJQUhGLGtDQUFhLGlDQUFBOztBQU8vQyxNQUFNLE9BQU8saUJBQWlCO0lBakI5QjtRQW9CVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBVTVDO0lBUkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7O2tGQWRVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FBZHhCLDhCQUNFO1FBQUEsNEdBSUE7UUFDQSw4R0FJQTtRQUNGLGlCQUFNOztRQVhELDhDQUE0QjtRQUNMLGVBQXdCO1FBQXhCLHVDQUF3Qjs7a0RBYTdDLGlCQUFpQjtjQWpCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztLQWFQO2FBQ0o7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLWVkaXQtbW9kZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJnZXRFZGl0b3JUeXBlKClcIj5cbiAgICAgICAgPHRhYmxlLWNlbGwtY3VzdG9tLWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgICA8L3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcj5cbiAgICAgICAgPHRhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3IgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgICA8L3RhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3I+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFZGl0b3JUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlO1xuICB9XG59XG4iXX0=