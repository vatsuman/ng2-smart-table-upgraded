import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@akveo/ng2-completer";
import * as i2 from "@angular/forms";
export class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
}
CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) { return new (t || CompleterEditorComponent)(i0.ɵɵdirectiveInject(i1.CompleterService)); };
CompleterEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompleterEditorComponent, selectors: [["completer-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng2-completer", 0);
        i0.ɵɵlistener("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.completerStr = $event; })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.onEditedCompleter($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
    } }, directives: [i1.CompleterCmp, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CompleterEditorComponent, [{
        type: Component,
        args: [{
                selector: 'completer-editor',
                template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `,
            }]
    }], function () { return [{ type: i1.CompleterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQWNqRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUl6RCxZQUFvQixnQkFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3JGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dHQW5CVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQVRqQyx3Q0FNZ0I7UUFORCwrSkFBMEIsMkdBS2QsNkJBQXlCLElBTFg7UUFNekMsaUJBQWdCOztRQU5ELDBDQUEwQix1RUFBQSxvRkFBQSxnRUFBQSw0RkFBQTs7a0RBU2hDLHdCQUF3QjtjQVpwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJ0Bha3Zlby9uZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wbGV0ZXItZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmcyLWNvbXBsZXRlciBbKG5nTW9kZWwpXT1cImNvbXBsZXRlclN0clwiXG4gICAgICAgICAgICAgICAgICAgW2RhdGFTZXJ2aWNlXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLmRhdGFTZXJ2aWNlXCJcbiAgICAgICAgICAgICAgICAgICBbbWluU2VhcmNoTGVuZ3RoXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLm1pblNlYXJjaExlbmd0aCB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIucGF1c2UgfHwgMFwiXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLnBsYWNlaG9sZGVyIHx8ICdTdGFydCB0eXBpbmcuLi4nXCJcbiAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWQpPVwib25FZGl0ZWRDb21wbGV0ZXIoJGV2ZW50KVwiPlxuICAgIDwvbmcyLWNvbXBsZXRlcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb21wbGV0ZXJTdHI6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGxldGVyU2VydmljZTogQ29tcGxldGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGUgPT09ICdjb21wbGV0ZXInKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyO1xuICAgICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XG4gICAgICBjb25maWcuZGF0YVNlcnZpY2UuZGVzY3JpcHRpb25GaWVsZChjb25maWcuZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgfVxuICB9XG5cbiAgb25FZGl0ZWRDb21wbGV0ZXIoZXZlbnQ6IHsgdGl0bGU6ICcnIH0pOiBib29sZWFuIHtcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBldmVudC50aXRsZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==