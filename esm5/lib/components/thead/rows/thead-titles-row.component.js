import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/checkbox-select-all.component";
import * as i3 from "../cells/actions-title.component";
import * as i4 from "../cells/column-title.component";
var _c0 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 3);
    i0.ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source)("isAllSelected", ctx_r0.isAllSelected);
} }
function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 5);
    i0.ɵɵelementStart(1, "ng2-st-column-title", 6);
    i0.ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.sort.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r6 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
    i0.ɵɵstyleProp("width", column_r6.width);
    i0.ɵɵproperty("ngClass", column_r6.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r2.source)("column", column_r6);
} }
function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r3.grid);
} }
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
    TheadTitlesRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", isAllSelected: "isAllSelected", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);
            i0.ɵɵtemplate(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
            i0.ɵɵtemplate(2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
            i0.ɵɵtemplate(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.grid.getColumns());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [i1.NgIf, i1.NgForOf, i2.CheckboxSelectAllComponent, i3.ActionsTitleComponent, i1.NgClass, i4.ColumnTitleComponent], encapsulation: 2 });
    return TheadTitlesRowComponent;
}());
export { TheadTitlesRowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadTitlesRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQVM1RSw2QkFLSztJQUQwQixtS0FBUyxpQ0FBMEIsSUFBQztJQUNuRSxpQkFBSzs7O0lBSjBCLGtDQUFhLHlCQUFBLHVDQUFBOzs7SUFLNUMsd0JBQXlFOzs7SUFBbkIsa0NBQWE7Ozs7SUFDbkUsNkJBRUU7SUFBQSw4Q0FBMEc7SUFBakQsa0xBQVEsd0JBQWlCLElBQUM7SUFBQyxpQkFBc0I7SUFDNUcsaUJBQUs7Ozs7SUFId0MsNERBQW9DO0lBQy9FLHdDQUE0QjtJQURvRCx5Q0FBd0I7SUFFbkYsZUFBaUI7SUFBakIsc0NBQWlCLHFCQUFBOzs7SUFFeEMsd0JBQTBFOzs7SUFBbkIsa0NBQWE7O0FBZHhFO0lBQUE7UUF1QlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBYW5EO0lBTkMsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztrR0FsQlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUFkaEMsc0VBS0E7WUFDQSxzRUFBb0U7WUFDcEUsc0VBRUU7WUFFRixzRUFBcUU7O1lBWHRDLCtDQUE0QjtZQU1sQyxlQUE0QjtZQUE1QiwrQ0FBNEI7WUFDakQsZUFBd0M7WUFBeEMsK0NBQXdDO1lBSW5CLGVBQTZCO1lBQTdCLGdEQUE2Qjs7a0NBcEIxRDtDQTJDQyxBQXJDRCxJQXFDQztTQXBCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQWpCbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSwweEJBYVQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC10aXRsZXMtcm93XScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0aCBuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICA8L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBbZ3JpZF09XCJncmlkXCI+PC90aD5cclxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCIgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCIgW25nQ2xhc3NdPVwiY29sdW1uLmNsYXNzXCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aFwiID5cclxuICAgICAgPG5nMi1zdC1jb2x1bW4tdGl0bGUgW3NvdXJjZV09XCJzb3VyY2VcIiBbY29sdW1uXT1cImNvbHVtblwiIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCI+PC9uZzItc3QtY29sdW1uLXRpdGxlPlxyXG4gICAgPC90aD5cclxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcblxyXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdEFsbFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=