import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2._sort($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.currentDirection);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.column.title);
} }
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
        i0.ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.column.isSortable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.column.isSortable);
    } }, directives: [i1.NgIf, i1.NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{transform:rotate(-180deg);margin-bottom:-2px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-title',
                styleUrls: ['./title.component.scss'],
                template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7OztJQVU3Riw0QkFJRTtJQUhVLGtMQUF1QjtJQUdqQyxZQUNGO0lBQUEsaUJBQUk7OztJQUZRLGlEQUE0QjtJQUN0QyxlQUNGO0lBREUsb0RBQ0Y7OztJQUNBLCtCQUF3RDtJQUFBLFlBQWtCO0lBQUEsaUJBQU87OztJQUF6QixlQUFrQjtJQUFsQix5Q0FBa0I7O0FBRzlFLE1BQU0sT0FBTyxjQUFjO0lBYjNCO1FBZUUscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBR1osU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0ErQzFDO0lBM0NDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztpQkFDNUI7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQWMsRUFBRSxFQUFFO2dCQUVwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEI7Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO2FBQzFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs0RUFuRFUsY0FBYzttREFBZCxjQUFjO1FBVHZCLDJEQUlFO1FBRUYsaUVBQXdEOztRQU41Qyw0Q0FBeUI7UUFNUixlQUEwQjtRQUExQiw2Q0FBMEI7O2tEQUc5QyxjQUFjO2NBYjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7O2tCQUlFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtdGl0bGUnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJjb2x1bW4uaXNTb3J0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiX3NvcnQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1zb3J0LWxpbmsgc29ydFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjdXJyZW50RGlyZWN0aW9uXCI+XHJcbiAgICAgIHt7IGNvbHVtbi50aXRsZSB9fVxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtc29ydFwiICpuZ0lmPVwiIWNvbHVtbi5pc1NvcnRhYmxlXCI+e3sgY29sdW1uLnRpdGxlIH19PC9zcGFuPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGN1cnJlbnREaXJlY3Rpb24gPSAnJztcclxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xyXG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydENvbmYgPSB0aGlzLnNvdXJjZS5nZXRTb3J0KCk7XHJcblxyXG4gICAgICAgIGlmIChzb3J0Q29uZi5sZW5ndGggPiAwICYmIHNvcnRDb25mWzBdWydmaWVsZCddID09PSB0aGlzLmNvbHVtbi5pZCkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gc29ydENvbmZbMF1bJ2RpcmVjdGlvbiddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zb3J0KGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNoYW5nZVNvcnREaXJlY3Rpb24oKTtcclxuICAgIHRoaXMuc291cmNlLnNldFNvcnQoW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50RGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbXBhcmU6IHRoaXMuY29sdW1uLmdldENvbXBhcmVGdW5jdGlvbigpLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICB0aGlzLnNvcnQuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREaXJlY3Rpb24pIHtcclxuICAgICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbi5zb3J0RGlyZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpcmVjdGlvbjtcclxuICB9XHJcbn1cclxuIl19