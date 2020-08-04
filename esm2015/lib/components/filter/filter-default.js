import { Output, EventEmitter, Input, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
FilterDefault.ɵcmp = i0.ɵɵdefineComponent({ type: FilterDefault, selectors: [["ng-component"]], inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function FilterDefault_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRdkUsTUFBTSxPQUFPLGFBQWE7SUFIMUI7UUFPVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLFVBQUssR0FBVyxFQUFFLENBQUM7S0FTcEI7SUFQQyxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEVBaEJVLGFBQWE7a0RBQWIsYUFBYTtrREFBYixhQUFhO2NBSHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyRGVmYXVsdCB7XG5cbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcblxuICBvbkZpbHRlcihxdWVyeTogc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UuYWRkRmlsdGVyKHtcbiAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgIHNlYXJjaDogcXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuY29sdW1uLmdldEZpbHRlckZ1bmN0aW9uKCksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==