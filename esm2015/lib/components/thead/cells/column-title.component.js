import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./title/title.component";
export class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
}
ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
ColumnTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ng2-smart-table-title", 1);
        i0.ɵɵlistener("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("source", ctx.source)("column", ctx.column);
    } }, directives: [i1.TitleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColumnTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-column-title',
                template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2NvbHVtbi10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBYXZFLE1BQU0sT0FBTyxvQkFBb0I7SUFSakM7UUFhWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUUxQzs7d0ZBUFksb0JBQW9CO3lEQUFwQixvQkFBb0I7UUFMN0IsOEJBQ0U7UUFBQSxnREFBOEc7UUFBbkQsb0hBQVEscUJBQWlCLElBQUM7UUFBQyxpQkFBd0I7UUFDaEgsaUJBQU07O1FBRG1CLGVBQWlCO1FBQWpCLG1DQUFpQixzQkFBQTs7a0RBSWpDLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC1jb2x1bW4tdGl0bGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGUtdGl0bGUgW3NvdXJjZV09XCJzb3VyY2VcIiBbY29sdW1uXT1cImNvbHVtblwiIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCI+PC9uZzItc21hcnQtdGFibGUtdGl0bGU+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblRpdGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbn1cbiJdfQ==