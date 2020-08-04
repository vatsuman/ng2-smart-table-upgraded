import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from '@akveo/ng2-completer';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export declare class CompleterFilterComponent extends DefaultFilter implements OnInit {
    private completerService;
    completerContent: Subject<any>;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    inputTextChanged(event: string): void;
    static ɵfac: i0.ɵɵFactoryDef<CompleterFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CompleterFilterComponent, "completer-filter", never, {}, {}, never, never>;
}
