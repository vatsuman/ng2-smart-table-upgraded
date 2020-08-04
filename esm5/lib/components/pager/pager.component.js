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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var page_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", page_r4, " ");
} }
function PagerComponent_nav_1_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_li_14_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); var page_r4 = i0.ɵɵnextContext().$implicit; var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.paginate(page_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r4);
} }
var _c0 = function (a0) { return { active: a0 }; };
function PagerComponent_nav_1_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, PagerComponent_nav_1_li_14_span_1_Template, 4, 1, "span", 14);
    i0.ɵɵtemplate(2, PagerComponent_nav_1_li_14_a_2_Template, 2, 1, "a", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r4 = ctx.$implicit;
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r3.getPage() == page_r4));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.getPage() == page_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.getPage() != page_r4);
} }
var _c1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 4);
    i0.ɵɵelementStart(1, "ul", 5);
    i0.ɵɵelementStart(2, "li", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.getPage() == 1 ? false : ctx_r12.paginate(1); });
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
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.getPage() == 1 ? false : ctx_r14.prev(); });
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
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r13); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.getPage() == ctx_r15.getLast() ? false : ctx_r15.next(); });
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
    i0.ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r13); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.getPage() == ctx_r16.getLast() ? false : ctx_r16.paginate(ctx_r16.getLast()); });
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
    var ctx_r1 = i0.ɵɵnextContext();
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
    var item_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r18);
} }
function PagerComponent_nav_2_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2, " Per Page: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 20);
    i0.ɵɵlistener("change", function PagerComponent_nav_2_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_2_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r20); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.currentPerPage = $event; });
    i0.ɵɵtemplate(4, PagerComponent_nav_2_option_4_Template, 2, 2, "option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.currentPerPage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.perPageSelect);
} }
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
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
    };
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
    return PagerComponent;
}());
export { PagerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-pager',
                styleUrls: ['./pager.component.scss'],
                template: "\n  <div class=\"col-sm-6 pagination-count\" *ngIf=\"shouldShow()\">\n                  <p>Showing <strong>{{(page-1)*currentPerPage+1}}</strong> to \n                  <strong>{{getPage() == getLast() ?count:(page*currentPerPage)}}\n                  </strong> of {{count}} entries</p>\n            </div>\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            }]
    }], null, { source: [{
            type: Input
        }], perPageSelect: [{
            type: Input
        }], changePage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7OztJQVMvRiw4QkFDZ0I7SUFBQSx5QkFBRztJQUFBLHdCQUFRO0lBQUEsOEJBQVE7SUFBQSxZQUE2QjtJQUFBLGlCQUFTO0lBQUMsb0JBQzFEO0lBQUEsOEJBQVE7SUFBQSxZQUNSO0lBQUEsaUJBQVM7SUFBQyxZQUFvQjtJQUFBLGlCQUFJO0lBQ3hDLGlCQUFNOzs7SUFIbUIsZUFBNkI7SUFBN0IsbUVBQTZCO0lBQ3hDLGVBQ1I7SUFEUSx5SEFDUjtJQUFVLGVBQW9CO0lBQXBCLHVEQUFvQjs7O0lBb0J0QyxnQ0FDMEI7SUFBQSxZQUFXO0lBQUEsK0JBQXNCO0lBQUEseUJBQVM7SUFBQSxpQkFBTztJQUFBLGlCQUFPOzs7SUFBeEQsZUFBVztJQUFYLHVDQUFXOzs7O0lBQ3JDLDZCQUNtRDtJQUFuRCx3T0FBd0I7SUFBMkIsWUFBVTtJQUFBLGlCQUFJOzs7SUFBZCxlQUFVO0lBQVYsNkJBQVU7Ozs7SUFML0QsNkJBRUU7SUFBQSw4RUFDMEI7SUFDMUIsd0VBQ21EO0lBQ3JELGlCQUFLOzs7O0lBTEwsaUZBQXVDO0lBRXJDLGVBQXlCO0lBQXpCLGtEQUF5QjtJQUVBLGVBQXlCO0lBQXpCLGtEQUF5Qjs7Ozs7SUFyQnhELDhCQUNFO0lBQUEsNkJBQ0U7SUFBQSw2QkFDRTtJQUFBLDRCQUVFO0lBREYsMktBQXNCLENBQUMsR0FBRyxLQUFLLG9CQUFZLENBQUMsS0FBRTtJQUM1QywrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3ZDLCtCQUFzQjtJQUFBLHFCQUFLO0lBQUEsaUJBQU87SUFD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QUFVO1FBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUV2QixJQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0JBQzFGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Z0ZBdkhVLGNBQWM7dURBQWQsY0FBYztZQTNEekIsK0RBQ2dCO1lBSWQsaUVBQ0U7WUEyQ0YsK0RBQ0U7O1lBbERtQyx1Q0FBb0I7WUFLcEQsZUFBb0I7WUFBcEIsdUNBQW9CO1lBNENwQixlQUFpRDtZQUFqRCx3RUFBaUQ7O3lCQTFEMUQ7Q0E2TEMsQUF4TEQsSUF3TEM7U0F6SFksY0FBYztrREFBZCxjQUFjO2NBL0QxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFFBQVEsRUFBRSwrMUZBMERUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1wYWdlcicsXG4gIHN0eWxlVXJsczogWycuL3BhZ2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBwYWdpbmF0aW9uLWNvdW50XCIgKm5nSWY9XCJzaG91bGRTaG93KClcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlNob3dpbmcgPHN0cm9uZz57eyhwYWdlLTEpKmN1cnJlbnRQZXJQYWdlKzF9fTwvc3Ryb25nPiB0byBcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3tnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID9jb3VudDoocGFnZSpjdXJyZW50UGVyUGFnZSl9fVxuICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+IG9mIHt7Y291bnR9fSBlbnRyaWVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPG5hdiAqbmdJZj1cInNob3VsZFNob3coKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuZzItc21hcnQtcGFnaW5hdGlvbiBwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcGFnaW5hdGUoMSlcIiBhcmlhLWxhYmVsPVwiRmlyc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GaXJzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1wcmV2XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcHJldigpXCIgYXJpYS1sYWJlbD1cIlByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBnZXRQYWdlKCkgPT0gcGFnZX1cIiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBnZXRQYWdlcygpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiXG4gICAgICAgICAgKm5nSWY9XCJnZXRQYWdlKCkgPT0gcGFnZVwiPnt7IHBhZ2UgfX0gPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0ZShwYWdlKVwiICpuZ0lmPVwiZ2V0UGFnZSgpICE9IHBhZ2VcIj57eyBwYWdlIH19PC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1uZXh0XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBuZXh0KClcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICBcbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSBnZXRMYXN0KCl9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogcGFnaW5hdGUoZ2V0TGFzdCgpKVwiIGFyaWEtbGFiZWw9XCJMYXN0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TGFzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIFxuICAgIDxuYXYgKm5nSWY9XCJwZXJQYWdlU2VsZWN0ICYmIHBlclBhZ2VTZWxlY3QubGVuZ3RoID4gMFwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tcGVyLXBhZ2VcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwZXItcGFnZVwiPlxuICAgICAgICBQZXIgUGFnZTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0IChjaGFuZ2UpPVwib25DaGFuZ2VQZXJQYWdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQZXJQYWdlXCIgaWQ9XCJwZXItcGFnZVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBlclBhZ2VTZWxlY3RcIiBbdmFsdWVdPVwiaXRlbVwiPnt7IGl0ZW0gfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbmF2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBwZXJQYWdlU2VsZWN0OiBhbnlbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3VycmVudFBlclBhZ2U6IGFueTtcblxuICBwYWdlczogQXJyYXk8YW55PjtcbiAgcGFnZTogbnVtYmVyO1xuICBjb3VudDogbnVtYmVyID0gMDtcbiAgcGVyUGFnZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZTtcbiAgICAgICAgdGhpcy5wZXJQYWdlID0gdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucGVyUGFnZTtcbiAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMuc291cmNlLmNvdW50KCk7XG4gICAgICAgIGlmICh0aGlzLmlzUGFnZU91dE9mQm91bmNlKCkpIHtcbiAgICAgICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKC0tdGhpcy5wYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvY2Vzc1BhZ2VDaGFuZ2UoZGF0YUNoYW5nZXMpO1xuICAgICAgICB0aGlzLmluaXRQYWdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNoYW5nZSB0aGUgcGFnZSBoZXJlIGRlcGVuZGluZyBvbiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBhZ2FpbnN0IGRhdGEgc291cmNlXG4gICAqIGlmIGEgbmV3IGVsZW1lbnQgd2FzIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIHRhYmxlIC0gdGhlbiBjaGFuZ2UgdGhlIHBhZ2UgdG8gdGhlIGxhc3RcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgdGFibGUgLSB0aGVuIHRvIHRoZSBmaXJzdCBwYWdlXG4gICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAqL1xuICBwcm9jZXNzUGFnZUNoYW5nZShjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdwcmVwZW5kJykge1xuICAgICAgdGhpcy5zb3VyY2Uuc2V0UGFnZSgxKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAnYXBwZW5kJykge1xuICAgICAgdGhpcy5zb3VyY2Uuc2V0UGFnZSh0aGlzLmdldExhc3QoKSk7XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkU2hvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuY291bnQoKSA+IHRoaXMucGVyUGFnZTtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuc291cmNlLnNldFBhZ2UocGFnZSk7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLmNoYW5nZVBhZ2UuZW1pdCh7IHBhZ2UgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSh0aGlzLmdldFBhZ2UoKSArIDEpO1xuICB9XG5cbiAgcHJldigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSh0aGlzLmdldFBhZ2UoKSAtIDEpO1xuICB9XG5cbiAgZ2V0UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBnZXRQYWdlcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlcztcbiAgfVxuXG4gIGdldExhc3QoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuY291bnQgLyB0aGlzLnBlclBhZ2UpO1xuICB9XG5cbiAgaXNQYWdlT3V0T2ZCb3VuY2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UpID49ICh0aGlzLmNvdW50ICsgdGhpcy5wZXJQYWdlKSAmJiB0aGlzLnBhZ2UgPiAxO1xuICB9XG5cbiAgaW5pdFBhZ2VzKCkge1xuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSB0aGlzLmdldExhc3QoKTtcbiAgICBsZXQgc2hvd1BhZ2VzQ291bnQgPSA0O1xuICAgIHNob3dQYWdlc0NvdW50ID0gcGFnZXNDb3VudCA8IHNob3dQYWdlc0NvdW50ID8gcGFnZXNDb3VudCA6IHNob3dQYWdlc0NvdW50O1xuICAgIHRoaXMucGFnZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLnNob3VsZFNob3coKSkge1xuXG4gICAgICBsZXQgbWlkZGxlT25lID0gTWF0aC5jZWlsKHNob3dQYWdlc0NvdW50IC8gMik7XG4gICAgICBtaWRkbGVPbmUgPSB0aGlzLnBhZ2UgPj0gbWlkZGxlT25lID8gdGhpcy5wYWdlIDogbWlkZGxlT25lO1xuXG4gICAgICBsZXQgbGFzdE9uZSA9IG1pZGRsZU9uZSArIE1hdGguZmxvb3Ioc2hvd1BhZ2VzQ291bnQgLyAyKTtcbiAgICAgIGxhc3RPbmUgPSBsYXN0T25lID49IHBhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogbGFzdE9uZTtcblxuICAgICAgY29uc3QgZmlyc3RPbmUgPSBsYXN0T25lIC0gc2hvd1BhZ2VzQ291bnQgKyAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RPbmU7IGkgPD0gbGFzdE9uZTsgaSsrKSB7XG4gICAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVBlclBhZ2UoZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQZXJQYWdlKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50UGVyUGFnZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5jdXJyZW50UGVyUGFnZS50b0xvd2VyQ2FzZSgpID09PSAnYWxsJykge1xuICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSB0aGlzLmN1cnJlbnRQZXJQYWdlICogMTtcbiAgICAgICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0UGFnZXMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19