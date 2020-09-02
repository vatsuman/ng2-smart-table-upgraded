import { Input, Output, EventEmitter, Component } from '@angular/core';
import * as i0 from "@angular/core";
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
    DefaultFilter.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultFilter, selectors: [["ng-component"]], inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function DefaultFilter_Template(rf, ctx) { }, encapsulation: 2 });
    return DefaultFilter;
}());
export { DefaultFilter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2xGO0lBQUE7UUFLRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBS1YsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FXL0M7SUFUQyxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs4RUFqQlUsYUFBYTtzREFBYixhQUFhO3dCQVIxQjtDQTBCQyxBQXJCRCxJQXFCQztTQWxCWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2I7O2tCQUtFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgRmlsdGVyLCBPbkRlc3Ryb3kge1xyXG5cclxuICBkZWxheTogbnVtYmVyID0gMzAwO1xyXG4gIGNoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcclxuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEZpbHRlcigpIHtcclxuICAgIHRoaXMuZmlsdGVyLmVtaXQodGhpcy5xdWVyeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XHJcblxyXG4gIGRlbGF5PzogbnVtYmVyO1xyXG4gIGNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XHJcbiAgcXVlcnk6IHN0cmluZztcclxuICBpbnB1dENsYXNzOiBzdHJpbmc7XHJcbiAgY29sdW1uOiBDb2x1bW47XHJcbiAgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxufVxyXG4iXX0=