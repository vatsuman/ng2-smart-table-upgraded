import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
import * as i0 from "@angular/core";
const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
export class TBodyModule {
}
TBodyModule.ɵmod = i0.ɵɵdefineNgModule({ type: TBodyModule });
TBodyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            CellModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TBodyModule, { declarations: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent], imports: [CommonModule,
        FormsModule,
        CellModule], exports: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TBodyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    CellModule,
                ],
                declarations: [
                    ...TBODY_COMPONENTS,
                ],
                exports: [
                    ...TBODY_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzVCLENBQUM7QUFlRixNQUFNLE9BQU8sV0FBVzs7K0NBQVgsV0FBVztxR0FBWCxXQUFXLGtCQVpiO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1NBQ1g7d0ZBUVUsV0FBVyxtQkFuQnRCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVUsYUFWWiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQiwyQkFBMkI7a0RBZ0JoQixXQUFXO2NBYnZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsZ0JBQWdCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxnQkFBZ0I7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB9IGZyb20gJy4vdGJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJvZHlFZGl0RGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9lZGl0LWRlbGV0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYm9keUN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY3VzdG9tLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBUQk9EWV9DT01QT05FTlRTID0gW1xyXG4gIFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50LFxyXG4gIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCxcclxuICBUYm9keUN1c3RvbUNvbXBvbmVudCxcclxuICBOZzJTbWFydFRhYmxlVGJvZHlDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBDZWxsTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVEJvZHlNb2R1bGUgeyB9XHJcbiJdfQ==