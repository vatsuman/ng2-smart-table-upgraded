import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
import * as i0 from "@angular/core";
var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule.ɵmod = i0.ɵɵdefineNgModule({ type: TBodyModule });
    TBodyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                CellModule,
            ]] });
    return TBodyModule;
}());
export { TBodyModule };
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
                declarations: __spread(TBODY_COMPONENTS),
                exports: __spread(TBODY_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUY7SUFBQTtLQWE0QjttREFBZixXQUFXO3lHQUFYLFdBQVcsa0JBWmI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLFVBQVU7YUFDWDtzQkF2Qkg7Q0ErQjRCLEFBYjVCLElBYTRCO1NBQWYsV0FBVzt3RkFBWCxXQUFXLG1CQW5CdEIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsMkJBQTJCLGFBS3pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVSxhQVZaLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtrREFnQmhCLFdBQVc7Y0FidkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLFdBQ1AsZ0JBQWdCLENBQ3BCO2dCQUNELE9BQU8sV0FDRixnQkFBZ0IsQ0FDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4uL2NlbGwvY2VsbC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi90Ym9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYm9keUNyZWF0ZUNhbmNlbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY3JlYXRlLWNhbmNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYm9keUVkaXREZWxldGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2VkaXQtZGVsZXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRib2R5Q3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jdXN0b20uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFRCT0RZX0NPTVBPTkVOVFMgPSBbXHJcbiAgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQsXHJcbiAgVGJvZHlFZGl0RGVsZXRlQ29tcG9uZW50LFxyXG4gIFRib2R5Q3VzdG9tQ29tcG9uZW50LFxyXG4gIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENlbGxNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLlRCT0RZX0NPTVBPTkVOVFMsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUQm9keU1vZHVsZSB7IH1cclxuIl19