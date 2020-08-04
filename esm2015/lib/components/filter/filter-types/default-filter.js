import { Input, Output, EventEmitter, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
DefaultFilter.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultFilter, selectors: [["ng-component"]], inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function DefaultFilter_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFilter, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { query: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], column: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWxGLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS0UsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUtWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBVy9DO0lBVEMsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OzBFQWpCVSxhQUFhO2tEQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7a0JBS0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIEZpbHRlciwgT25EZXN0cm95IHtcblxuICBkZWxheTogbnVtYmVyID0gMzAwO1xuICBjaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCh0aGlzLnF1ZXJ5KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XG5cbiAgZGVsYXk/OiBudW1iZXI7XG4gIGNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgY29sdW1uOiBDb2x1bW47XG4gIGZpbHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz47XG59XG4iXX0=