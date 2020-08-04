import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./rows/thead-titles-row.component";
import * as i3 from "./rows/thead-filters-row.component";
import * as i4 from "./rows/thead-form-row.component";
const _c0 = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source);
} }
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.filter.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r1.grid)("source", ctx_r1.source);
} }
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r2.grid)("createConfirm", ctx_r2.createConfirm);
} }
export class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
Ng2SmartTableTheadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);
        i0.ɵɵtemplate(1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
        i0.ɵɵtemplate(2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isHideHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isHideSubHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.grid.createFormShown);
    } }, directives: [i1.NgIf, i2.TheadTitlesRowComponent, i3.TheadFitlersRowComponent, i4.TheadFormRowComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableTheadComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead]',
                templateUrl: './thead.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDQWhGLDZCQU9LO0lBRnVCLHVLQUFRLHdCQUFpQixJQUFDLDRLQUNULGlDQUEwQixJQURqQjtJQUV0RCxpQkFBSzs7O0lBTHVCLGtDQUFhLHVDQUFBLHlCQUFBOzs7O0lBT3pDLDZCQU1LO0lBRnlCLDJLQUFVLDBCQUFtQixJQUFDLDhKQUNwQiwwQkFBbUIsSUFEQztJQUU1RCxpQkFBSzs7O0lBSnlCLGtDQUFhLHlCQUFBOzs7SUFNM0Msd0JBR0s7OztJQUZxQixrQ0FBYSx1Q0FBQTs7QURUdkMsTUFBTSxPQUFPLDJCQUEyQjtJQUp4QztRQVdjLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVM5QztJQUpDLFdBQVc7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7c0dBbEJRLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDVHhDLDBFQU9BO1FBRUEsMEVBTUE7UUFFQSwwRUFHQTs7UUFwQjRCLHdDQUFxQjtRQVNwQixlQUF3QjtRQUF4QiwyQ0FBd0I7UUFRM0IsZUFBNEI7UUFBNUIsK0NBQTRCOztrRERSekMsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsd0JBQXdCO2FBQ3hDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWRdJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGhlYWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICAgIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdEFsbFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xuICAgIGlzSGlkZVN1YkhlYWRlcjogYm9vbGVhbjtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgIHRoaXMuaXNIaWRlSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVIZWFkZXInKTtcbiAgICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInKTtcbiAgICB9XG59XG4iLCI8dHIgbmcyLXN0LXRoZWFkLXRpdGxlcy1yb3cgKm5nSWY9XCIhaXNIaWRlSGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC10aXRsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdEFsbFJvd3MpPVwic2VsZWN0QWxsUm93cy5lbWl0KCRldmVudClcIj5cbjwvdHI+XG5cbjx0ciBuZzItc3QtdGhlYWQtZmlsdGVycy1yb3cgKm5nSWY9XCIhaXNIaWRlU3ViSGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWZpbHRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJmaWx0ZXIuZW1pdCgkZXZlbnQpXCI+XG48L3RyPlxuXG48dHIgbmcyLXN0LXRoZWFkLWZvcm0tcm93ICpuZ0lmPVwiZ3JpZC5jcmVhdGVGb3JtU2hvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NyZWF0ZUNvbmZpcm1dPVwiY3JlYXRlQ29uZmlybVwiPlxuPC90cj5cbiJdfQ==