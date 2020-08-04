import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/checkbox-select-all.component";
import * as i3 from "../cells/actions-title.component";
import * as i4 from "../cells/column-title.component";
const _c0 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 3);
    i0.ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source)("isAllSelected", ctx_r0.isAllSelected);
} }
function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 5);
    i0.ɵɵelementStart(1, "ng2-st-column-title", 6);
    i0.ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.sort.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
    i0.ɵɵstyleProp("width", column_r6.width);
    i0.ɵɵproperty("ngClass", column_r6.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r2.source)("column", column_r6);
} }
function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r3.grid);
} }
export class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadTitlesRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQVM1RSw2QkFLSztJQUQwQixxS0FBUyxpQ0FBMEIsSUFBQztJQUNuRSxpQkFBSzs7O0lBSjBCLGtDQUFhLHlCQUFBLHVDQUFBOzs7SUFLNUMsd0JBQXlFOzs7SUFBbkIsa0NBQWE7Ozs7SUFDbkUsNkJBRUU7SUFBQSw4Q0FBMEc7SUFBakQsb0xBQVEsd0JBQWlCLElBQUM7SUFBQyxpQkFBc0I7SUFDNUcsaUJBQUs7Ozs7SUFId0MsNERBQW9DO0lBQy9FLHdDQUE0QjtJQURvRCx5Q0FBd0I7SUFFbkYsZUFBaUI7SUFBakIsc0NBQWlCLHFCQUFBOzs7SUFFeEMsd0JBQTBFOzs7SUFBbkIsa0NBQWE7O0FBR3hFLE1BQU0sT0FBTyx1QkFBdUI7SUFqQnBDO1FBdUJZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWFuRDtJQU5DLFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7OzhGQWxCVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQWRoQyxzRUFLQTtRQUNBLHNFQUFvRTtRQUNwRSxzRUFFRTtRQUVGLHNFQUFxRTs7UUFYdEMsK0NBQTRCO1FBTWxDLGVBQTRCO1FBQTVCLCtDQUE0QjtRQUNqRCxlQUF3QztRQUF4QywrQ0FBd0M7UUFJbkIsZUFBNkI7UUFBN0IsZ0RBQTZCOztrREFHN0MsdUJBQXVCO2NBakJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtdGl0bGVzLXJvd10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0aCBuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RBbGxSb3dzLmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvdGg+XG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBbZ3JpZF09XCJncmlkXCI+PC90aD5cbiAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBncmlkLmdldENvbHVtbnMoKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXRoIHt7IGNvbHVtbi5pZCB9fVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5jbGFzc1wiXG4gICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCIgPlxuICAgICAgPG5nMi1zdC1jb2x1bW4tdGl0bGUgW3NvdXJjZV09XCJzb3VyY2VcIiBbY29sdW1uXT1cImNvbHVtblwiIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCI+PC9uZzItc3QtY29sdW1uLXRpdGxlPlxuICAgIDwvdGg+XG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG5cbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcblxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICB9XG5cbn1cbiJdfQ==