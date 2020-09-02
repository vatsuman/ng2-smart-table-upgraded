import { __extends } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@akveo/ng2-completer";
import * as i2 from "@angular/forms";
var CompleterFilterComponent = /** @class */ (function (_super) {
    __extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new Subject();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map(function (ev) { return (ev && ev.title) || ev || ''; }), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(i0.ɵɵdirectiveInject(i1.CompleterService)); };
    CompleterFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ng2-completer", 0);
            i0.ɵɵlistener("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
        } }, directives: [i1.CompleterCmp, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return CompleterFilterComponent;
}(DefaultFilter));
export { CompleterFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CompleterFilterComponent, [{
        type: Component,
        args: [{
                selector: 'completer-filter',
                template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  ",
            }]
    }], function () { return [{ type: i1.CompleterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFekU7SUFhOEMsNENBQWE7SUFJekQsa0NBQW9CLGdCQUFrQztRQUF0RCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxzQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDOztJQUl0QyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDdkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUM3QyxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsRUFBTyxJQUFLLE9BQUEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsRUFDOUMsb0JBQW9CLEVBQUUsRUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtREFBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QiwrRUFBK0U7UUFDL0UsaUdBQWlHO1FBQ2pHLGtDQUFrQztRQUNsQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7b0dBaENVLHdCQUF3QjtpRUFBeEIsd0JBQXdCO1lBVmpDLHdDQU9nQjtZQVBELHdKQUFtQixxSEFDRiw0QkFBd0IsSUFEdEIsMkdBTVAsaUNBQTZCLElBTnRCO1lBT2xDLGlCQUFnQjs7WUFQRCxtQ0FBbUIsbUVBQUEsZ0ZBQUEsNERBQUEsd0ZBQUE7O21DQVZ0QztDQXFEQyxBQTlDRCxDQWE4QyxhQUFhLEdBaUMxRDtTQWpDWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQWJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLHdqQkFTVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFrdmVvL25nMi1jb21wbGV0ZXInO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbXBsZXRlci1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmcyLWNvbXBsZXRlciBbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImlucHV0VGV4dENoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbWluU2VhcmNoTGVuZ3RoXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIubWluU2VhcmNoTGVuZ3RoIHx8IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIucGF1c2UgfHwgMFwiXHJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWQpPVwiY29tcGxldGVyQ29udGVudC5uZXh0KCRldmVudClcIj5cclxuICAgIDwvbmcyLWNvbXBsZXRlcj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbXBsZXRlckNvbnRlbnQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGxldGVyU2VydmljZTogQ29tcGxldGVyU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyO1xyXG4gICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XHJcbiAgICBjb25maWcuZGF0YVNlcnZpY2UuZGVzY3JpcHRpb25GaWVsZChjb25maWcuZGVzY3JpcHRpb25GaWVsZCk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5jb21wbGV0ZXJDb250ZW50XHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoZXY6IGFueSkgPT4gKGV2ICYmIGV2LnRpdGxlKSB8fCBldiB8fCAnJyksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChzZWFyY2g6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBzZWFyY2g7XHJcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFRleHRDaGFuZ2VkKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIC8vIHdvcmthcm91bmQgdG8gdHJpZ2dlciB0aGUgc2VhcmNoIGV2ZW50IHdoZW4gdGhlIGhvbWUvZW5kIGJ1dHRvbnMgYXJlIGNsaWNrZWRcclxuICAgIC8vIHdoZW4gdGhpcyBoYXBwZW5zIHRoZSBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgaXMgc2V0IHRvIFwiXCIgYnV0IHRoZSAoc2VsZWN0ZWQpIG1ldGhvZCBpcyBub3QgY2FsbGVkXHJcbiAgICAvLyBzbyBoZXJlIGl0IGdldHMgY2FsbGVkIG1hbnVhbGx5XHJcbiAgICBpZiAoZXZlbnQgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuY29tcGxldGVyQ29udGVudC5uZXh0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19