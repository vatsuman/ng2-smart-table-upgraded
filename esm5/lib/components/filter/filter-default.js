import { Output, EventEmitter, Input, Component } from '@angular/core';
import * as i0 from "@angular/core";
var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
    FilterDefault.ɵcmp = i0.ɵɵdefineComponent({ type: FilterDefault, selectors: [["ng-component"]], inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function FilterDefault_Template(rf, ctx) { }, encapsulation: 2 });
    return FilterDefault;
}());
export { FilterDefault };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterDefault, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkU7SUFBQTtRQU9XLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0MsVUFBSyxHQUFXLEVBQUUsQ0FBQztLQVNwQjtJQVBDLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzhFQWhCVSxhQUFhO3NEQUFiLGFBQWE7d0JBUjFCO0NBeUJDLEFBcEJELElBb0JDO1NBakJZLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEZWZhdWx0IHtcclxuXHJcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgb25GaWx0ZXIocXVlcnk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3VyY2UuYWRkRmlsdGVyKHtcclxuICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxyXG4gICAgICBzZWFyY2g6IHF1ZXJ5LFxyXG4gICAgICBmaWx0ZXI6IHRoaXMuY29sdW1uLmdldEZpbHRlckZ1bmN0aW9uKCksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19