import { Component, Input, ViewChild, ViewContainerRef, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) { }
export class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
CustomViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
    } }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomViewComponent, [{
        type: Component,
        args: [{
                selector: 'custom-view-component',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `,
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { cell: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUNULGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQzs7OztBQVd2QixNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLFlBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNuRix1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFUyxhQUFhO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVTLFFBQVE7UUFDaEIsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7U0FDdEMsQ0FBQTtJQUNILENBQUM7O3NGQTFDVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjt3Q0FJTSxnQkFBZ0I7Ozs7O1FBUGxELHFIQUE0Qjs7a0RBR25CLG1CQUFtQjtjQU4vQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7O2tCQUlFLEtBQUs7O2tCQUNMLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICcuL3ZpZXctY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS12aWV3LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY3VzdG9tQ29tcG9uZW50OiBhbnk7XG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jcmVhdGVDdXN0b21Db21wb25lbnQoKTtcbiAgICAgIHRoaXMuY2FsbE9uQ29tcG9uZW50SW5pdCgpO1xuICAgICAgdGhpcy5wYXRjaEluc3RhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkucmVuZGVyQ29tcG9uZW50KTtcbiAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9uQ29tcG9uZW50SW5pdCgpIHtcbiAgICBjb25zdCBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpO1xuICAgIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uICYmIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXRjaEluc3RhbmNlKCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UsIHRoaXMuZ2V0UGF0Y2goKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGF0Y2goKTogVmlld0NlbGwge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKCksXG4gICAgICByb3dEYXRhOiB0aGlzLmNlbGwuZ2V0Um93KCkuZ2V0RGF0YSgpXG4gICAgfVxuICB9XG59XG4iXX0=