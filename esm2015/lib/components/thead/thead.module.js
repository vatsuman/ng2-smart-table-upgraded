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
const THEAD_COMPONENTS = [
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
export class THeadModule {
}
THeadModule.ɵmod = i0.ɵɵdefineNgModule({ type: THeadModule });
THeadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            FilterModule,
            CellModule,
        ]] });
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
                declarations: [
                    ...THEAD_COMPONENTS,
                ],
                exports: [
                    ...THEAD_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFNUUsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQWdCRixNQUFNLE9BQU8sV0FBVzs7K0NBQVgsV0FBVztxR0FBWCxXQUFXLGtCQWJiO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxZQUFZO1lBQ1osVUFBVTtTQUNYO3dGQVFVLFdBQVcsbUJBMUJ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkIsYUFLekIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVSxhQWpCWixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkI7a0RBaUJoQixXQUFXO2NBZHZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDZWxsTW9kdWxlIH0gZnJvbSAnLi4vY2VsbC9jZWxsLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgfSBmcm9tICcuL3RoZWFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FjdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uc1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2x1bW5UaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY29sdW1uLXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGhlYWRGb3JtUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZvcm0tcm93LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFRIRUFEX0NPTVBPTkVOVFMgPSBbXHJcbiAgQWN0aW9uc0NvbXBvbmVudCxcclxuICBBY3Rpb25zVGl0bGVDb21wb25lbnQsXHJcbiAgQWRkQnV0dG9uQ29tcG9uZW50LFxyXG4gIENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50LFxyXG4gIENvbHVtblRpdGxlQ29tcG9uZW50LFxyXG4gIFRpdGxlQ29tcG9uZW50LFxyXG4gIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCxcclxuICBUaGVhZEZvcm1Sb3dDb21wb25lbnQsXHJcbiAgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQsXHJcbiAgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEZpbHRlck1vZHVsZSxcclxuICAgIENlbGxNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUSGVhZE1vZHVsZSB7IH1cclxuIl19