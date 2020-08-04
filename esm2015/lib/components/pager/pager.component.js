import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Showing ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " to ");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((ctx_r0.page - 1) * ctx_r0.currentPerPage + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.getPage() == ctx_r0.getLast() ? ctx_r0.count : ctx_r0.page * ctx_r0.currentPerPage, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" of ", ctx_r0.count, " entries");
} }
function PagerComponent_nav_1_li_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3, "(current)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", page_r4, " ");
} }
function PagerComponent_nav_1_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_li_14_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); const page_r4 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.paginate(page_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r4);
} }
const _c0 = function (a0) { return { active: a0 }; };
function PagerComponent_nav_1_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, PagerComponent_nav_1_li_14_span_1_Template, 4, 1, "span", 14);
    i0.ɵɵtemplate(2, PagerComponent_nav_1_li_14_a_2_Template, 2, 1, "a", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r3.getPage() == page_r4));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.getPage() == page_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.getPage() != page_r4);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 4);
    i0.ɵɵelementStart(1, "ul", 5);
    i0.ɵɵelementStart(2, "li", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.getPage() == 1 ? false : ctx_r12.paginate(1); });
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5, "\u00AB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 9);
    i0.ɵɵtext(7, "First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li", 6);
    i0.ɵɵelementStart(9, "a", 10);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.getPage() == 1 ? false : ctx_r14.prev(); });
    i0.ɵɵelementStart(10, "span", 8);
    i0.ɵɵtext(11, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 9);
    i0.ɵɵtext(13, "Prev");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, PagerComponent_nav_1_li_14_Template, 3, 5, "li", 11);
    i0.ɵɵelementStart(15, "li", 6);
    i0.ɵɵelementStart(16, "a", 12);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.getPage() == ctx_r15.getLast() ? false : ctx_r15.next(); });
    i0.ɵɵelementStart(17, "span", 8);
    i0.ɵɵtext(18, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 9);
    i0.ɵɵtext(20, "Next");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "li", 6);
    i0.ɵɵelementStart(22, "a", 13);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.getPage() == ctx_r16.getLast() ? false : ctx_r16.paginate(ctx_r16.getLast()); });
    i0.ɵɵelementStart(23, "span", 8);
    i0.ɵɵtext(24, "\u00BB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 9);
    i0.ɵɵtext(26, "Last");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r1.getPage() == 1));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r1.getPage() == 1));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.getPages());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx_r1.getPage() == ctx_r1.getLast()));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r1.getPage() == ctx_r1.getLast()));
} }
function PagerComponent_nav_2_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r18);
} }
function PagerComponent_nav_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2, " Per Page: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 20);
    i0.ɵɵlistener("change", function PagerComponent_nav_2_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_2_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.currentPerPage = $event; });
    i0.ɵɵtemplate(4, PagerComponent_nav_2_option_4_Template, 2, 2, "option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.currentPerPage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.perPageSelect);
} }
export class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
PagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [["class", "col-sm-6 pagination-count", 4, "ngIf"], ["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "col-sm-6", "pagination-count"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PagerComponent_div_0_Template, 9, 3, "div", 0);
        i0.ɵɵtemplate(1, PagerComponent_nav_1_Template, 27, 13, "nav", 1);
        i0.ɵɵtemplate(2, PagerComponent_nav_2_Template, 5, 2, "nav", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldShow());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.shouldShow());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-pager',
                styleUrls: ['./pager.component.scss'],
                template: `
  <div class="col-sm-6 pagination-count" *ngIf="shouldShow()">
                  <p>Showing <strong>{{(page-1)*currentPerPage+1}}</strong> to 
                  <strong>{{getPage() == getLast() ?count:(page*currentPerPage)}}
                  </strong> of {{count}} entries</p>
            </div>
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
            }]
    }], null, { source: [{
            type: Input
        }], perPageSelect: [{
            type: Input
        }], changePage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7OztJQVMvRiw4QkFDZ0I7SUFBQSx5QkFBRztJQUFBLHdCQUFRO0lBQUEsOEJBQVE7SUFBQSxZQUE2QjtJQUFBLGlCQUFTO0lBQUMsb0JBQzFEO0lBQUEsOEJBQVE7SUFBQSxZQUNSO0lBQUEsaUJBQVM7SUFBQyxZQUFvQjtJQUFBLGlCQUFJO0lBQ3hDLGlCQUFNOzs7SUFIbUIsZUFBNkI7SUFBN0IsbUVBQTZCO0lBQ3hDLGVBQ1I7SUFEUSx5SEFDUjtJQUFVLGVBQW9CO0lBQXBCLHVEQUFvQjs7O0lBb0J0QyxnQ0FDMEI7SUFBQSxZQUFXO0lBQUEsK0JBQXNCO0lBQUEseUJBQVM7SUFBQSxpQkFBTztJQUFBLGlCQUFPOzs7SUFBeEQsZUFBVztJQUFYLHVDQUFXOzs7O0lBQ3JDLDZCQUNtRDtJQUFuRCw0T0FBd0I7SUFBMkIsWUFBVTtJQUFBLGlCQUFJOzs7SUFBZCxlQUFVO0lBQVYsNkJBQVU7Ozs7SUFML0QsNkJBRUU7SUFBQSw4RUFDMEI7SUFDMUIsd0VBQ21EO0lBQ3JELGlCQUFLOzs7O0lBTEwsaUZBQXVDO0lBRXJDLGVBQXlCO0lBQXpCLGtEQUF5QjtJQUVBLGVBQXlCO0lBQXpCLGtEQUF5Qjs7Ozs7SUFyQnhELDhCQUNFO0lBQUEsNkJBQ0U7SUFBQSw2QkFDRTtJQUFBLDRCQUVFO0lBREYsNktBQXNCLENBQUMsR0FBRyxLQUFLLG9CQUFZLENBQUMsS0FBRTtJQUM1QywrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3ZDLCtCQUFzQjtJQUFBLHFCQUFLO0lBQUEsaUJBQU87SUFD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S0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0JBQzFGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7OzRFQXZIVSxjQUFjO21EQUFkLGNBQWM7UUEzRHpCLCtEQUNnQjtRQUlkLGlFQUNFO1FBMkNGLCtEQUNFOztRQWxEbUMsdUNBQW9CO1FBS3BELGVBQW9CO1FBQXBCLHVDQUFvQjtRQTRDcEIsZUFBaUQ7UUFBakQsd0VBQWlEOztrREFVN0MsY0FBYztjQS9EMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwRFQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLXBhZ2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImNvbC1zbS02IHBhZ2luYXRpb24tY291bnRcIiAqbmdJZj1cInNob3VsZFNob3coKVwiPlxuICAgICAgICAgICAgICAgICAgPHA+U2hvd2luZyA8c3Ryb25nPnt7KHBhZ2UtMSkqY3VycmVudFBlclBhZ2UrMX19PC9zdHJvbmc+IHRvIFxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e2dldFBhZ2UoKSA9PSBnZXRMYXN0KCkgP2NvdW50OihwYWdlKmN1cnJlbnRQZXJQYWdlKX19XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz4gb2Yge3tjb3VudH19IGVudHJpZXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8bmF2ICpuZ0lmPVwic2hvdWxkU2hvdygpXCIgY2xhc3M9XCJuZzItc21hcnQtcGFnaW5hdGlvbi1uYXZcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uIHBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSAxfVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXG4gICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSAxID8gZmFsc2UgOiBwYWdpbmF0ZSgxKVwiIGFyaWEtbGFiZWw9XCJGaXJzdFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkZpcnN0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSAxfVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmsgcGFnZS1saW5rLXByZXZcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSAxID8gZmFsc2UgOiBwcmV2KClcIiBhcmlhLWxhYmVsPVwiUHJldlwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jmx0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXY8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInthY3RpdmU6IGdldFBhZ2UoKSA9PSBwYWdlfVwiICpuZ0Zvcj1cImxldCBwYWdlIG9mIGdldFBhZ2VzKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCJcbiAgICAgICAgICAqbmdJZj1cImdldFBhZ2UoKSA9PSBwYWdlXCI+e3sgcGFnZSB9fSA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXG4gICAgICAgICAgKGNsaWNrKT1cInBhZ2luYXRlKHBhZ2UpXCIgKm5nSWY9XCJnZXRQYWdlKCkgIT0gcGFnZVwiPnt7IHBhZ2UgfX08L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpfVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmsgcGFnZS1saW5rLW5leHRcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSBnZXRMYXN0KCkgPyBmYWxzZSA6IG5leHQoKVwiIGFyaWEtbGFiZWw9XCJOZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIFxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBwYWdpbmF0ZShnZXRMYXN0KCkpXCIgYXJpYS1sYWJlbD1cIkxhc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5MYXN0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICAgXG4gICAgPG5hdiAqbmdJZj1cInBlclBhZ2VTZWxlY3QgJiYgcGVyUGFnZVNlbGVjdC5sZW5ndGggPiAwXCIgY2xhc3M9XCJuZzItc21hcnQtcGFnaW5hdGlvbi1wZXItcGFnZVwiPlxuICAgICAgPGxhYmVsIGZvcj1cInBlci1wYWdlXCI+XG4gICAgICAgIFBlciBQYWdlOlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJvbkNoYW5nZVBlclBhZ2UoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY3VycmVudFBlclBhZ2VcIiBpZD1cInBlci1wYWdlXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGVyUGFnZVNlbGVjdFwiIFt2YWx1ZV09XCJpdGVtXCI+e3sgaXRlbSB9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9uYXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIHBlclBhZ2VTZWxlY3Q6IGFueVtdID0gW107XG5cbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjdXJyZW50UGVyUGFnZTogYW55O1xuXG4gIHBhZ2VzOiBBcnJheTxhbnk+O1xuICBwYWdlOiBudW1iZXI7XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBwZXJQYWdlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlO1xuICAgICAgICB0aGlzLnBlclBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zb3VyY2UuY291bnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYWdlT3V0T2ZCb3VuY2UoKSkge1xuICAgICAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoLS10aGlzLnBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUGFnZUNoYW5nZShkYXRhQ2hhbmdlcyk7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2UgY2hhbmdlIHRoZSBwYWdlIGhlcmUgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24gcGVyZm9ybWVkIGFnYWluc3QgZGF0YSBzb3VyY2VcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGUgLSB0aGVuIGNoYW5nZSB0aGUgcGFnZSB0byB0aGUgbGFzdFxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0YWJsZSAtIHRoZW4gdG8gdGhlIGZpcnN0IHBhZ2VcbiAgICogQHBhcmFtIGNoYW5nZXNcbiAgICovXG4gIHByb2Nlc3NQYWdlQ2hhbmdlKGNoYW5nZXM6IGFueSkge1xuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKDEpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHRoaXMuZ2V0TGFzdCgpKTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRTaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jb3VudCgpID4gdGhpcy5wZXJQYWdlO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnZShwYWdlKTtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHsgcGFnZSB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpICsgMSk7XG4gIH1cblxuICBwcmV2KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XG4gIH1cblxuICBnZXRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGdldFBhZ2VzKCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VzO1xuICB9XG5cbiAgZ2V0TGFzdCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5jb3VudCAvIHRoaXMucGVyUGFnZSk7XG4gIH1cblxuICBpc1BhZ2VPdXRPZkJvdW5jZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSkgPj0gKHRoaXMuY291bnQgKyB0aGlzLnBlclBhZ2UpICYmIHRoaXMucGFnZSA+IDE7XG4gIH1cblxuICBpbml0UGFnZXMoKSB7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IHRoaXMuZ2V0TGFzdCgpO1xuICAgIGxldCBzaG93UGFnZXNDb3VudCA9IDQ7XG4gICAgc2hvd1BhZ2VzQ291bnQgPSBwYWdlc0NvdW50IDwgc2hvd1BhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogc2hvd1BhZ2VzQ291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdygpKSB7XG5cbiAgICAgIGxldCBtaWRkbGVPbmUgPSBNYXRoLmNlaWwoc2hvd1BhZ2VzQ291bnQgLyAyKTtcbiAgICAgIG1pZGRsZU9uZSA9IHRoaXMucGFnZSA+PSBtaWRkbGVPbmUgPyB0aGlzLnBhZ2UgOiBtaWRkbGVPbmU7XG5cbiAgICAgIGxldCBsYXN0T25lID0gbWlkZGxlT25lICsgTWF0aC5mbG9vcihzaG93UGFnZXNDb3VudCAvIDIpO1xuICAgICAgbGFzdE9uZSA9IGxhc3RPbmUgPj0gcGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBsYXN0T25lO1xuXG4gICAgICBjb25zdCBmaXJzdE9uZSA9IGxhc3RPbmUgLSBzaG93UGFnZXNDb3VudCArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdE9uZTsgaSA8PSBsYXN0T25lOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUGVyUGFnZShldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBlclBhZ2UpIHtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRQZXJQYWdlID09PSAnc3RyaW5nJyAmJiB0aGlzLmN1cnJlbnRQZXJQYWdlLnRvTG93ZXJDYXNlKCkgPT09ICdhbGwnKSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZSA9IHRoaXMuY3VycmVudFBlclBhZ2UgKiAxO1xuICAgICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRQYWdlcygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=