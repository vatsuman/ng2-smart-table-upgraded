import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/tbody/tbody.component";
import * as i3 from "./components/thead/thead.component";
import * as i4 from "./components/pager/pager.component";
function Ng2SmartTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.filter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source)("createConfirm", ctx_r0.createConfirm);
} }
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table-pager", 5);
    i0.ɵɵlistener("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changePage($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("source", ctx_r1.source)("perPageSelect", ctx_r1.perPageSelect);
} }
var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) { return new (t || Ng2SmartTableComponent)(); };
    Ng2SmartTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]], template: function Ng2SmartTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);
            i0.ɵɵelementStart(2, "tbody", 2);
            i0.ɵɵlistener("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) { return ctx.onUserSelectRow($event); })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) { return ctx.editRowSelect($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.tableId)("ngClass", ctx.tableClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isPagerDisplay);
        } }, directives: [i1.NgClass, i1.NgIf, i2.Ng2SmartTableTbodyComponent, i3.Ng2SmartTableTheadComponent, i4.PagerComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
    return Ng2SmartTableComponent;
}());
export { Ng2SmartTableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table',
                styleUrls: ['./ng2-smart-table.component.scss'],
                templateUrl: './ng2-smart-table.component.html',
            }]
    }], null, { source: [{
            type: Input
        }], settings: [{
            type: Input
        }], rowSelect: [{
            type: Output
        }], userRowSelect: [{
            type: Output
        }], delete: [{
            type: Output
        }], edit: [{
            type: Output
        }], create: [{
            type: Output
        }], custom: [{
            type: Output
        }], deleteConfirm: [{
            type: Output
        }], editConfirm: [{
            type: Output
        }], createConfirm: [{
            type: Output
        }], rowHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIiwibGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7SUNKMUUsZ0NBU1E7SUFKWSwwS0FBVSwwQkFBbUIsSUFBQyw2TUFBQSxnTEFBQSxzTEFBQTtJQUlsRCxpQkFBUTs7O0lBUlksa0NBQWEsdUNBQUEseUJBQUEsdUNBQUE7Ozs7SUEwQm5DLGdEQUl3QjtJQURBLCtPQUFpQztJQUN6RCxpQkFBd0I7OztJQUhBLHNDQUFpQix1Q0FBQTs7QUR0QnpDO0lBQUE7UUFRVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsZ0JB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ZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vbGliL2dyaWQnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi9saWIvaGVscGVycyc7XHJcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBzb3VyY2U6IGFueTtcclxuICBASW5wdXQoKSBzZXR0aW5nczogT2JqZWN0ID0ge307XHJcblxyXG4gIEBPdXRwdXQoKSByb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdXNlclJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGRlbGV0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZWRpdENvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3JlYXRlQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByb3dIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdGFibGVDbGFzczogc3RyaW5nO1xyXG4gIHRhYmxlSWQ6IHN0cmluZztcclxuICBwZXJQYWdlU2VsZWN0OiBhbnk7XHJcbiAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xyXG4gIGlzSGlkZVN1YkhlYWRlcjogYm9vbGVhbjtcclxuICBpc1BhZ2VyRGlzcGxheTogYm9vbGVhbjtcclxuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcclxuXHJcblxyXG4gIGdyaWQ6IEdyaWQ7XHJcbiAgZGVmYXVsdFNldHRpbmdzOiBPYmplY3QgPSB7XHJcbiAgICBtb2RlOiAnaW5saW5lJywgLy8gaW5saW5lfGV4dGVybmFsfGNsaWNrLXRvLWVkaXRcclxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcclxuICAgIGhpZGVIZWFkZXI6IGZhbHNlLFxyXG4gICAgaGlkZVN1YkhlYWRlcjogZmFsc2UsXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGNvbHVtblRpdGxlOiAnQWN0aW9ucycsXHJcbiAgICAgIGFkZDogdHJ1ZSxcclxuICAgICAgZWRpdDogdHJ1ZSxcclxuICAgICAgZGVsZXRlOiB0cnVlLFxyXG4gICAgICBjdXN0b206IFtdLFxyXG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyBsZWZ0fHJpZ2h0XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgfSxcclxuICAgIGVkaXQ6IHtcclxuICAgICAgaW5wdXRDbGFzczogJycsXHJcbiAgICAgIGVkaXRCdXR0b25Db250ZW50OiAnRWRpdCcsXHJcbiAgICAgIHNhdmVCdXR0b25Db250ZW50OiAnVXBkYXRlJyxcclxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXHJcbiAgICAgIGNvbmZpcm1TYXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhZGQ6IHtcclxuICAgICAgaW5wdXRDbGFzczogJycsXHJcbiAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICdBZGQgTmV3JyxcclxuICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJ0NyZWF0ZScsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxyXG4gICAgICBjb25maXJtQ3JlYXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBkZWxldGU6IHtcclxuICAgICAgZGVsZXRlQnV0dG9uQ29udGVudDogJ0RlbGV0ZScsXHJcbiAgICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGF0dHI6IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBjbGFzczogJycsXHJcbiAgICB9LFxyXG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIGRhdGEgZm91bmQnLFxyXG4gICAgY29sdW1uczoge30sXHJcbiAgICBwYWdlcjoge1xyXG4gICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICBwZXJQYWdlOiAxMCxcclxuICAgIH0sXHJcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiBcIlwiXHJcbiAgfTtcclxuXHJcbiAgaXNBbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWydzZXR0aW5ncyddKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLnNldFNldHRpbmdzKHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLnNldFNvdXJjZSh0aGlzLnNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEdyaWQoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFibGVJZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmlkJyk7XHJcbiAgICB0aGlzLnRhYmxlQ2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5jbGFzcycpO1xyXG4gICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xyXG4gICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xyXG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XHJcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKTtcclxuICAgIHRoaXMucGVyUGFnZVNlbGVjdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlU2VsZWN0Jyk7XHJcbiAgICB0aGlzLnJvd0NsYXNzRnVuY3Rpb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncm93Q2xhc3NGdW5jdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFJvd1NlbGVjdChyb3c6IFJvdykge1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgPT09ICdtdWx0aScpIHtcclxuICAgICAgdGhpcy5vbk11bHRpcGxlU2VsZWN0Um93KHJvdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uU2VsZWN0Um93KHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpICE9PSAnbXVsdGknKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcclxuICAgICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xyXG4gICAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUm93SG92ZXIocm93OiBSb3cpIHtcclxuICAgIHRoaXMucm93SG92ZXIuZW1pdChyb3cpO1xyXG4gIH1cclxuXHJcbiAgbXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZ3JpZC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEFsbFJvd3MoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9ICF0aGlzLmlzQWxsU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cyh0aGlzLmlzQWxsU2VsZWN0ZWQpO1xyXG5cclxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cobnVsbCk7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cobnVsbCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgdGhpcy5ncmlkLnNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBvbk11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcclxuICB9XHJcblxyXG4gIGluaXRHcmlkKCkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcclxuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcclxuICAgIHRoaXMuZ3JpZC5vblNlbGVjdFJvdygpLnN1YnNjcmliZSgocm93KSA9PiB0aGlzLmVtaXRTZWxlY3RSb3cocm93KSk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlU291cmNlKCk6IERhdGFTb3VyY2Uge1xyXG4gICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlU2V0dGluZ3MoKTogT2JqZWN0IHtcclxuICAgIHJldHVybiBkZWVwRXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMucmVzZXRBbGxTZWxlY3RvcigpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRBbGxTZWxlY3RvcigpIHtcclxuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VXNlclNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93cygpO1xyXG5cclxuICAgIHRoaXMudXNlclJvd1NlbGVjdC5lbWl0KHtcclxuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXHJcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRSb3dzICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPyBzZWxlY3RlZFJvd3MubWFwKChyOiBSb3cpID0+IHIuZ2V0RGF0YSgpKSA6IFtdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMucm93U2VsZWN0LmVtaXQoe1xyXG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcclxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXHJcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjx0YWJsZSBbaWRdPVwidGFibGVJZFwiIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIj5cclxuXHJcbiAgPHRoZWFkIG5nMi1zdC10aGVhZCAqbmdJZj1cIiFpc0hpZGVIZWFkZXIgfHwgIWlzSGlkZVN1YkhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NyZWF0ZUNvbmZpcm1dPVwiY3JlYXRlQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdEFsbFJvd3MpPVwib25TZWxlY3RBbGxSb3dzKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHNvcnQpPVwic29ydCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyKCRldmVudClcIj5cclxuICA8L3RoZWFkPlxyXG5cclxuICA8dGJvZHkgbmcyLXN0LXRib2R5IFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzRnVuY3Rpb25dPVwicm93Q2xhc3NGdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICh1c2VyU2VsZWN0Um93KT1cIm9uVXNlclNlbGVjdFJvdygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChlZGl0Um93U2VsZWN0KT1cImVkaXRSb3dTZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAobXVsdGlwbGVTZWxlY3RSb3cpPVwibXVsdGlwbGVTZWxlY3RSb3coJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAocm93SG92ZXIpPVwib25Sb3dIb3ZlcigkZXZlbnQpXCI+XHJcbiAgPC90Ym9keT5cclxuXHJcbjwvdGFibGU+XHJcblxyXG48bmcyLXNtYXJ0LXRhYmxlLXBhZ2VyICpuZ0lmPVwiaXNQYWdlckRpc3BsYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwZXJQYWdlU2VsZWN0XT1cInBlclBhZ2VTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlUGFnZSk9XCJjaGFuZ2VQYWdlKCRldmVudClcIj5cclxuPC9uZzItc21hcnQtdGFibGUtcGFnZXI+XHJcbiJdfQ==