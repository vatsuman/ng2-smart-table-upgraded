import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from '@akveo/ng2-completer';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import { EditCellDefault } from './cell-edit-mode/edit-cell-default';
import { DefaultEditor } from './cell-editors/default-editor';
import * as i0 from "@angular/core";
var CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
var CellModule = /** @class */ (function () {
    function CellModule() {
    }
    CellModule.ɵmod = i0.ɵɵdefineNgModule({ type: CellModule });
    CellModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                Ng2CompleterModule,
            ]] });
    return CellModule;
}());
export { CellModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CellModule, { declarations: [CellComponent,
        EditCellDefault,
        DefaultEditor,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent], imports: [CommonModule,
        FormsModule,
        Ng2CompleterModule], exports: [CellComponent,
        EditCellDefault,
        DefaultEditor,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CellModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    Ng2CompleterModule,
                ],
                declarations: __spread(CELL_COMPONENTS),
                exports: __spread(CELL_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRTlELElBQU0sZUFBZSxHQUFHO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQixDQUFDO0FBRUY7SUFBQTtLQWEyQjtrREFBZCxVQUFVO3VHQUFWLFVBQVUsa0JBWlo7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGtCQUFrQjthQUNuQjtxQkF4Q0g7Q0FnRDJCLEFBYjNCLElBYTJCO1NBQWQsVUFBVTt3RkFBVixVQUFVLG1CQTVCckIsYUFBYTtRQUNiLGVBQWU7UUFDZixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsaUJBQWlCLGFBS2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0IsYUFuQnBCLGFBQWE7UUFDYixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtrREFnQk4sVUFBVTtjQWJ0QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksV0FDUCxlQUFlLENBQ25CO2dCQUNELE9BQU8sV0FDRixlQUFlLENBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSAnQGFrdmVvL25nMi1jb21wbGV0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9jaGVja2JveC1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvdGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtdmlldy1tb2RlL2N1c3RvbS12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS92aWV3LWNlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwtZGVmYXVsdCc7XHJcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvcic7XHJcblxyXG5jb25zdCBDRUxMX0NPTVBPTkVOVFMgPSBbXHJcbiAgQ2VsbENvbXBvbmVudCxcclxuICBFZGl0Q2VsbERlZmF1bHQsXHJcbiAgRGVmYXVsdEVkaXRvcixcclxuICBDdXN0b21FZGl0Q29tcG9uZW50LFxyXG4gIERlZmF1bHRFZGl0Q29tcG9uZW50LFxyXG4gIEVkaXRDZWxsQ29tcG9uZW50LFxyXG4gIENoZWNrYm94RWRpdG9yQ29tcG9uZW50LFxyXG4gIENvbXBsZXRlckVkaXRvckNvbXBvbmVudCxcclxuICBJbnB1dEVkaXRvckNvbXBvbmVudCxcclxuICBTZWxlY3RFZGl0b3JDb21wb25lbnQsXHJcbiAgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQsXHJcbiAgQ3VzdG9tVmlld0NvbXBvbmVudCxcclxuICBWaWV3Q2VsbENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VsbE1vZHVsZSB7IH1cclxuIl19