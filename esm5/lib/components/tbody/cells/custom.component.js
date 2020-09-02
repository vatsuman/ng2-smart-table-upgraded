import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TbodyCustomComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 1);
    i0.ɵɵlistener("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r3); var action_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onCustom(action_r1, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r1 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", action_r1.title, i0.ɵɵsanitizeHtml);
} }
var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new EventEmitter();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) { return new (t || TbodyCustomComponent)(); };
    TbodyCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.grid.getSetting("actions.custom"));
        } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
    return TbodyCustomComponent;
}());
export { TbodyCustomComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbodyCustomComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], custom: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFTMUYsNEJBRzBDO0lBQXZDLG1PQUFrQztJQUFDLGlCQUFJOzs7SUFEdkMsOERBQTBCOztBQU5uQztJQUFBO1FBZWMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FhOUM7SUFYRyx1Q0FBUSxHQUFSLFVBQVMsTUFBVyxFQUFFLEtBQVU7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7NEZBaEJRLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lBTjNCLGlFQUdzQzs7WUFIbkMsK0RBQXdEOzsrQkFUakU7Q0FpQ0MsQUE1QkQsSUE0QkM7U0FsQlksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FWaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNFBBS0w7YUFDUjs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmcyLXN0LXRib2R5LWN1c3RvbScsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxhICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmN1c3RvbScpXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tXCIgXHJcbiAgICAgICAgIFtpbm5lckhUTUxdPVwiYWN0aW9uLnRpdGxlXCJcclxuICAgICAgICAgKGNsaWNrKT1cIm9uQ3VzdG9tKGFjdGlvbiwgJGV2ZW50KVwiPjwvYT5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYm9keUN1c3RvbUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICAgIEBJbnB1dCgpIHJvdzogUm93O1xyXG4gICAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgb25DdXN0b20oYWN0aW9uOiBhbnksIGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbS5lbWl0KHtcclxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24ubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==