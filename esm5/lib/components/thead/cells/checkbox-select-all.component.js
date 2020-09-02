import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["ng2-st-checkbox-select-all", ""];
var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
    CheckboxSelectAllComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.isAllSelected);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
    return CheckboxSelectAllComponent;
}());
export { CheckboxSelectAllComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxSelectAllComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRDtJQUFBO0tBV0M7d0dBTFksMEJBQTBCO21FQUExQiwwQkFBMEI7WUFIbkMsMkJBQ0Y7O1lBRHlCLDJDQUF5Qjs7cUNBUnBEO0NBZ0JDLEFBWEQsSUFXQztTQUxZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUUsaUVBRVQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGxdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtuZ01vZGVsXT1cImlzQWxsU2VsZWN0ZWRcIj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xyXG59XHJcbiJdfQ==