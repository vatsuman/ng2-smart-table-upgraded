import { Component, Input, ViewChild, ViewContainerRef, } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) { }
var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
    CustomViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        } }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return CustomViewComponent;
}());
export { CustomViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomViewComponent, [{
        type: Component,
        args: [{
                selector: 'custom-view-component',
                template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { cell: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUNULGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQzs7OztBQUt2QjtJQVlFLDZCQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN0RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFUyxtREFBcUIsR0FBL0I7UUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLGlEQUFtQixHQUE3QjtRQUNFLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ25GLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLDJDQUFhLEdBQXZCO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVMsc0NBQVEsR0FBbEI7UUFDRSxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtTQUN0QyxDQUFBO0lBQ0gsQ0FBQzswRkExQ1UsbUJBQW1COzREQUFuQixtQkFBbUI7NENBSU0sZ0JBQWdCOzs7OztZQVBsRCxxSEFBNEI7OzhCQWhCaEM7Q0E4REMsQUFqREQsSUFpREM7U0EzQ1ksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxzREFFVDthQUNGOztrQkFJRSxLQUFLOztrQkFDTCxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xyXG5pbXBvcnQgeyBWaWV3Q2VsbCB9IGZyb20gJy4vdmlldy1jZWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY3VzdG9tLXZpZXctY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIGN1c3RvbUNvbXBvbmVudDogYW55O1xyXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XHJcbiAgQFZpZXdDaGlsZCgnZHluYW1pY1RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNUYXJnZXQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNlbGwgJiYgIXRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29tcG9uZW50KCk7XHJcbiAgICAgIHRoaXMuY2FsbE9uQ29tcG9uZW50SW5pdCgpO1xyXG4gICAgICB0aGlzLnBhdGNoSW5zdGFuY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVDdXN0b21Db21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkucmVuZGVyQ29tcG9uZW50KTtcclxuICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5keW5hbWljVGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxsT25Db21wb25lbnRJbml0KCkge1xyXG4gICAgY29uc3Qgb25Db21wb25lbnRJbml0RnVuY3Rpb24gPSB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0T25Db21wb25lbnRJbml0RnVuY3Rpb24oKTtcclxuICAgIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uICYmIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwYXRjaEluc3RhbmNlKCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSwgdGhpcy5nZXRQYXRjaCgpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRQYXRjaCgpOiBWaWV3Q2VsbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKCksXHJcbiAgICAgIHJvd0RhdGE6IHRoaXMuY2VsbC5nZXRSb3coKS5nZXREYXRhKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19