import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from '@akveo/ng2-completer';
import { FilterComponent } from './filter.component';
import { DefaultFilterComponent } from "./default-filter.component";
import { CustomFilterComponent } from "./custom-filter.component";
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
import { DefaultFilter } from './filter-types/default-filter';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
var FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilterModule });
    FilterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                Ng2CompleterModule,
            ]] });
    return FilterModule;
}());
export { FilterModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterDefault,
        DefaultFilter,
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2CompleterModule], exports: [FilterDefault,
        DefaultFilter,
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: __spread(FILTER_COMPONENTS),
                exports: __spread(FILTER_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRWpELElBQU0saUJBQWlCLEdBQUc7SUFDeEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGO0lBQUE7S0FjNkI7b0RBQWhCLFlBQVk7MkdBQVosWUFBWSxrQkFiZDtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixrQkFBa0I7YUFDbkI7dUJBakNIO0NBeUM2QixBQWQ3QixJQWM2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksbUJBekJ2QixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQixhQUtuQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0IsYUFoQnBCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO2tEQWlCVixZQUFZO2NBZHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLFdBQ1AsaUJBQWlCLENBQ3JCO2dCQUNELE9BQU8sV0FDRixpQkFBaUIsQ0FDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICdAYWt2ZW8vbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21GaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9jaGVja2JveC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBsZXRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvaW5wdXQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvZGVmYXVsdC1maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVyRGVmYXVsdCB9IGZyb20gJy4vZmlsdGVyLWRlZmF1bHQnO1xuXG5jb25zdCBGSUxURVJfQ09NUE9ORU5UUyA9IFtcbiAgRmlsdGVyRGVmYXVsdCxcbiAgRGVmYXVsdEZpbHRlcixcbiAgRmlsdGVyQ29tcG9uZW50LFxuICBEZWZhdWx0RmlsdGVyQ29tcG9uZW50LFxuICBDdXN0b21GaWx0ZXJDb21wb25lbnQsXG4gIENoZWNrYm94RmlsdGVyQ29tcG9uZW50LFxuICBDb21wbGV0ZXJGaWx0ZXJDb21wb25lbnQsXG4gIElucHV0RmlsdGVyQ29tcG9uZW50LFxuICBTZWxlY3RGaWx0ZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmcyQ29tcGxldGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5GSUxURVJfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkZJTFRFUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNb2R1bGUgeyB9XG4iXX0=