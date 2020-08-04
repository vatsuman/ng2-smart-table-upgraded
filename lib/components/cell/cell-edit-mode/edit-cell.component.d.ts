import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export declare class EditCellComponent {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    getEditorType(): string;
    static ɵfac: i0.ɵɵFactoryDef<EditCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EditCellComponent, "table-cell-edit-mode", never, { "cell": "cell"; "inputClass": "inputClass"; }, { "edited": "edited"; }, never, never>;
}
