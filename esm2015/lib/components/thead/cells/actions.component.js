import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQWVqRixNQUFNLE9BQU8sZ0JBQWdCO0lBWDdCO1FBY1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FTNUM7SUFKQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0ZBWFUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUFSekIsNEJBRThEO1FBQTFELHVGQUFTLHVCQUF1QixTQUFDLHVCQUFtQixJQUFDO1FBQUMsaUJBQUk7UUFDOUQsNEJBRXdFO1FBQXBFLHVGQUFTLHVCQUF1QixvQ0FBd0IsS0FBSyxJQUFFO1FBQUMsaUJBQUk7O1FBSnBFLHNFQUFpQztRQUdqQyxlQUFpQztRQUFqQyxzRUFBaUM7O2tEQUk1QixnQkFBZ0I7Y0FYNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXN0LWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWNyZWF0ZVwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiY3JlYXRlQnV0dG9uQ29udGVudFwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtjcmVhdGUuZW1pdCgkZXZlbnQpXCI+PC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWNhbmNlbFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiY2FuY2VsQnV0dG9uQ29udGVudFwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtncmlkLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1wiPjwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uQ29udGVudDogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY3JlYXRlQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY3JlYXRlQnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY2FuY2VsQnV0dG9uQ29udGVudCcpO1xuICB9XG59XG4iXX0=