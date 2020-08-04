import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/add-button.component";
import * as i3 from "../../filter/filter.component";
const _c0 = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 4);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "ng2-smart-table-filter", 5);
    i0.ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.filter.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r2.source)("column", column_r6)("inputClass", ctx_r2.filterInputClass);
} }
function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r3.grid)("source", ctx_r3.source);
} }
export class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
}
TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
TheadFitlersRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
        i0.ɵɵtemplate(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
        i0.ɵɵtemplate(2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
        i0.ɵɵtemplate(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.grid.getColumns());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.AddButtonComponent, i3.FilterComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFitlersRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-filters-row]',
                template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVM1RSxxQkFBc0M7Ozs7SUFDdEMsNkJBR0s7SUFEaUIsd0tBQVUsMEJBQW1CLElBQUM7SUFDcEQsaUJBQUs7OztJQUZpQixrQ0FBYTs7OztJQUduQywwQkFDRTtJQUFBLGlEQUl5QjtJQURELDRMQUFVLDBCQUFtQixJQUFDO0lBQ3RELGlCQUF5QjtJQUMzQixpQkFBSzs7OztJQU53Qyw0REFBb0M7SUFDdkQsZUFBaUI7SUFBakIsc0NBQWlCLHFCQUFBLHVDQUFBOzs7O0lBTTNDLDZCQUlLO0lBRGlCLHlLQUFVLDBCQUFtQixJQUFDO0lBQ3BELGlCQUFLOzs7SUFIaUIsa0NBQWEseUJBQUE7O0FBTXZDLE1BQU0sT0FBTyx3QkFBd0I7SUF0QnJDO1FBMkJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBYTVDO0lBTkMsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0dBbEJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FBbkJqQyx1RUFBaUM7UUFDakMsdUVBR0E7UUFDQSx1RUFDRTtRQU1GLHVFQUlBOztRQWhCSSwrQ0FBNEI7UUFDVixlQUE0QjtRQUE1QiwrQ0FBNEI7UUFJOUMsZUFBd0M7UUFBeEMsK0NBQXdDO1FBT3RCLGVBQTZCO1FBQTdCLGdEQUE2Qjs7a0RBTzFDLHdCQUF3QjtjQXRCcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZpbHRlcnMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRoICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIj48L3RoPlxuICAgIDx0aCBuZzItc3QtYWRkLWJ1dHRvbiAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvdGg+XG4gICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZ3JpZC5nZXRDb2x1bW5zKClcIiBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGUtZmlsdGVyIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImZpbHRlcklucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJmaWx0ZXIuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L25nMi1zbWFydC10YWJsZS1maWx0ZXI+XG4gICAgPC90aD5cbiAgICA8dGggbmcyLXN0LWFkZC1idXR0b24gKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIj5cbiAgICA8L3RoPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcblxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgZmlsdGVySW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICAgIHRoaXMuZmlsdGVySW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdmaWx0ZXIuaW5wdXRDbGFzcycpO1xuICB9XG59XG4iXX0=