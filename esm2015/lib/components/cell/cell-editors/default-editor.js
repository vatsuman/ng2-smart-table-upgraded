import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
DefaultEditor.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEditor, selectors: [["ng-component"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, decls: 0, vars: 0, template: function DefaultEditor_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEditor, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], onStopEditing: [{
            type: Output
        }], onEdited: [{
            type: Output
        }], onClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RSxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQU9ZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUM3Qzs7MEVBUFksYUFBYTtrREFBYixhQUFhO2tEQUFiLGFBQWE7Y0FIekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2I7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgRWRpdG9yIHtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblN0b3BFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvciB7XG4gIGNlbGw6IENlbGw7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgb25TdG9wRWRpdGluZzogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uRWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XG59XG4iXX0=