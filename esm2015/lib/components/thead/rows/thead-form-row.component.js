import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/actions.component";
import * as i3 from "../../cell/cell.component";
const _c0 = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "ng2-smart-table-cell", 5);
    i0.ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r6)("grid", ctx_r2.grid)("isNew", true)("createConfirm", ctx_r2.createConfirm)("inputClass", ctx_r2.addInputClass)("isInEditing", ctx_r2.grid.getNewRow().isInEditing);
} }
function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r3.grid);
} }
export class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFormRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-form-row]',
                template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVE1RSxxQkFBa0I7Ozs7SUFDbEIsNkJBQ0U7SUFBQSx5Q0FBMkU7SUFBN0MsNE1BQTJCO0lBQUMsaUJBQWlCO0lBQzdFLGlCQUFLOzs7SUFEYSxlQUFhO0lBQWIsa0NBQWE7Ozs7SUFFL0IsMEJBQ0U7SUFBQSwrQ0FPdUI7SUFERCxrTkFBMkI7SUFDakQsaUJBQXVCO0lBQ3pCLGlCQUFLOzs7O0lBUm1CLGVBQWE7SUFBYiw4QkFBYSxxQkFBQSxlQUFBLHVDQUFBLG9DQUFBLG9EQUFBOzs7O0lBU3JDLDZCQUNFO0lBQUEseUNBQTJFO0lBQTdDLDZNQUEyQjtJQUFDLGlCQUFpQjtJQUM3RSxpQkFBSzs7O0lBRGEsZUFBYTtJQUFiLGtDQUFhOztBQUlyQyxNQUFNLE9BQU8scUJBQXFCO0lBdEJsQztRQTRCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQW1CNUM7SUFaQyxRQUFRLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzswRkF4QlUscUJBQXFCOzBEQUFyQixxQkFBcUI7UUFuQjVCLG9FQUFhO1FBQ2Isb0VBQ0U7UUFFRixvRUFDRTtRQVNGLG9FQUNFOztRQWRHLGVBQTRCO1FBQTVCLCtDQUE0QjtRQUc3QixlQUFnRDtRQUFoRCx5REFBZ0Q7UUFVL0MsZUFBNkI7UUFBN0IsZ0RBQTZCOztrREFLM0IscUJBQXFCO2NBdEJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZvcm0tcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8dGQgKm5nSWY9XCJcIj48L3RkPlxuICAgICAgPHRkICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgICAgPG5nMi1zdC1hY3Rpb25zIFtncmlkXT1cImdyaWRcIiAoY3JlYXRlKT1cIm9uQ3JlYXRlKCRldmVudClcIj48L25nMi1zdC1hY3Rpb25zPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBncmlkLmdldE5ld1JvdygpLmdldENlbGxzKClcIj5cbiAgICAgICAgPG5nMi1zbWFydC10YWJsZS1jZWxsIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNOZXddPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImFkZElucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzSW5FZGl0aW5nXT1cImdyaWQuZ2V0TmV3Um93KCkuaXNJbkVkaXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+XG4gICAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gICAgICA8L3RkPlxuICAgICAgPHRkICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgICAgIDxuZzItc3QtYWN0aW9ucyBbZ3JpZF09XCJncmlkXCIgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+PC9uZzItc3QtYWN0aW9ucz5cbiAgICAgIDwvdGQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRm9ybVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgYWRkSW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIG9uQ3JlYXRlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZ3JpZC5jcmVhdGUodGhpcy5ncmlkLmdldE5ld1JvdygpLCB0aGlzLmNyZWF0ZUNvbmZpcm0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgICB0aGlzLmFkZElucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmlucHV0Q2xhc3MnKTtcbiAgfVxufVxuIl19