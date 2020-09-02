import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var CheckboxEditorComponent = /** @class */ (function (_super) {
    __extends(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        return _super.call(this) || this;
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) { return new (t || CheckboxEditorComponent)(); };
    CheckboxEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxEditorComponent, selectors: [["checkbox-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]], template: function CheckboxEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_3_0 = null;
            var currVal_3 = ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0.true) || true);
            i0.ɵɵproperty("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", currVal_3);
        } }, directives: [i1.NgClass], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
    return CheckboxEditorComponent;
}(DefaultEditor));
export { CheckboxEditorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxEditorComponent, [{
        type: Component,
        args: [{
                selector: 'checkbox-editor',
                styleUrls: ['./editor.component.scss'],
                template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2NoZWNrYm94LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFakQ7SUFjNkMsMkNBQWE7SUFFeEQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDdEcsSUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNqRSxDQUFDO2tHQVZVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lBVmhDLGdDQVFBO1lBRk8seUdBQVMsd0JBQW9CLElBQUMsOEZBQ3BCLG9CQUFnQixJQURJO1lBTnJDLGlCQVFBOzs7O1lBUk8sd0NBQXNCLDBCQUFBLG9DQUFBLHNCQUFBOztrQ0FSakM7Q0E2QkMsQUF6QkQsQ0FjNkMsYUFBYSxHQVd6RDtTQVhZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBZG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFLGtYQVNQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtZWRpdG9yJyxcclxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXHJcbiAgICAgICAgICAgW2NoZWNrZWRdPVwiY2VsbC5nZXRWYWx1ZSgpID09IChjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy50cnVlIHx8IHRydWUpXCJcclxuICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHRydWVWYWwgPSAodGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS50cnVlKSB8fCB0cnVlO1xyXG4gICAgY29uc3QgZmFsc2VWYWwgPSAodGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5mYWxzZSkgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZCA/IHRydWVWYWwgOiBmYWxzZVZhbDtcclxuICB9XHJcbn1cclxuIl19