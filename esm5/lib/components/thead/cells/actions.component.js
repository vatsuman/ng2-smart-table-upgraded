import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
    ActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.createButtonContent, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return ActionsComponent;
}());
export { ActionsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQUlqRjtJQUFBO1FBY1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FTNUM7SUFKQyxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQztvRkFYVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtZQVJ6Qiw0QkFFOEQ7WUFBMUQsdUZBQVMsdUJBQXVCLFNBQUMsdUJBQW1CLElBQUM7WUFBQyxpQkFBSTtZQUM5RCw0QkFFd0U7WUFBcEUsdUZBQVMsdUJBQXVCLG9DQUF3QixLQUFLLElBQUU7WUFBQyxpQkFBSTs7WUFKcEUsc0VBQWlDO1lBR2pDLGVBQWlDO1lBQWpDLHNFQUFpQzs7MkJBWHpDO0NBMkJDLEFBdkJELElBdUJDO1NBWlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FYNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSwwWUFPVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzItc3QtYWN0aW9ucycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWNyZWF0ZVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJjcmVhdGVCdXR0b25Db250ZW50XCJcclxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Y3JlYXRlLmVtaXQoJGV2ZW50KVwiPjwvYT5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWNhbmNlbFwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJjYW5jZWxCdXR0b25Db250ZW50XCJcclxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Z3JpZC5jcmVhdGVGb3JtU2hvd24gPSBmYWxzZTtcIj48L2E+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY3JlYXRlQnV0dG9uQ29udGVudDogc3RyaW5nO1xyXG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmNyZWF0ZUJ1dHRvbkNvbnRlbnQnKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY2FuY2VsQnV0dG9uQ29udGVudCcpO1xyXG4gIH1cclxufVxyXG4iXX0=