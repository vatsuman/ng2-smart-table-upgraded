import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function SelectEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r1.value)("selected", option_r1.value === ctx_r0.cell.getValue());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r1.title, " ");
} }
var SelectEditorComponent = /** @class */ (function (_super) {
    __extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
    SelectEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0);
            i0.ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_4_0 = null;
            var currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", currVal_4);
        } }, directives: [i1.SelectControlValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    return SelectEditorComponent;
}(DefaultEditor));
export { SelectEditorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectEditorComponent, [{
        type: Component,
        args: [{
                selector: 'select-editor',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lBY3pDLGlDQUNzRDtJQUFBLFlBQ3REO0lBQUEsaUJBQVM7Ozs7SUFGeUQsdUNBQXNCLHdEQUFBO0lBQ2xDLGVBQ3REO0lBRHNELCtDQUN0RDs7QUFkUjtJQWtCMkMseUNBQWE7SUFFdEQ7ZUFDRSxpQkFBTztJQUNULENBQUM7OEZBSlUscUJBQXFCOzhEQUFyQixxQkFBcUI7WUFmOUIsaUNBU0k7WUFQSSxzSkFBMkIsMkZBR2xCLHdCQUFvQixJQUhGLDJHQUlWLHlCQUFxQixJQUpYLGlHQUtaLHdCQUFvQixJQUxSO1lBTy9CLDRFQUNzRDtZQUUxRCxpQkFBUzs7OztZQVpELHdDQUFzQiw4QkFBQSwwQkFBQSxvQ0FBQTtZQVNsQixlQUF5RDtZQUF6RCxtQ0FBeUQ7O2dDQWhCekU7Q0EyQkMsQUF2QkQsQ0FrQjJDLGFBQWEsR0FLdkQ7U0FMWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQWxCakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUseWtCQWNQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcclxuICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiPlxyXG5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKT8ubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi52YWx1ZSA9PT0gY2VsbC5nZXRWYWx1ZSgpXCI+e3sgb3B0aW9uLnRpdGxlIH19XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=