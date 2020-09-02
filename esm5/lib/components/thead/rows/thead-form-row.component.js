import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/actions.component";
import * as i3 from "../../cell/cell.component";
var _c0 = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "ng2-smart-table-cell", 5);
    i0.ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r6 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r6)("grid", ctx_r2.grid)("isNew", true)("createConfirm", ctx_r2.createConfirm)("inputClass", ctx_r2.addInputClass)("isInEditing", ctx_r2.grid.getNewRow().isInEditing);
} }
function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r3.grid);
} }
var TheadFormRowComponent = /** @class */ (function () {
    function TheadFormRowComponent() {
        this.create = new EventEmitter();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    TheadFormRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    };
    TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) { return new (t || TheadFormRowComponent)(); };
    TheadFormRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
            i0.ɵɵtemplate(1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
            i0.ɵɵtemplate(2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
            i0.ɵɵtemplate(3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.grid.getNewRow().getCells());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [i1.NgIf, i1.NgForOf, i2.ActionsComponent, i3.CellComponent], encapsulation: 2 });
    return TheadFormRowComponent;
}());
export { TheadFormRowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFormRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-form-row]',
                template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVE1RSxxQkFBa0I7Ozs7SUFDbEIsNkJBQ0U7SUFBQSx5Q0FBMkU7SUFBN0MsME1BQTJCO0lBQUMsaUJBQWlCO0lBQzdFLGlCQUFLOzs7SUFEYSxlQUFhO0lBQWIsa0NBQWE7Ozs7SUFFL0IsMEJBQ0U7SUFBQSwrQ0FPdUI7SUFERCxnTkFBMkI7SUFDakQsaUJBQXVCO0lBQ3pCLGlCQUFLOzs7O0lBUm1CLGVBQWE7SUFBYiw4QkFBYSxxQkFBQSxlQUFBLHVDQUFBLG9DQUFBLG9EQUFBOzs7O0lBU3JDLDZCQUNFO0lBQUEseUNBQTJFO0lBQTdDLDJNQUEyQjtJQUFDLGlCQUFpQjtJQUM3RSxpQkFBSzs7O0lBRGEsZUFBYTtJQUFiLGtDQUFhOztBQWxCckM7SUFBQTtRQTRCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQW1CNUM7SUFaQyx3Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzhGQXhCVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQW5CNUIsb0VBQWE7WUFDYixvRUFDRTtZQUVGLG9FQUNFO1lBU0Ysb0VBQ0U7O1lBZEcsZUFBNEI7WUFBNUIsK0NBQTRCO1lBRzdCLGVBQWdEO1lBQWhELHlEQUFnRDtZQVUvQyxlQUE2QjtZQUE3QixnREFBNkI7O2dDQXRCeEM7Q0FvREMsQUEvQ0QsSUErQ0M7U0F6QlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0F0QmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsdTRCQWtCVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtZm9ybS1yb3ddJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8dGQgKm5nSWY9XCJcIj48L3RkPlxyXG4gICAgICA8dGQgICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgICAgIDxuZzItc3QtYWN0aW9ucyBbZ3JpZF09XCJncmlkXCIgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+PC9uZzItc3QtYWN0aW9ucz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBjZWxsIG9mIGdyaWQuZ2V0TmV3Um93KCkuZ2V0Q2VsbHMoKVwiPlxyXG4gICAgICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc05ld109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NyZWF0ZUNvbmZpcm1dPVwiY3JlYXRlQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImFkZElucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbkVkaXRpbmddPVwiZ3JpZC5nZXROZXdSb3coKS5pc0luRWRpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25DcmVhdGUoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCAgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgICAgIDxuZzItc3QtYWN0aW9ucyBbZ3JpZF09XCJncmlkXCIgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+PC9uZzItc3QtYWN0aW9ucz5cclxuICAgICAgPC90ZD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlYWRGb3JtUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSByb3c6IFJvdztcclxuICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcclxuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcclxuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XHJcbiAgYWRkSW5wdXRDbGFzczogc3RyaW5nO1xyXG5cclxuICBvbkNyZWF0ZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmdyaWQuY3JlYXRlKHRoaXMuZ3JpZC5nZXROZXdSb3coKSwgdGhpcy5jcmVhdGVDb25maXJtKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCl7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgICB0aGlzLmFkZElucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmlucHV0Q2xhc3MnKTtcclxuICB9XHJcbn1cclxuIl19