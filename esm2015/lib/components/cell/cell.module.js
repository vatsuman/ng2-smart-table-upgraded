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
const CELL_COMPONENTS = [
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
export class CellModule {
}
CellModule.ɵmod = i0.ɵɵdefineNgModule({ type: CellModule });
CellModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            Ng2CompleterModule,
        ]] });
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
                declarations: [
                    ...CELL_COMPONENTS,
                ],
                exports: [
                    ...CELL_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFOUQsTUFBTSxlQUFlLEdBQUc7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFlRixNQUFNLE9BQU8sVUFBVTs7OENBQVYsVUFBVTttR0FBVixVQUFVLGtCQVpaO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxrQkFBa0I7U0FDbkI7d0ZBUVUsVUFBVSxtQkE1QnJCLGFBQWE7UUFDYixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQixhQUtmLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCLGFBbkJwQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixpQkFBaUI7a0RBZ0JOLFVBQVU7Y0FidEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxlQUFlO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxlQUFlO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nMkNvbXBsZXRlck1vZHVsZSB9IGZyb20gJ0Bha3Zlby9uZzItY29tcGxldGVyJztcclxuXHJcbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvY3VzdG9tLWVkaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2RlZmF1bHQtZWRpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBsZXRlckVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2NvbXBsZXRlci1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9pbnB1dC1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvc2VsZWN0LWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRDZWxsRGVmYXVsdCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLWRlZmF1bHQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuY29uc3QgQ0VMTF9DT01QT05FTlRTID0gW1xyXG4gIENlbGxDb21wb25lbnQsXHJcbiAgRWRpdENlbGxEZWZhdWx0LFxyXG4gIERlZmF1bHRFZGl0b3IsXHJcbiAgQ3VzdG9tRWRpdENvbXBvbmVudCxcclxuICBEZWZhdWx0RWRpdENvbXBvbmVudCxcclxuICBFZGl0Q2VsbENvbXBvbmVudCxcclxuICBDaGVja2JveEVkaXRvckNvbXBvbmVudCxcclxuICBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQsXHJcbiAgSW5wdXRFZGl0b3JDb21wb25lbnQsXHJcbiAgU2VsZWN0RWRpdG9yQ29tcG9uZW50LFxyXG4gIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50LFxyXG4gIEN1c3RvbVZpZXdDb21wb25lbnQsXHJcbiAgVmlld0NlbGxDb21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTmcyQ29tcGxldGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5DRUxMX0NPTVBPTkVOVFMsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5DRUxMX0NPTVBPTkVOVFMsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENlbGxNb2R1bGUgeyB9XHJcbiJdfQ==