import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./cell-view-mode/view-cell.component";
import * as i3 from "./cell-edit-mode/edit-cell.component";
function CellComponent_table_cell_view_mode_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "table-cell-view-mode", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r0.cell);
} }
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-edit-mode", 3);
    i0.ɵɵlistener("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
export class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
        i0.ɵɵtemplate(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isInEditing);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isInEditing);
    } }, directives: [i1.NgIf, i2.ViewCellComponent, i3.EditCellComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CellComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-cell',
                template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], isNew: [{
            type: Input
        }], cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], mode: [{
            type: Input
        }], isInEditing: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQVNuRSwwQ0FBZ0Y7OztJQUFyQyxrQ0FBYTs7OztJQUN4RCwrQ0FHdUI7SUFERCw0TkFBMkI7SUFDakQsaUJBQXVCOzs7SUFIbUIsa0NBQWEsaUNBQUE7O0FBTTNELE1BQU0sT0FBTyxhQUFhO0lBVjFCO1FBa0JXLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU1QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVM1QztJQVBDLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7OzBFQXBCVSxhQUFhO2tEQUFiLGFBQWE7UUFQdEIsZ0dBQXlEO1FBQ3pELGdHQUdBOztRQUpzQix1Q0FBb0I7UUFDcEIsZUFBbUI7UUFBbkIsc0NBQW1COztrREFNaEMsYUFBYTtjQVZ6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtY2VsbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0YWJsZS1jZWxsLXZpZXctbW9kZSAqbmdJZj1cIiFpc0luRWRpdGluZ1wiIFtjZWxsXT1cImNlbGxcIj48L3RhYmxlLWNlbGwtdmlldy1tb2RlPlxyXG4gICAgPHRhYmxlLWNlbGwtZWRpdC1tb2RlICpuZ0lmPVwiaXNJbkVkaXRpbmdcIiBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cclxuICAgIDwvdGFibGUtY2VsbC1lZGl0LW1vZGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gIEBJbnB1dCgpIHJvdzogUm93O1xyXG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICBASW5wdXQoKSBpc05ldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdpbmxpbmUnO1xyXG4gIEBJbnB1dCgpIGlzSW5FZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgb25FZGl0ZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcclxuICAgICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdyaWQuc2F2ZSh0aGlzLnJvdywgdGhpcy5lZGl0Q29uZmlybSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==