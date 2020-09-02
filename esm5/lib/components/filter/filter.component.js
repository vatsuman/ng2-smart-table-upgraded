import { __extends } from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-filter.component";
import * as i3 from "./default-filter.component";
function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r1.query)("column", ctx_r1.column)("source", ctx_r1.source)("inputClass", ctx_r1.inputClass);
} }
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "default-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r2.query)("column", ctx_r2.column)("source", ctx_r2.source)("inputClass", ctx_r2.inputClass);
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
    i0.ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r0.column.getFilterType());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "custom");
} }
var FilterComponent = /** @class */ (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent.ɵfac = function FilterComponent_Factory(t) { return ɵFilterComponent_BaseFactory(t || FilterComponent); };
    FilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.column.isFilterable);
        } }, directives: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomFilterComponent, i3.DefaultFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
    return FilterComponent;
}(FilterDefault));
export { FilterComponent };
var ɵFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(FilterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-filter',
                styleUrls: ['./filter.component.scss'],
                template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFRekMsOENBTXNCO0lBREQsaU9BQTJCO0lBQ2hELGlCQUFzQjs7O0lBTEQsb0NBQWUseUJBQUEseUJBQUEsaUNBQUE7Ozs7SUFNcEMsK0NBTXVCO0lBREQsbU9BQTJCO0lBQ2pELGlCQUF1Qjs7O0lBTEQsb0NBQWUseUJBQUEseUJBQUEsaUNBQUE7OztJQVR2Qyw4QkFDRTtJQUFBLHNHQU1BO0lBQ0Esd0dBTUE7SUFDRixpQkFBTTs7O0lBZm9ELHdEQUFtQztJQUN0RSxlQUF3QjtJQUF4Qix1Q0FBd0I7O0FBTHJEO0lBc0JxQyxtQ0FBYTtJQXRCbEQ7UUFBQSxxRUFnREM7UUF6QkMsV0FBSyxHQUFXLEVBQUUsQ0FBQzs7S0F5QnBCO0lBdEJDLHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFxQkM7UUFwQkMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXO2dCQUNsRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdkUsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBRWhCLGtGQUFrRjtvQkFDbEYsc0dBQXNHO2lCQUN2RztxQkFBTSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTt3QkFDeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7MEdBekJVLGVBQWU7d0RBQWYsZUFBZTtZQWxCdEIsZ0VBQ0U7O1lBRDRCLDhDQUEyQjs7MEJBUi9EO0NBb0RDLEFBaERELENBc0JxQyxhQUFhLEdBMEJqRDtTQTFCWSxlQUFlOzREQUFmLGVBQWU7a0RBQWYsZUFBZTtjQXRCM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxRQUFRLEVBQUUsdTBCQWlCUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsdGVyRGVmYXVsdCB9IGZyb20gJy4vZmlsdGVyLWRlZmF1bHQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc0ZpbHRlcmFibGVcIiBbbmdTd2l0Y2hdPVwiY29sdW1uLmdldEZpbHRlclR5cGUoKVwiPlxyXG4gICAgICAgIDxjdXN0b20tdGFibGUtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvY3VzdG9tLXRhYmxlLWZpbHRlcj5cclxuICAgICAgICA8ZGVmYXVsdC10YWJsZS1maWx0ZXIgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvZGVmYXVsdC10YWJsZS1maWx0ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcclxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XHJcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb25mID0gdGhpcy5zb3VyY2UuZ2V0RmlsdGVyKCk7XHJcbiAgICAgICAgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucXVlcnkgPSAnJztcclxuXHJcbiAgICAgICAgICAvLyBhZGQgYSBjaGVjayBmb3IgZXhpc3RpbmcgZmlsdGVycyBhbiBzZXQgdGhlIHF1ZXJ5IGlmIG9uZSBleGlzdHMgZm9yIHRoaXMgY29sdW1uXHJcbiAgICAgICAgICAvLyB0aGlzIGNvdmVycyBpbnN0YW5jZXMgd2hlcmUgdGhlIGZpbHRlciBpcyBzZXQgYnkgdXNlciBjb2RlIHdoaWxlIG1haW50YWluaW5nIGV4aXN0aW5nIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoazogYW55LCB2OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGsuZmllbGQgPT0gdGhpcy5jb2x1bW4uaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gay5zZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==