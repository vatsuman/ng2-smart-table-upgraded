import { Component, Input, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./cells/custom.component";
import * as i4 from "./cells/edit-delete.component";
import * as i5 from "./cells/create-cancel.component";
import * as i6 from "../cell/cell.component";
const _c0 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r11); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.multipleSelectRow.emit(row_r2); });
    i0.ɵɵelement(1, "input", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r2.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r14); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r14); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r4.grid)("row", row_r2)("source", ctx_r4.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r4.grid)("deleteConfirm", ctx_r4.deleteConfirm)("editConfirm", ctx_r4.editConfirm)("row", row_r2)("source", ctx_r4.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng2-smart-table-cell", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r22 = ctx.$implicit;
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r22)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r26); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r26); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
} }
const _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r34); const row_r2 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.userSelectRow.emit(row_r2); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { i0.ɵɵrestoreView(_r34); const row_r2 = ctx.$implicit; const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.rowHover.emit(row_r2); });
    i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("className", ctx_r0.rowClassFunction(row_r2))("ngClass", i0.ɵɵpureFunction1(8, _c1, row_r2.isSelected));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isMultiSelectVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2.cells);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r1.tableColumnsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noDataMessage, " ");
} }
export class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
}
Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
        i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TbodyCustomComponent, i4.TbodyEditDeleteComponent, i5.TbodyCreateCancelComponent, i6.CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-tbody]',
                styleUrls: ['./tbody.component.scss'],
                templateUrl: './tbody.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], rowClassFunction: [{
            type: Input
        }], save: [{
            type: Output
        }], cancel: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], custom: [{
            type: Output
        }], edited: [{
            type: Output
        }], userSelectRow: [{
            type: Output
        }], editRowSelect: [{
            type: Output
        }], multipleSelectRow: [{
            type: Output
        }], rowHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNDckUsNkJBQ0U7SUFEMEYsc05BQVMscUNBQTJCLElBQUM7SUFDL0gsMkJBQ0Y7SUFBQSxpQkFBSzs7O0lBRHlDLGVBQTBCO0lBQTFCLDJDQUEwQjs7OztJQUV4RSw2QkFDRTtJQUFBLDhDQUFzSDtJQUFuRixvTUFBVSwyQkFBbUIsSUFBQztJQUErQixpQkFBc0I7SUFFdEgsb0RBUTJCO0lBTEQsMk9BQVEseUJBQWMsSUFBQyxrT0FDYiwyQkFBZ0IsSUFESCwwTUFFTixrQ0FBMEIsSUFGcEI7SUFLakQsaUJBQTJCO0lBQzdCLGlCQUFLOzs7O0lBWGtCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLHlCQUFBO0lBRVIsZUFBYTtJQUFiLGtDQUFhLHVDQUFBLG1DQUFBLGVBQUEseUJBQUE7OztJQVV4Qyw2QkFDQztJQUFBLGlEQUErRztJQUNqSCxpQkFBSzs7OztJQUR5QixlQUFhO0lBQWIsa0NBQWEsZUFBQSxtQ0FBQTs7O0lBRTNDLDBCQUNFO0lBQUEsMkNBUXVCO0lBQ3pCLGlCQUFLOzs7OztJQVRtQixlQUFhO0lBQWIsK0JBQWEscUJBQUEsZUFBQSxnQkFBQSxxQkFBQSxtQ0FBQSxxQ0FBQSxtQ0FBQTs7O0lBV3JDLDZCQUNFO0lBQUEsaURBQStHO0lBQ2pILGlCQUFLOzs7O0lBRHlCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLG1DQUFBOzs7O0lBRzNDLDZCQUNFO0lBQUEsOENBQXNIO0lBQW5GLG9NQUFVLDJC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QUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RCxDQUFDOztzR0E1Q1UsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNaeEMsMkVBQ0U7UUFrREYsMEVBQ0U7O1FBcERFLDRDQUFrQztRQW1EbEMsZUFBa0M7UUFBbEMscURBQWtDOztrRER2Q3pCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSx3QkFBd0I7YUFDdEM7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQge0NvbHVtbn0gZnJvbSBcIi4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW25nMi1zdC10Ym9keV0nLFxyXG4gIHN0eWxlVXJsczogWycuL3Rib2R5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICBASW5wdXQoKSByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdXNlclNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG11bHRpcGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJvd0hvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcclxuICBtb2RlOiBzdHJpbmc7XHJcbiAgZWRpdElucHV0Q2xhc3M6IHN0cmluZztcclxuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcclxuICBpc0FjdGlvbkVkaXQ6IGJvb2xlYW47XHJcbiAgaXNBY3Rpb25EZWxldGU6IGJvb2xlYW47XHJcbiAgbm9EYXRhTWVzc2FnZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IHRhYmxlQ29sdW1uc0NvdW50KCkge1xyXG4gICAgY29uc3QgYWN0aW9uQ29sdW1ucyA9IHRoaXMuaXNBY3Rpb25BZGQgfHwgdGhpcy5pc0FjdGlvbkVkaXQgfHwgdGhpcy5pc0FjdGlvbkRlbGV0ZSA/IDEgOiAwO1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCkubGVuZ3RoICsgYWN0aW9uQ29sdW1ucztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpO1xyXG4gICAgdGhpcy5lZGl0SW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmlucHV0Q2xhc3MnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgICB0aGlzLmlzQWN0aW9uQWRkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJyk7XHJcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnKTtcclxuICAgIHRoaXMubm9EYXRhTWVzc2FnZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdub0RhdGFNZXNzYWdlJyk7XHJcbiAgfVxyXG59XHJcbiIsIjx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGdyaWQuZ2V0Um93cygpXCIgKGNsaWNrKT1cInVzZXJTZWxlY3RSb3cuZW1pdChyb3cpXCIgKG1vdXNlb3Zlcik9XCJyb3dIb3Zlci5lbWl0KHJvdylcIiBjbGFzcz1cIm5nMi1zbWFydC1yb3dcIiBbY2xhc3NOYW1lXT1cInJvd0NsYXNzRnVuY3Rpb24ocm93KVwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogcm93LmlzU2VsZWN0ZWR9XCI+XHJcbiAgPHRkICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zIG5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0XCIgKGNsaWNrKT1cIm11bHRpcGxlU2VsZWN0Um93LmVtaXQocm93KVwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nTW9kZWxdPVwicm93LmlzU2VsZWN0ZWRcIj5cclxuICA8L3RkPlxyXG4gIDx0ZCAqbmdJZj1cIiFyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XHJcbiAgICA8bmcyLXN0LXRib2R5LWN1c3RvbSBbZ3JpZF09XCJncmlkXCIgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCIgW3Jvd109XCJyb3dcIiBbc291cmNlXT1cInNvdXJjZVwiPjwvbmcyLXN0LXRib2R5LWN1c3RvbT5cclxuXHJcbiAgICA8bmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXQpPVwiZWRpdC5lbWl0KHJvdylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KHJvdylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIj5cclxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxyXG4gIDwvdGQ+XHJcbiAgIDx0ZCAqbmdJZj1cInJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uTGVmdFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XHJcbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCI+PC9uZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbD5cclxuICA8L3RkPlxyXG4gIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuY2VsbHNcIj5cclxuICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzTmV3XT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImVkaXRJbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbkVkaXRpbmddPVwicm93LmlzSW5FZGl0aW5nXCI+XHJcbiAgICA8L25nMi1zbWFydC10YWJsZS1jZWxsPlxyXG4gIDwvdGQ+XHJcblxyXG4gIDx0ZCAqbmdJZj1cInJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XHJcbiAgPC90ZD5cclxuXHJcbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XHJcbiAgICA8bmcyLXN0LXRib2R5LWN1c3RvbSBbZ3JpZF09XCJncmlkXCIgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCIgW3Jvd109XCJyb3dcIiBbc291cmNlXT1cInNvdXJjZVwiPjwvbmcyLXN0LXRib2R5LWN1c3RvbT5cclxuXHJcbiAgICA8bmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdC5lbWl0KCRldmVudClcIj5cclxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxyXG4gIDwvdGQ+XHJcbjwvdHI+XHJcblxyXG48dHIgKm5nSWY9XCJncmlkLmdldFJvd3MoKS5sZW5ndGggPT0gMFwiPlxyXG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cInRhYmxlQ29sdW1uc0NvdW50XCI+XHJcbiAgICB7eyBub0RhdGFNZXNzYWdlIH19XHJcbiAgPC90ZD5cclxuPC90cj5cclxuIl19