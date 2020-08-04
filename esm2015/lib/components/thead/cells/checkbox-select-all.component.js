import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["ng2-st-checkbox-select-all", ""];
export class CheckboxSelectAllComponent {
}
CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
CheckboxSelectAllComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.isAllSelected);
    } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxSelectAllComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVdqRCxNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOytEQUExQiwwQkFBMEI7UUFIbkMsMkJBQ0Y7O1FBRHlCLDJDQUF5Qjs7a0RBR3ZDLDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1jaGVja2JveC1zZWxlY3QtYWxsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtuZ01vZGVsXT1cImlzQWxsU2VsZWN0ZWRcIj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcbn1cbiJdfQ==