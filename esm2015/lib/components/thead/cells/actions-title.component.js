import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["ng2-st-actions-title", ""];
export class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ActionsTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.actionsColumnTitle);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsTitleComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-actions-title]',
                template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7OztBQVVyRixNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ25DLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7MEZBZlUscUJBQXFCOzBEQUFyQixxQkFBcUI7UUFIOUIsOEJBQTZCO1FBQUEsWUFBd0I7UUFBQSxpQkFBTTs7UUFBOUIsZUFBd0I7UUFBeEIsNENBQXdCOztrREFHNUMscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7a0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hY3Rpb25zLXRpdGxlXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC10aXRsZVwiPnt7IGFjdGlvbnNDb2x1bW5UaXRsZSB9fTwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25zVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG5cbiAgYWN0aW9uc0NvbHVtblRpdGxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFjdGlvbnNDb2x1bW5UaXRsZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmNvbHVtblRpdGxlJyk7XG4gIH1cbn1cbiJdfQ==