import { Component, Input, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./cells/custom.component";
import * as i4 from "./cells/edit-delete.component";
import * as i5 from "./cells/create-cancel.component";
import * as i6 from "../cell/cell.component";
var _c0 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r11); var row_r2 = i0.ɵɵnextContext().$implicit; var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.multipleSelectRow.emit(row_r2); });
    i0.ɵɵelement(1, "input", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r2.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r14); var row_r2 = i0.ɵɵnextContext().$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r14); var row_r2 = i0.ɵɵnextContext().$implicit; var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r4 = i0.ɵɵnextContext();
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
    var row_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng2-smart-table-cell", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r22 = ctx.$implicit;
    var row_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r22)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r26); var row_r2 = i0.ɵɵnextContext().$implicit; var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r26); var row_r2 = i0.ɵɵnextContext().$implicit; var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r26); var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = i0.ɵɵnextContext().$implicit;
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
} }
var _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    var _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r34); var row_r2 = ctx.$implicit; var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.userSelectRow.emit(row_r2); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { i0.ɵɵrestoreView(_r34); var row_r2 = ctx.$implicit; var ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.rowHover.emit(row_r2); });
    i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r1.tableColumnsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noDataMessage, " ");
} }
var Ng2SmartTableTbodyComponent = /** @class */ (function () {
    function Ng2SmartTableTbodyComponent() {
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
    Object.defineProperty(Ng2SmartTableTbodyComponent.prototype, "tableColumnsCount", {
        get: function () {
            var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
            return this.grid.getColumns().length + actionColumns;
        },
        enumerable: true,
        configurable: true
    });
    Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    };
    Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
    Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
        } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TbodyCustomComponent, i4.TbodyEditDeleteComponent, i5.TbodyCreateCancelComponent, i6.CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
    return Ng2SmartTableTbodyComponent;
}());
export { Ng2SmartTableTbodyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNDckUsNkJBQ0U7SUFEMEYsa05BQVMscUNBQTJCLElBQUM7SUFDL0gsMkJBQ0Y7SUFBQSxpQkFBSzs7O0lBRHlDLGVBQTBCO0lBQTFCLDJDQUEwQjs7OztJQUV4RSw2QkFDRTtJQUFBLDhDQUFzSDtJQUFuRixrTUFBVSwyQkFBbUIsSUFBQztJQUErQixpQkFBc0I7SUFFdEgsb0RBUTJCO0lBTEQsdU9BQVEseUJBQWMsSUFBQyw4TkFDYiwyQkFBZ0IsSUFESCx3TUFFTixrQ0FBMEIsSUFGcEI7SUFLakQsaUJBQTJCO0lBQzdCLGlCQUFLOzs7O0lBWGtCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLHlCQUFBO0lBRVIsZUFBYTtJQUFiLGtDQUFhLHVDQUFBLG1DQUFBLGVBQUEseUJBQUE7OztJQVV4Qyw2QkFDQztJQUFBLGlEQUErRztJQUNqSCxpQkFBSzs7OztJQUR5QixlQUFhO0lBQWIsa0NBQWEsZUFBQSxtQ0FBQTs7O0lBRTNDLDBCQUNFO0lBQUEsMkNBUXVCO0lBQ3pCLGlCQUFLOzs7OztJQVRtQixlQUFhO0lBQWIsK0JBQWEscUJBQUEsZUFBQSxnQkFBQSxxQkFBQSxtQ0FBQSxxQ0FBQSxtQ0FBQTs7O0lBV3JDLDZCQUNFO0lBQUEsaURBQStHO0lBQ2pILGlCQUFLOzs7O0lBRHlCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLG1DQUFBOzs7O0lBRzNDLDZCQUNFO0lBQUEsOENBQXNIO0lBQW5GLGtNQUFVLDJC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QkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQzswR0E1Q1UsMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNaeEMsMkVBQ0U7WUFrREYsMEVBQ0U7O1lBcERFLDRDQUFrQztZQW1EbEMsZUFBa0M7WUFBbEMscURBQWtDOztzQ0RuRHRDO0NBeURDLEFBbERELElBa0RDO1NBN0NZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsV0FBVyxFQUFFLHdCQUF3QjthQUN0Qzs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvcm93JztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7Q29sdW1ufSBmcm9tIFwiLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRib2R5XScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgc2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB1c2VyU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgbXVsdGlwbGVTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG4gIG1vZGU6IHN0cmluZztcclxuICBlZGl0SW5wdXRDbGFzczogc3RyaW5nO1xyXG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xyXG4gIGlzQWN0aW9uRWRpdDogYm9vbGVhbjtcclxuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcclxuICBub0RhdGFNZXNzYWdlOiBib29sZWFuO1xyXG5cclxuICBnZXQgdGFibGVDb2x1bW5zQ291bnQoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25Db2x1bW5zID0gdGhpcy5pc0FjdGlvbkFkZCB8fCB0aGlzLmlzQWN0aW9uRWRpdCB8fCB0aGlzLmlzQWN0aW9uRGVsZXRlID8gMSA6IDA7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkLmdldENvbHVtbnMoKS5sZW5ndGggKyBhY3Rpb25Db2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMubW9kZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJyk7XHJcbiAgICB0aGlzLmVkaXRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuaW5wdXRDbGFzcycpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25BZGQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5hZGQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25FZGl0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZWRpdCcpO1xyXG4gICAgdGhpcy5pc0FjdGlvbkRlbGV0ZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpO1xyXG4gICAgdGhpcy5ub0RhdGFNZXNzYWdlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ25vRGF0YU1lc3NhZ2UnKTtcclxuICB9XHJcbn1cclxuIiwiPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgZ3JpZC5nZXRSb3dzKClcIiAoY2xpY2spPVwidXNlclNlbGVjdFJvdy5lbWl0KHJvdylcIiAobW91c2VvdmVyKT1cInJvd0hvdmVyLmVtaXQocm93KVwiIGNsYXNzPVwibmcyLXNtYXJ0LXJvd1wiIFtjbGFzc05hbWVdPVwicm93Q2xhc3NGdW5jdGlvbihyb3cpXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiByb3cuaXNTZWxlY3RlZH1cIj5cclxuICA8dGQgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnMgbmcyLXNtYXJ0LWFjdGlvbi1tdWx0aXBsZS1zZWxlY3RcIiAoY2xpY2spPVwibXVsdGlwbGVTZWxlY3RSb3cuZW1pdChyb3cpXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdNb2RlbF09XCJyb3cuaXNTZWxlY3RlZFwiPlxyXG4gIDwvdGQ+XHJcbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uTGVmdFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cclxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxyXG5cclxuICAgIDxuZzItc3QtdGJvZHktZWRpdC1kZWxldGUgW2dyaWRdPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQocm93KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQocm93KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0Um93U2VsZWN0KT1cImVkaXRSb3dTZWxlY3QuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiPlxyXG4gICAgPC9uZzItc3QtdGJvZHktZWRpdC1kZWxldGU+XHJcbiAgPC90ZD5cclxuICAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cclxuICAgIDxuZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbCBbZ3JpZF09XCJncmlkXCIgW3Jvd109XCJyb3dcIiBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIj48L25nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsPlxyXG4gIDwvdGQ+XHJcbiAgPHRkICpuZ0Zvcj1cImxldCBjZWxsIG9mIHJvdy5jZWxsc1wiPlxyXG4gICAgPG5nMi1zbWFydC10YWJsZS1jZWxsIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNOZXddPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZWRpdElucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0luRWRpdGluZ109XCJyb3cuaXNJbkVkaXRpbmdcIj5cclxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XHJcbiAgPC90ZD5cclxuXHJcbiAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5SaWdodFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XHJcbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCI+PC9uZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbD5cclxuICA8L3RkPlxyXG5cclxuICA8dGQgKm5nSWY9XCIhcm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5SaWdodFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cclxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxyXG5cclxuICAgIDxuZzItc3QtdGJvZHktZWRpdC1kZWxldGUgW2dyaWRdPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXQpPVwiZWRpdC5lbWl0KHJvdylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KHJvdylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC9uZzItc3QtdGJvZHktZWRpdC1kZWxldGU+XHJcbiAgPC90ZD5cclxuPC90cj5cclxuXHJcbjx0ciAqbmdJZj1cImdyaWQuZ2V0Um93cygpLmxlbmd0aCA9PSAwXCI+XHJcbiAgPHRkIFthdHRyLmNvbHNwYW5dPVwidGFibGVDb2x1bW5zQ291bnRcIj5cclxuICAgIHt7IG5vRGF0YU1lc3NhZ2UgfX1cclxuICA8L3RkPlxyXG48L3RyPlxyXG4iXX0=