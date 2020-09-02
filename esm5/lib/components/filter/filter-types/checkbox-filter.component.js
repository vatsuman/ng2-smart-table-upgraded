import { __extends } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function CheckboxFilterComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.resetFilter($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    var tmp_0_0 = null;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(((tmp_0_0 = ctx_r0.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
} }
var CheckboxFilterComponent = /** @class */ (function (_super) {
    __extends(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        var _this = _super.call(this) || this;
        _this.filterActive = false;
        _this.inputControl = new FormControl();
        return _this;
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe(function (checked) {
            _this.filterActive = true;
            var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
            var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
            _this.query = checked ? trueVal : falseVal;
            _this.setFilter();
        });
    };
    CheckboxFilterComponent.prototype.resetFilter = function (event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    };
    CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) { return new (t || CheckboxFilterComponent)(); };
    CheckboxFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxFilterComponent, selectors: [["checkbox-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]], template: function CheckboxFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
            i0.ɵɵtemplate(1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("formControl", ctx.inputControl)("ngClass", ctx.inputClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.filterActive);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.NgClass, i2.NgIf], encapsulation: 2 });
    return CheckboxFilterComponent;
}(DefaultFilter));
export { CheckboxFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxFilterComponent, [{
        type: Component,
        args: [{
                selector: 'checkbox-filter',
                template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lBTTFDLDRCQUMwQztJQUE5QiwrTEFBNkI7SUFBQyxZQUFrRDtJQUFBLGlCQUFJOzs7O0lBQXRELGVBQWtEO0lBQWxELGlIQUFrRDs7QUFMaEc7SUFRNkMsMkNBQWE7SUFLeEQ7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFMRCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7O0lBSWpDLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQzFCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQU0sT0FBTyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUM5RixJQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDakcsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7a0dBM0JVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lBTGhDLDJCQUNBO1lBQUEsb0VBQzBDOztZQUZuQiw4Q0FBNEIsMkJBQUE7WUFDdkMsZUFBb0I7WUFBcEIsdUNBQW9COztrQ0FWcEM7Q0EwQ0MsQUFwQ0QsQ0FRNkMsYUFBYSxHQTRCekQ7U0E1QlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxzUUFJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbF09XCJpbnB1dENvbnRyb2xcIiBbbmdDbGFzc109XCJpbnB1dENsYXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJmaWx0ZXJBY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0RmlsdGVyKCRldmVudClcIj57e2NvbHVtbi5nZXRGaWx0ZXJDb25maWcoKT8ucmVzZXRUZXh0IHx8ICdyZXNldCd9fTwvYT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW5wdXRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KSlcclxuICAgICAgLnN1YnNjcmliZSgoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0cnVlVmFsID0gKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpICYmIHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLnRydWUpIHx8IHRydWU7XHJcbiAgICAgICAgY29uc3QgZmFsc2VWYWwgPSAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkgJiYgdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZmFsc2UpIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBjaGVja2VkID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xyXG4gICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRGaWx0ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucXVlcnkgPSAnJztcclxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKGZhbHNlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRGaWx0ZXIoKTtcclxuICB9XHJcbn1cclxuIl19