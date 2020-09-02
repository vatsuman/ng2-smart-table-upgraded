import { __extends } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
var _c0 = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r2.title, " ");
} }
var SelectFilterComponent = /** @class */ (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        return _super.call(this) || this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
    SelectFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, NgControl);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputControl = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0, 1);
            i0.ɵɵlistener("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
            i0.ɵɵelementStart(2, "option", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.query);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.column.getFilterConfig().selectText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.column.getFilterConfig().list);
        } }, directives: [i1.SelectControlValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i2.NgForOf], encapsulation: 2 });
    return SelectFilterComponent;
}(DefaultFilter));
export { SelectFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFilterComponent, [{
        type: Component,
        args: [{
                selector: 'select-filter',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
            }]
    }], function () { return []; }, { inputControl: [{
            type: ViewChild,
            args: ['inputControl', { read: NgControl, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQVd6QyxpQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRm9ELHVDQUFzQjtJQUNqRixlQUNGO0lBREUsZ0RBQ0Y7O0FBWFI7SUFlMkMseUNBQWE7SUFJdEQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OEZBaEJVLHFCQUFxQjs4REFBckIscUJBQXFCOzRDQUVHLFNBQVM7Ozs7O1lBZDFDLG9DQUtJO1lBRkksOElBQW1CO1lBRXZCLGlDQUFpQjtZQUFBLFlBQXlDO1lBQUEsaUJBQVM7WUFDbkUsNEVBQ0U7WUFFTixpQkFBUzs7WUFURCx3Q0FBc0Isc0JBQUE7WUFLVCxlQUF5QztZQUF6Qyw2REFBeUM7WUFDbEQsZUFBb0Q7WUFBcEQsMkRBQW9EOztnQ0FmcEU7Q0FzQ0MsQUFoQ0QsQ0FlMkMsYUFBYSxHQWlCdkQ7U0FqQlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FmakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsa1lBV1Q7YUFDRjs7a0JBR0UsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgI2lucHV0Q29udHJvbFxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XHJcblxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57eyBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuc2VsZWN0VGV4dCB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cclxuICAgICAgICAgIHt7IG9wdGlvbi50aXRsZSB9fVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dENvbnRyb2wnLCB7IHJlYWQ6IE5nQ29udHJvbCwgc3RhdGljOiB0cnVlIH0pIGlucHV0Q29udHJvbDogTmdDb250cm9sO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBza2lwKDEpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRGaWx0ZXIoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==