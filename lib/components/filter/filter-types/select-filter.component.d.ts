import { OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export declare class SelectFilterComponent extends DefaultFilter implements OnInit {
    inputControl: NgControl;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SelectFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SelectFilterComponent, "select-filter", never, {}, {}, never, never>;
}
