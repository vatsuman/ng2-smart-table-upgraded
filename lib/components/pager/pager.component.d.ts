import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
export declare class PagerComponent implements OnChanges {
    showing: string;
    to: string;
    of: string;
    entries: string;
    constructor();
    source: DataSource;
    perPageSelect: any[];
    changePage: EventEmitter<any>;
    currentPerPage: any;
    pages: Array<any>;
    page: number;
    count: number;
    perPage: number;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes: any): void;
    shouldShow(): boolean;
    paginate(page: number): boolean;
    next(): boolean;
    prev(): boolean;
    getPage(): number;
    getPages(): Array<any>;
    getLast(): number;
    isPageOutOfBounce(): boolean;
    initPages(): void;
    onChangePerPage(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PagerComponent, "ng2-smart-table-pager", never, { "source": "source"; "perPageSelect": "perPageSelect"; }, { "changePage": "changePage"; }, never, never>;
}
