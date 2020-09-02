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
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r1.value)("selected", option_r1.value === ctx_r0.cell.getValue());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r1.title, " ");
} }
export class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
SelectEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "select", 0);
        i0.ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
        i0.ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
        i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", currVal_4);
    } }, directives: [i1.SelectControlValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectEditorComponent, [{
        type: Component,
        args: [{
                selector: 'select-editor',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUFjekMsaUNBQ3NEO0lBQUEsWUFDdEQ7SUFBQSxpQkFBUzs7OztJQUZ5RCx1Q0FBc0Isd0RBQUE7SUFDbEMsZUFDdEQ7SUFEc0QsK0NBQ3REOztBQUlSLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBRXREO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzswRkFKVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQWY5QixpQ0FTSTtRQVBJLHNKQUEyQiwyRkFHbEIsd0JBQW9CLElBSEYsMkdBSVYseUJBQXFCLElBSlgsaUdBS1osd0JBQW9CLElBTFI7UUFPL0IsNEVBQ3NEO1FBRTFELGlCQUFTOzs7O1FBWkQsd0NBQXNCLDhCQUFBLDBCQUFBLG9DQUFBO1FBU2xCLGVBQXlEO1FBQXpELG1DQUF5RDs7a0RBTTVELHFCQUFxQjtjQWxCakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxyXG4gICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XHJcblxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLnZhbHVlID09PSBjZWxsLmdldFZhbHVlKClcIj57eyBvcHRpb24udGl0bGUgfX1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==