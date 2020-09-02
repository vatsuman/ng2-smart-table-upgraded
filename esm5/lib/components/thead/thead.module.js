import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
import * as i0 from "@angular/core";
var THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule.ɵmod = i0.ɵɵdefineNgModule({ type: THeadModule });
    THeadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                FilterModule,
                CellModule,
            ]] });
    return THeadModule;
}());
export { THeadModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(THeadModule, { declarations: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent], imports: [CommonModule,
        FormsModule,
        FilterModule,
        CellModule], exports: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(THeadModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: __spread(THEAD_COMPONENTS),
                exports: __spread(THEAD_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRTVFLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsMkJBQTJCO0NBQzVCLENBQUM7QUFFRjtJQUFBO0tBYzRCO21EQUFmLFdBQVc7eUdBQVgsV0FBVyxrQkFiYjtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixVQUFVO2FBQ1g7c0JBckNIO0NBNkM0QixBQWQ1QixJQWM0QjtTQUFmLFdBQVc7d0ZBQVgsV0FBVyxtQkExQnRCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVLGFBakJaLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtrREFpQmhCLFdBQVc7Y0FkdkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixVQUFVO2lCQUNYO2dCQUNELFlBQVksV0FDUCxnQkFBZ0IsQ0FDcEI7Z0JBQ0QsT0FBTyxXQUNGLGdCQUFnQixDQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBGaWx0ZXJNb2R1bGUgfSBmcm9tICcuLi9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vdGhlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWN0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25zVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FjdGlvbnMtdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbHVtblRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jb2x1bW4tdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtZm9ybS1yb3cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgVEhFQURfQ09NUE9ORU5UUyA9IFtcclxuICBBY3Rpb25zQ29tcG9uZW50LFxyXG4gIEFjdGlvbnNUaXRsZUNvbXBvbmVudCxcclxuICBBZGRCdXR0b25Db21wb25lbnQsXHJcbiAgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQsXHJcbiAgQ29sdW1uVGl0bGVDb21wb25lbnQsXHJcbiAgVGl0bGVDb21wb25lbnQsXHJcbiAgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50LFxyXG4gIFRoZWFkRm9ybVJvd0NvbXBvbmVudCxcclxuICBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCxcclxuICBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgRmlsdGVyTW9kdWxlLFxyXG4gICAgQ2VsbE1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLi4uVEhFQURfQ09NUE9ORU5UUyxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRIZWFkTW9kdWxlIHsgfVxyXG4iXX0=