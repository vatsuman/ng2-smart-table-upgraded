import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\n", ctx_r0.showing, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r0.page - 1) * ctx_r0.perPage + 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.to, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page * ctx_r0.perPage > ctx_r0.count ? ctx_r0.count : ctx_r0.page * ctx_r0.perPage);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate3(" ", ctx_r0.of, " ", ctx_r0.count, " ", ctx_r0.entries, "");
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
        this.showing = "Showing";
        this.to = "to";
        this.of = "of";
        this.entries = "entries";
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
        var langContent = localStorage.getItem("getContent");
        if (langContent) {
            var lngobj = JSON.parse(langContent);
            if ("common" in lngobj) {
                var common = lngobj.common;
                if (("paginationContentKey1" in common) &&
                    ("paginationContentKey2" in common) &&
                    ("paginationContentKey3" in common) &&
                    ("paginationContentKey5" in common)) {
                    this.showing = common.paginationContentKey1;
                    this.to = common.paginationContentKey2;
                    this.of = common.paginationContentKey3;
                    this.entries = common.paginationContentKey5;
                }
            }
        }
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
            i0.ɵɵtemplate(0, PagerComponent_div_0_Template, 9, 7, "div", 0);
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
                template: "\n<div *ngIf=\"shouldShow()\" class=\"col-sm-6 pagination-count\">\n<p>\n{{showing}} <strong>{{(page-1)*perPage+1}}</strong> {{to}} \n<strong>{{(page*perPage) > count?count:(page*perPage)}}</strong> {{of}} {{count}} {{entries}}</p>\n</div>\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            }]
    }], function () { return []; }, { source: [{
            type: Input
        }], perPageSelect: [{
            type: Input
        }], changePage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7OztJQVNqRyw4QkFDQTtJQUFBLHlCQUNBO0lBQUEsWUFBWTtJQUFBLDhCQUFRO0lBQUEsWUFBc0I7SUFBQSxpQkFBUztJQUFDLFlBQ3BEO0lBQUEsOEJBQVE7SUFBQSxZQUErQztJQUFBLGlCQUFTO0lBQUMsWUFBNEI7SUFBQSxpQkFBSTtJQUNqRyxpQkFBTTs7O0lBRk4sZUFBWTtJQUFaLGdEQUFZO0lBQVEsZUFBc0I7SUFBdEIsNERBQXNCO0lBQVUsZUFDcEQ7SUFEb0QsMENBQ3BEO0lBQVEsZUFBK0M7SUFBL0MsK0dBQStDO0lBQVUsZUFBNEI7SUFBNUIsaUZBQTRCOzs7SUFvQm5GLGdDQUMwQjtJQUFBLFlBQVc7SUFBQSwrQkFBc0I7SUFBQSx5QkFBUztJQUFBLGlCQUFPO0lBQUEsaUJBQU87OztJQUF4RCxlQUFXO0lBQVgsdUNBQVc7Ozs7SUFDckMsNkJBQ21EO0lBQW5ELHdPQUF3QjtJQUEyQixZQUFVO0lBQUEsaUJBQUk7OztJQUFkLGVBQVU7SUFBViw2QkFBVTs7OztJQUwvRCw2QkFFRTtJQUFBLDhFQUMwQjtJQUMxQix3RUFDbUQ7SUFDckQsaUJBQUs7Ozs7SUFMTCxpRkFBdUM7SUFFckMsZUFBeUI7SUFBekIsa0RBQXlCO0lBRUEsZUFBeUI7SUFBekIsa0RBQXlCOzs7OztJQXJCeEQsOEJBQ0U7SUFBQSw2QkFDRTtJQUFBLDZCQUNFO0lBQUEsNEJBRUU7SUFERiwyS0FBc0IsQ0FBQyxHQUFHLEtBQUssb0JBQVksQ0FBQyxLQUFFO0lBQzVDLCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEs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QUM7YUFDeEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO2dGQTdJVSxjQUFjO3VEQUFkLGNBQWM7WUEzRDNCLCtEQUNBO1lBSUksaUVBQ0U7WUEyQ0YsK0RBQ0U7O1lBbERELHVDQUFvQjtZQUtoQixlQUFvQjtZQUFwQix1Q0FBb0I7WUE0Q3BCLGVBQWlEO1lBQWpELHdFQUFpRDs7eUJBMUQxRDtDQW1OQyxBQTlNRCxJQThNQztTQS9JWSxjQUFjO2tEQUFkLGNBQWM7Y0EvRDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsUUFBUSxFQUFFLDR4RkEwRFQ7YUFDRjs7a0JBeUJFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1wYWdlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG48ZGl2ICpuZ0lmPVwic2hvdWxkU2hvdygpXCIgY2xhc3M9XCJjb2wtc20tNiBwYWdpbmF0aW9uLWNvdW50XCI+XHJcbjxwPlxyXG57e3Nob3dpbmd9fSA8c3Ryb25nPnt7KHBhZ2UtMSkqcGVyUGFnZSsxfX08L3N0cm9uZz4ge3t0b319IFxyXG48c3Ryb25nPnt7KHBhZ2UqcGVyUGFnZSkgPiBjb3VudD9jb3VudDoocGFnZSpwZXJQYWdlKX19PC9zdHJvbmc+IHt7b2Z9fSB7e2NvdW50fX0ge3tlbnRyaWVzfX08L3A+XHJcbjwvZGl2PlxyXG4gICAgPG5hdiAqbmdJZj1cInNob3VsZFNob3coKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uIHBhZ2luYXRpb25cIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSAxID8gZmFsc2UgOiBwYWdpbmF0ZSgxKVwiIGFyaWEtbGFiZWw9XCJGaXJzdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GaXJzdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmsgcGFnZS1saW5rLXByZXZcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHByZXYoKVwiIGFyaWEtbGFiZWw9XCJQcmV2XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsdDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXY8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogZ2V0UGFnZSgpID09IHBhZ2V9XCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgZ2V0UGFnZXMoKVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiXHJcbiAgICAgICAgICAqbmdJZj1cImdldFBhZ2UoKSA9PSBwYWdlXCI+e3sgcGFnZSB9fSA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0ZShwYWdlKVwiICpuZ0lmPVwiZ2V0UGFnZSgpICE9IHBhZ2VcIj57eyBwYWdlIH19PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpfVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstbmV4dFwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBuZXh0KClcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mZ3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogcGFnaW5hdGUoZ2V0TGFzdCgpKVwiIGFyaWEtbGFiZWw9XCJMYXN0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgXHJcbiAgICA8bmF2ICpuZ0lmPVwicGVyUGFnZVNlbGVjdCAmJiBwZXJQYWdlU2VsZWN0Lmxlbmd0aCA+IDBcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLXBlci1wYWdlXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwZXItcGFnZVwiPlxyXG4gICAgICAgIFBlciBQYWdlOlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8c2VsZWN0IChjaGFuZ2UpPVwib25DaGFuZ2VQZXJQYWdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQZXJQYWdlXCIgaWQ9XCJwZXItcGFnZVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGVyUGFnZVNlbGVjdFwiIFt2YWx1ZV09XCJpdGVtXCI+e3sgaXRlbSB9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvbmF2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbnB1YmxpYyBzaG93aW5nPVwiU2hvd2luZ1wiO1xyXG5wdWJsaWMgdG8gPSBcInRvXCI7XHJcbnB1YmxpYyBvZiA9IFwib2ZcIjtcclxucHVibGljIGVudHJpZXMgPSBcImVudHJpZXNcIjtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgbGV0IGxhbmdDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZXRDb250ZW50XCIpO1xyXG4gICAgaWYobGFuZ0NvbnRlbnQpe1xyXG4gICAgICBjb25zdCBsbmdvYmogPSBKU09OLnBhcnNlKGxhbmdDb250ZW50KTtcclxuICAgICAgaWYoXCJjb21tb25cIiBpbiBsbmdvYmope1xyXG4gICAgICAgIGNvbnN0IGNvbW1vbiA9IGxuZ29iai5jb21tb247XHJcbiAgICAgICAgaWYoKFwicGFnaW5hdGlvbkNvbnRlbnRLZXkxXCIgaW4gY29tbW9uKSAmJlxyXG4gICAgICAgIChcInBhZ2luYXRpb25Db250ZW50S2V5MlwiIGluIGNvbW1vbikgJiZcclxuICAgICAgICAoXCJwYWdpbmF0aW9uQ29udGVudEtleTNcIiBpbiBjb21tb24pICYmXHJcbiAgICAgICAgKFwicGFnaW5hdGlvbkNvbnRlbnRLZXk1XCIgaW4gY29tbW9uKSApe1xyXG4gICAgICAgICAgdGhpcy5zaG93aW5nID0gY29tbW9uLnBhZ2luYXRpb25Db250ZW50S2V5MTtcclxuICAgICAgICAgIHRoaXMudG8gPSBjb21tb24ucGFnaW5hdGlvbkNvbnRlbnRLZXkyO1xyXG4gICAgICAgICAgdGhpcy5vZiA9IGNvbW1vbi5wYWdpbmF0aW9uQ29udGVudEtleTM7XHJcbiAgICAgICAgICB0aGlzLmVudHJpZXMgPSBjb21tb24ucGFnaW5hdGlvbkNvbnRlbnRLZXk1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBJbnB1dCgpIHBlclBhZ2VTZWxlY3Q6IGFueVtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGN1cnJlbnRQZXJQYWdlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlczogQXJyYXk8YW55PjtcclxuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgcGVyUGFnZTogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XHJcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlO1xyXG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucGVyUGFnZTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zb3VyY2UuY291bnQoKTtcclxuICAgICAgICBpZiAodGhpcy5pc1BhZ2VPdXRPZkJvdW5jZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKC0tdGhpcy5wYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc1BhZ2VDaGFuZ2UoZGF0YUNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2UgY2hhbmdlIHRoZSBwYWdlIGhlcmUgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24gcGVyZm9ybWVkIGFnYWluc3QgZGF0YSBzb3VyY2VcclxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZSAtIHRoZW4gY2hhbmdlIHRoZSBwYWdlIHRvIHRoZSBsYXN0XHJcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgdGFibGUgLSB0aGVuIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICogQHBhcmFtIGNoYW5nZXNcclxuICAgKi9cclxuICBwcm9jZXNzUGFnZUNoYW5nZShjaGFuZ2VzOiBhbnkpIHtcclxuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ3ByZXBlbmQnKSB7XHJcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoMSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UodGhpcy5nZXRMYXN0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdWxkU2hvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jb3VudCgpID4gdGhpcy5wZXJQYWdlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGUocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHBhZ2UpO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHsgcGFnZSB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5leHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSh0aGlzLmdldFBhZ2UoKSArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlcztcclxuICB9XHJcblxyXG4gIGdldExhc3QoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5jb3VudCAvIHRoaXMucGVyUGFnZSk7XHJcbiAgfVxyXG5cclxuICBpc1BhZ2VPdXRPZkJvdW5jZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5wYWdlICogdGhpcy5wZXJQYWdlKSA+PSAodGhpcy5jb3VudCArIHRoaXMucGVyUGFnZSkgJiYgdGhpcy5wYWdlID4gMTtcclxuICB9XHJcblxyXG4gIGluaXRQYWdlcygpIHtcclxuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSB0aGlzLmdldExhc3QoKTtcclxuICAgIGxldCBzaG93UGFnZXNDb3VudCA9IDQ7XHJcbiAgICBzaG93UGFnZXNDb3VudCA9IHBhZ2VzQ291bnQgPCBzaG93UGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBzaG93UGFnZXNDb3VudDtcclxuICAgIHRoaXMucGFnZXMgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRTaG93KCkpIHtcclxuXHJcbiAgICAgIGxldCBtaWRkbGVPbmUgPSBNYXRoLmNlaWwoc2hvd1BhZ2VzQ291bnQgLyAyKTtcclxuICAgICAgbWlkZGxlT25lID0gdGhpcy5wYWdlID49IG1pZGRsZU9uZSA/IHRoaXMucGFnZSA6IG1pZGRsZU9uZTtcclxuXHJcbiAgICAgIGxldCBsYXN0T25lID0gbWlkZGxlT25lICsgTWF0aC5mbG9vcihzaG93UGFnZXNDb3VudCAvIDIpO1xyXG4gICAgICBsYXN0T25lID0gbGFzdE9uZSA+PSBwYWdlc0NvdW50ID8gcGFnZXNDb3VudCA6IGxhc3RPbmU7XHJcblxyXG4gICAgICBjb25zdCBmaXJzdE9uZSA9IGxhc3RPbmUgLSBzaG93UGFnZXNDb3VudCArIDE7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RPbmU7IGkgPD0gbGFzdE9uZTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVBlclBhZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBlclBhZ2UpIHtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50UGVyUGFnZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5jdXJyZW50UGVyUGFnZS50b0xvd2VyQ2FzZSgpID09PSAnYWxsJykge1xyXG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSB0aGlzLmN1cnJlbnRQZXJQYWdlICogMTtcclxuICAgICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbml0UGFnZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==