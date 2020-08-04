import { EventEmitter } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
export declare class TbodyCustomComponent {
    grid: Grid;
    row: Row;
    source: any;
    custom: EventEmitter<any>;
    onCustom(action: any, event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<TbodyCustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TbodyCustomComponent, "ng2-st-tbody-custom", never, { "grid": "grid"; "row": "row"; "source": "source"; }, { "custom": "custom"; }, never, never>;
}
