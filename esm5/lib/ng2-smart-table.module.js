import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import * as i0 from "@angular/core";
var Ng2SmartTableModule = /** @class */ (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: Ng2SmartTableModule });
    Ng2SmartTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CellModule,
                FilterModule,
                PagerModule,
                TBodyModule,
                THeadModule,
            ]] });
    return Ng2SmartTableModule;
}());
export { Ng2SmartTableModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule], exports: [Ng2SmartTableComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUVyRTtJQUFBO0tBbUJDOzJEQURZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQWpCckI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2FBQ1o7OEJBdEJIO0NBK0JDLEFBbkJELElBbUJDO1NBRFksbUJBQW1CO3dGQUFuQixtQkFBbUIsbUJBTjVCLHNCQUFzQixhQVZ0QixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVyxhQU1YLHNCQUFzQjtrREFHYixtQkFBbUI7Y0FsQi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2VsbC9jZWxsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBhZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRCb2R5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3Rib2R5Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFRIZWFkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ2VsbE1vZHVsZSxcclxuICAgIEZpbHRlck1vZHVsZSxcclxuICAgIFBhZ2VyTW9kdWxlLFxyXG4gICAgVEJvZHlNb2R1bGUsXHJcbiAgICBUSGVhZE1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmcyU21hcnRUYWJsZUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVNb2R1bGUge1xyXG59XHJcbiJdfQ==