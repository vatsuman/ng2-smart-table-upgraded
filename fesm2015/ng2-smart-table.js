import { ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵdefineComponent, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, Input, ViewChild, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵsanitizeHtml, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ChangeDetectionStrategy, EventEmitter, Output, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵtextInterpolate1, ɵɵlistener, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵpropertyInterpolate, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵgetInheritedFactory, ɵɵpureFunction1, ɵɵattribute, ElementRef, ɵɵclassMapInterpolate1, ɵɵstyleProp } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, FormsModule, NgControl, FormControl, CheckboxControlValueAccessor, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { CompleterService, CompleterCmp, Ng2CompleterModule } from '@akveo/ng2-completer';
import { skip, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import { HttpParams } from '@angular/common/http';

const _c0 = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) { }
class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
CustomViewComponent.ɵcmp = ɵɵdefineComponent({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
    } }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomViewComponent, [{
        type: Component,
        args: [{
                selector: 'custom-view-component',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `,
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { cell: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "custom-view-component", 4);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r0.cell);
} }
function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r1.cell.getValue(), ɵɵsanitizeHtml);
} }
function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.cell.getValue());
} }
class ViewCellComponent {
}
ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
ViewCellComponent.ɵcmp = ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
        ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
        ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "custom");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "html");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, CustomViewComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ViewCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
            }]
    }], null, { cell: [{
            type: Input
        }] }); })();

class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
EditCellDefault.ɵfac = function EditCellDefault_Factory(t) { return new (t || EditCellDefault)(); };
EditCellDefault.ɵcmp = ɵɵdefineComponent({ type: EditCellDefault, selectors: [["ng-component"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 0, vars: 0, template: function EditCellDefault_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditCellDefault, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();

const _c0$1 = ["dynamicTarget"];
function CustomEditComponent_ng_template_0_Template(rf, ctx) { }
class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) { return new (t || CustomEditComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
CustomEditComponent.ɵcmp = ɵɵdefineComponent({ type: CustomEditComponent, selectors: [["table-cell-custom-editor"]], viewQuery: function CustomEditComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-custom-editor',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `,
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
DefaultEditor.ɵcmp = ɵɵdefineComponent({ type: DefaultEditor, selectors: [["ng-component"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, decls: 0, vars: 0, template: function DefaultEditor_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultEditor, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], onStopEditing: [{
            type: Output
        }], onEdited: [{
            type: Output
        }], onClick: [{
            type: Output
        }] }); })();

function SelectEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", option_r1.value)("selected", option_r1.value === ctx_r0.cell.getValue());
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", option_r1.title, " ");
} }
class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
SelectEditorComponent.ɵcmp = ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "select", 0);
        ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
        ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
        ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", currVal_4);
    } }, directives: [SelectControlValueAccessor, NgClass, NgControlStatus, NgModel, NgForOf, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectEditorComponent, [{
        type: Component,
        args: [{
                selector: 'select-editor',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `,
            }]
    }], function () { return []; }, null); })();

class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) { return new (t || TextareaEditorComponent)(); };
TextareaEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TextareaEditorComponent, selectors: [["textarea-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function TextareaEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "textarea", 0);
        ɵɵlistener("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
        ɵɵtext(1, "    ");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
    } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextareaEditorComponent, [{
        type: Component,
        args: [{
                selector: 'textarea-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
            }]
    }], function () { return []; }, null); })();

class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
}
CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) { return new (t || CheckboxEditorComponent)(); };
CheckboxEditorComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxEditorComponent, selectors: [["checkbox-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]], template: function CheckboxEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0);
        ɵɵlistener("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        var tmp_3_0 = null;
        const currVal_3 = ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0.true) || true);
        ɵɵproperty("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", currVal_3);
    } }, directives: [NgClass], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxEditorComponent, [{
        type: Component,
        args: [{
                selector: 'checkbox-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
            }]
    }], function () { return []; }, null); })();

class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
}
CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) { return new (t || CompleterEditorComponent)(ɵɵdirectiveInject(CompleterService)); };
CompleterEditorComponent.ɵcmp = ɵɵdefineComponent({ type: CompleterEditorComponent, selectors: [["completer-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ng2-completer", 0);
        ɵɵlistener("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.completerStr = $event; })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.onEditedCompleter($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
    } }, directives: [CompleterCmp, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CompleterEditorComponent, [{
        type: Component,
        args: [{
                selector: 'completer-editor',
                template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `,
            }]
    }], function () { return [{ type: CompleterService }]; }, null); })();

class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) { return new (t || InputEditorComponent)(); };
InputEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InputEditorComponent, selectors: [["input-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function InputEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0);
        ɵɵlistener("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function InputEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
    } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputEditorComponent, [{
        type: Component,
        args: [{
                selector: 'input-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
            }]
    }], function () { return []; }, null); })();

function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r6); const ctx_r8 = ɵɵnextContext(); return ctx_r8.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r10); const ctx_r12 = ɵɵnextContext(); return ctx_r12.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "checkbox-editor", 6);
    ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r2.cell)("inputClass", ctx_r2.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r3.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(); return ctx_r15.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r17 = ɵɵnextContext(); return ctx_r17.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r16); const ctx_r18 = ɵɵnextContext(); return ctx_r18.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r4.cell)("inputClass", ctx_r4.inputClass);
} }
class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
DefaultEditComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
        ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
        ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
        ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
        ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.getEditorType());
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "list");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "textarea");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "completer");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            }]
    }], function () { return []; }, null); })();

function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-custom-editor", 3);
    ɵɵlistener("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
} }
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-default-editor", 3);
    ɵɵlistener("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
EditCellComponent.ɵfac = function EditCellComponent_Factory(t) { return new (t || EditCellComponent)(); };
EditCellComponent.ɵcmp = ɵɵdefineComponent({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
        ɵɵtemplate(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.getEditorType());
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "custom");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, CustomEditComponent, DefaultEditComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-edit-mode',
                template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `,
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();

function CellComponent_table_cell_view_mode_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "table-cell-view-mode", 2);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r0.cell);
} }
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-edit-mode", 3);
    ɵɵlistener("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = ɵɵdefineComponent({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
        ɵɵtemplate(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.isInEditing);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isInEditing);
    } }, directives: [NgIf, ViewCellComponent, EditCellComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CellComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-cell',
                template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], isNew: [{
            type: Input
        }], cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], mode: [{
            type: Input
        }], isInEditing: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();

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
class CellModule {
}
CellModule.ɵmod = ɵɵdefineNgModule({ type: CellModule });
CellModule.ɵinj = ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            Ng2CompleterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CellModule, { declarations: [CellComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(CellModule, [{
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

class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
FilterDefault.ɵcmp = ɵɵdefineComponent({ type: FilterDefault, selectors: [["ng-component"]], inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function FilterDefault_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterDefault, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();

const _c0$2 = ["dynamicTarget"];
function CustomFilterComponent_ng_template_0_Template(rf, ctx) { }
class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) { return new (t || CustomFilterComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
CustomFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CustomFilterComponent, selectors: [["custom-table-filter"]], viewQuery: function CustomFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$2, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
    } }, inputs: { query: "query" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomFilterComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-filter',
                template: `<ng-template #dynamicTarget></ng-template>`,
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { query: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
DefaultFilter.ɵcmp = ɵɵdefineComponent({ type: DefaultFilter, selectors: [["ng-component"]], inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function DefaultFilter_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultFilter, [{
        type: Component,
        args: [{
                template: '',
            }]
    }], null, { query: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], column: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();

const _c0$3 = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2.title, " ");
} }
class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => this.setFilter());
    }
}
SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
SelectFilterComponent.ɵcmp = ɵɵdefineComponent({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$3, true, NgControl);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputControl = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "select", 0, 1);
        ɵɵlistener("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
        ɵɵelementStart(2, "option", 2);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.query);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.column.getFilterConfig().selectText);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.column.getFilterConfig().list);
    } }, directives: [SelectControlValueAccessor, NgClass, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectFilterComponent, [{
        type: Component,
        args: [{
                selector: 'select-filter',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
            }]
    }], function () { return []; }, { inputControl: [{
            type: ViewChild,
            args: ['inputControl', { read: NgControl, static: true }]
        }] }); })();

function CheckboxFilterComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.resetFilter($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    var tmp_0_0 = null;
    ɵɵadvance(1);
    ɵɵtextInterpolate(((tmp_0_0 = ctx_r0.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
} }
class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
}
CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) { return new (t || CheckboxFilterComponent)(); };
CheckboxFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxFilterComponent, selectors: [["checkbox-filter"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]], template: function CheckboxFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "input", 0);
        ɵɵtemplate(1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
    } if (rf & 2) {
        ɵɵproperty("formControl", ctx.inputControl)("ngClass", ctx.inputClass);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.filterActive);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgClass, NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxFilterComponent, [{
        type: Component,
        args: [{
                selector: 'checkbox-filter',
                template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `,
            }]
    }], function () { return []; }, null); })();

class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new Subject();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map((ev) => (ev && ev.title) || ev || ''), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(ɵɵdirectiveInject(CompleterService)); };
CompleterFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ng2-completer", 0);
        ɵɵlistener("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
    } }, directives: [CompleterCmp, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CompleterFilterComponent, [{
        type: Component,
        args: [{
                selector: 'completer-filter',
                template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `,
            }]
    }], function () { return [{ type: CompleterService }]; }, null); })();

class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    }
}
InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) { return new (t || InputFilterComponent)(); };
InputFilterComponent.ɵcmp = ɵɵdefineComponent({ type: InputFilterComponent, selectors: [["input-filter"]], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "input", 0);
    } if (rf & 2) {
        ɵɵpropertyInterpolate("placeholder", ctx.column.title);
        ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
    } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFilterComponent, [{
        type: Component,
        args: [{
                selector: 'input-filter',
                template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `,
            }]
    }], function () { return []; }, null); })();

function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r0.query)("ngClass", ctx_r0.inputClass)("column", ctx_r0.column);
} }
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "checkbox-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r1.query)("ngClass", ctx_r1.inputClass)("column", ctx_r1.column);
} }
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "completer-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r2.query)("ngClass", ctx_r2.inputClass)("column", ctx_r2.column);
} }
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); return ctx_r10.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r3.query)("ngClass", ctx_r3.inputClass)("column", ctx_r3.column);
} }
class DefaultFilterComponent extends FilterDefault {
}
DefaultFilterComponent.ɵfac = function DefaultFilterComponent_Factory(t) { return ɵDefaultFilterComponent_BaseFactory(t || DefaultFilterComponent); };
DefaultFilterComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
        ɵɵtemplate(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
        ɵɵtemplate(3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
        ɵɵtemplate(4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.column.getFilterType());
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "list");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "completer");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, SelectFilterComponent, NgClass, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent], encapsulation: 2 });
const ɵDefaultFilterComponent_BaseFactory = ɵɵgetInheritedFactory(DefaultFilterComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultFilterComponent, [{
        type: Component,
        args: [{
                selector: 'default-table-filter',
                template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `,
            }]
    }], null, { query: [{
            type: Input
        }] }); })();

function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "custom-table-filter", 4);
    ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(2); return ctx_r3.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("query", ctx_r1.query)("column", ctx_r1.column)("source", ctx_r1.source)("inputClass", ctx_r1.inputClass);
} }
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "default-table-filter", 4);
    ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(2); return ctx_r5.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("query", ctx_r2.query)("column", ctx_r2.column)("source", ctx_r2.source)("inputClass", ctx_r2.inputClass);
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
    ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r0.column.getFilterType());
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "custom");
} }
class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return ɵFilterComponent_BaseFactory(t || FilterComponent); };
FilterComponent.ɵcmp = ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.column.isFilterable);
    } }, directives: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CustomFilterComponent, DefaultFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
const ɵFilterComponent_BaseFactory = ɵɵgetInheritedFactory(FilterComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-filter',
                styleUrls: ['./filter.component.scss'],
                template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `,
            }]
    }], null, null); })();

const FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
class FilterModule {
}
FilterModule.ɵmod = ɵɵdefineNgModule({ type: FilterModule });
FilterModule.ɵinj = ɵɵdefineInjector({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            Ng2CompleterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterDefault,
        DefaultFilter,
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2CompleterModule], exports: [FilterDefault,
        DefaultFilter,
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...FILTER_COMPONENTS,
                ],
                exports: [
                    ...FILTER_COMPONENTS,
                ],
            }]
    }], null, null); })();

function PagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "p");
    ɵɵtext(2, "Showing ");
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtext(5, " to ");
    ɵɵelementStart(6, "strong");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate((ctx_r0.page - 1) * ctx_r0.currentPerPage + 1);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r0.getPage() == ctx_r0.getLast() ? ctx_r0.count : ctx_r0.page * ctx_r0.currentPerPage, " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" of ", ctx_r0.count, " entries");
} }
function PagerComponent_nav_1_li_14_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 9);
    ɵɵtext(3, "(current)");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", page_r4, " ");
} }
function PagerComponent_nav_1_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 17);
    ɵɵlistener("click", function PagerComponent_nav_1_li_14_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r10); const page_r4 = ɵɵnextContext().$implicit; const ctx_r8 = ɵɵnextContext(2); return ctx_r8.paginate(page_r4); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r4);
} }
const _c0$4 = function (a0) { return { active: a0 }; };
function PagerComponent_nav_1_li_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵtemplate(1, PagerComponent_nav_1_li_14_span_1_Template, 4, 1, "span", 14);
    ɵɵtemplate(2, PagerComponent_nav_1_li_14_a_2_Template, 2, 1, "a", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0$4, ctx_r3.getPage() == page_r4));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.getPage() == page_r4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.getPage() != page_r4);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nav", 4);
    ɵɵelementStart(1, "ul", 5);
    ɵɵelementStart(2, "li", 6);
    ɵɵelementStart(3, "a", 7);
    ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_3_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.getPage() == 1 ? false : ctx_r12.paginate(1); });
    ɵɵelementStart(4, "span", 8);
    ɵɵtext(5, "\u00AB");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 9);
    ɵɵtext(7, "First");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "li", 6);
    ɵɵelementStart(9, "a", 10);
    ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_9_listener() { ɵɵrestoreView(_r13); const ctx_r14 = ɵɵnextContext(); return ctx_r14.getPage() == 1 ? false : ctx_r14.prev(); });
    ɵɵelementStart(10, "span", 8);
    ɵɵtext(11, "<");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 9);
    ɵɵtext(13, "Prev");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(14, PagerComponent_nav_1_li_14_Template, 3, 5, "li", 11);
    ɵɵelementStart(15, "li", 6);
    ɵɵelementStart(16, "a", 12);
    ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_16_listener() { ɵɵrestoreView(_r13); const ctx_r15 = ɵɵnextContext(); return ctx_r15.getPage() == ctx_r15.getLast() ? false : ctx_r15.next(); });
    ɵɵelementStart(17, "span", 8);
    ɵɵtext(18, ">");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 9);
    ɵɵtext(20, "Next");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(21, "li", 6);
    ɵɵelementStart(22, "a", 13);
    ɵɵlistener("click", function PagerComponent_nav_1_Template_a_click_22_listener() { ɵɵrestoreView(_r13); const ctx_r16 = ɵɵnextContext(); return ctx_r16.getPage() == ctx_r16.getLast() ? false : ctx_r16.paginate(ctx_r16.getLast()); });
    ɵɵelementStart(23, "span", 8);
    ɵɵtext(24, "\u00BB");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 9);
    ɵɵtext(26, "Last");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1, ctx_r1.getPage() == 1));
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1, ctx_r1.getPage() == 1));
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r1.getPages());
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c1, ctx_r1.getPage() == ctx_r1.getLast()));
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c1, ctx_r1.getPage() == ctx_r1.getLast()));
} }
function PagerComponent_nav_2_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    ɵɵproperty("value", item_r18);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r18);
} }
function PagerComponent_nav_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nav", 18);
    ɵɵelementStart(1, "label", 19);
    ɵɵtext(2, " Per Page: ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "select", 20);
    ɵɵlistener("change", function PagerComponent_nav_2_Template_select_change_3_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(); return ctx_r19.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_2_Template_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r20); const ctx_r21 = ɵɵnextContext(); return ctx_r21.currentPerPage = $event; });
    ɵɵtemplate(4, PagerComponent_nav_2_option_4_Template, 2, 2, "option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r2.currentPerPage);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.perPageSelect);
} }
class PagerComponent {
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
PagerComponent.ɵcmp = ɵɵdefineComponent({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [["class", "col-sm-6 pagination-count", 4, "ngIf"], ["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "col-sm-6", "pagination-count"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PagerComponent_div_0_Template, 9, 3, "div", 0);
        ɵɵtemplate(1, PagerComponent_nav_1_Template, 27, 13, "nav", 1);
        ɵɵtemplate(2, PagerComponent_nav_2_Template, 5, 2, "nav", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.shouldShow());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.shouldShow());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
    } }, directives: [NgIf, NgClass, NgForOf, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PagerComponent, [{
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

class PagerModule {
}
PagerModule.ɵmod = ɵɵdefineNgModule({ type: PagerModule });
PagerModule.ɵinj = ɵɵdefineInjector({ factory: function PagerModule_Factory(t) { return new (t || PagerModule)(); }, imports: [[
            CommonModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PagerModule, { declarations: [PagerComponent], imports: [CommonModule,
        FormsModule], exports: [PagerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                declarations: [
                    PagerComponent,
                ],
                exports: [
                    PagerComponent,
                ],
            }]
    }], null, null); })();

function TbodyCustomComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 1);
    ɵɵlistener("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r3); const action_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.onCustom(action_r1, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const action_r1 = ctx.$implicit;
    ɵɵproperty("innerHTML", action_r1.title, ɵɵsanitizeHtml);
} }
class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) { return new (t || TbodyCustomComponent)(); };
TbodyCustomComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.grid.getSetting("actions.custom"));
    } }, directives: [NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyCustomComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], custom: [{
            type: Output
        }] }); })();

function TbodyEditDeleteComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onEdit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r0.editRowButtonContent, ɵɵsanitizeHtml);
} }
function TbodyEditDeleteComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onDelete($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r1.deleteRowButtonContent, ɵɵsanitizeHtml);
} }
class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
}
TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) { return new (t || TbodyEditDeleteComponent)(); };
TbodyEditDeleteComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyEditDeleteComponent, selectors: [["ng2-st-tbody-edit-delete"]], inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]], template: function TbodyEditDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);
        ɵɵtemplate(1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isActionEdit);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isActionDelete);
    } }, directives: [NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyEditDeleteComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-edit-delete',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], editRowSelect: [{
            type: Output
        }] }); })();

class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
}
TbodyCreateCancelComponent.ɵfac = function TbodyCreateCancelComponent_Factory(t) { return new (t || TbodyCreateCancelComponent)(); };
TbodyCreateCancelComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyCreateCancelComponent, selectors: [["ng2-st-tbody-create-cancel"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]], template: function TbodyCreateCancelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) { return ctx.onSave($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "a", 1);
        ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) { return ctx.onCancelEdit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("innerHTML", ctx.saveButtonContent, ɵɵsanitizeHtml);
        ɵɵadvance(1);
        ɵɵproperty("innerHTML", ctx.cancelButtonContent, ɵɵsanitizeHtml);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyCreateCancelComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-create-cancel',
                template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }] }); })();

const _c0$5 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { ɵɵrestoreView(_r11); const row_r2 = ɵɵnextContext().$implicit; const ctx_r9 = ɵɵnextContext(); return ctx_r9.multipleSelectRow.emit(row_r2); });
    ɵɵelement(1, "input", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", row_r2.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 8);
    ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.custom.emit($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { ɵɵrestoreView(_r14); const row_r2 = ɵɵnextContext().$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { ɵɵrestoreView(_r14); const row_r2 = ɵɵnextContext().$implicit; const ctx_r17 = ɵɵnextContext(); return ctx_r17.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { ɵɵrestoreView(_r14); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.editRowSelect.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r4.grid)("row", row_r2)("source", ctx_r4.source);
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r4.grid)("deleteConfirm", ctx_r4.deleteConfirm)("editConfirm", ctx_r4.editConfirm)("row", row_r2)("source", ctx_r4.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵelement(1, "ng2-smart-table-cell", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r22 = ctx.$implicit;
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cell", cell_r22)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 8);
    ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(2); return ctx_r25.custom.emit($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { ɵɵrestoreView(_r26); const row_r2 = ɵɵnextContext().$implicit; const ctx_r27 = ɵɵnextContext(); return ctx_r27.edit.emit(row_r2); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { ɵɵrestoreView(_r26); const row_r2 = ɵɵnextContext().$implicit; const ctx_r29 = ɵɵnextContext(); return ctx_r29.delete.emit(row_r2); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { ɵɵrestoreView(_r26); const ctx_r31 = ɵɵnextContext(2); return ctx_r31.editRowSelect.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
} }
const _c1$1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 2);
    ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { ɵɵrestoreView(_r34); const row_r2 = ctx.$implicit; const ctx_r33 = ɵɵnextContext(); return ctx_r33.userSelectRow.emit(row_r2); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { ɵɵrestoreView(_r34); const row_r2 = ctx.$implicit; const ctx_r35 = ɵɵnextContext(); return ctx_r35.rowHover.emit(row_r2); });
    ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("className", ctx_r0.rowClassFunction(row_r2))("ngClass", ɵɵpureFunction1(8, _c1$1, row_r2.isSelected));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isMultiSelectVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r2.cells);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnRight);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("colspan", ctx_r1.tableColumnsCount);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.noDataMessage, " ");
} }
class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
}
Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
Ng2SmartTableTbodyComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$5, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
        ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.grid.getRows());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
    } }, directives: [NgForOf, NgIf, NgClass, CheckboxControlValueAccessor, NgControlStatus, NgModel, TbodyCustomComponent, TbodyEditDeleteComponent, TbodyCreateCancelComponent, CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-tbody]',
                styleUrls: ['./tbody.component.scss'],
                templateUrl: './tbody.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], rowClassFunction: [{
            type: Input
        }], save: [{
            type: Output
        }], cancel: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], custom: [{
            type: Output
        }], edited: [{
            type: Output
        }], userSelectRow: [{
            type: Output
        }], editRowSelect: [{
            type: Output
        }], multipleSelectRow: [{
            type: Output
        }], rowHover: [{
            type: Output
        }] }); })();

const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
class TBodyModule {
}
TBodyModule.ɵmod = ɵɵdefineNgModule({ type: TBodyModule });
TBodyModule.ɵinj = ɵɵdefineInjector({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            CellModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TBodyModule, { declarations: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent], imports: [CommonModule,
        FormsModule,
        CellModule], exports: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TBodyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    CellModule,
                ],
                declarations: [
                    ...TBODY_COMPONENTS,
                ],
                exports: [
                    ...TBODY_COMPONENTS,
                ],
            }]
    }], null, null); })();

const _c0$6 = ["ng2-st-checkbox-select-all", ""];
class CheckboxSelectAllComponent {
}
CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
CheckboxSelectAllComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0$6, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "input", 0);
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.isAllSelected);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxSelectAllComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }] }); })();

const _c0$7 = ["ng2-st-actions-title", ""];
class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(ɵɵdirectiveInject(ElementRef)); };
ActionsTitleComponent.ɵcmp = ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$7, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.actionsColumnTitle);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionsTitleComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-actions-title]',
                template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
            }]
    }], function () { return [{ type: ElementRef }]; }, { grid: [{
            type: Input
        }] }); })();

function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2._sort($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.currentDirection);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.column.title);
} }
class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
        ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.column.isSortable);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.column.isSortable);
    } }, directives: [NgIf, NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{transform:rotate(-180deg);margin-bottom:-2px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-title',
                styleUrls: ['./title.component.scss'],
                template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
}
ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
ColumnTitleComponent.ɵcmp = ɵɵdefineComponent({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "ng2-smart-table-title", 1);
        ɵɵlistener("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("source", ctx.source)("column", ctx.column);
    } }, directives: [TitleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColumnTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-column-title',
                template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

const _c0$8 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 3);
    ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.selectAllRows.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source)("isAllSelected", ctx_r0.isAllSelected);
} }
function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 5);
    ɵɵelementStart(1, "ng2-st-column-title", 6);
    ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.sort.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
    ɵɵstyleProp("width", column_r6.width);
    ɵɵproperty("ngClass", column_r6.class);
    ɵɵadvance(1);
    ɵɵproperty("source", ctx_r2.source)("column", column_r6);
} }
function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r3.grid);
} }
class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
}
TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
TheadTitlesRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", isAllSelected: "isAllSelected", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$8, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);
        ɵɵtemplate(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
        ɵɵtemplate(2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
        ɵɵtemplate(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.grid.getColumns());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [NgIf, NgForOf, CheckboxSelectAllComponent, ActionsTitleComponent, NgClass, ColumnTitleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadTitlesRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }] }); })();

const _c0$9 = ["ng2-st-add-button", ""];
function AddButtonComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 1);
    ɵɵlistener("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.onAdd($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r0.addNewButtonContent, ɵɵsanitizeHtml);
} }
class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
}
AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) { return new (t || AddButtonComponent)(ɵɵdirectiveInject(ElementRef)); };
AddButtonComponent.ɵcmp = ɵɵdefineComponent({ type: AddButtonComponent, selectors: [["", "ng2-st-add-button", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$9, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]], template: function AddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isActionAdd);
    } }, directives: [NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddButtonComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-add-button]',
                template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `,
            }]
    }], function () { return [{ type: ElementRef }]; }, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

const _c0$a = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th");
} }
function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 4);
    ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.create.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th");
    ɵɵelementStart(1, "ng2-smart-table-filter", 5);
    ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.filter.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
    ɵɵadvance(1);
    ɵɵproperty("source", ctx_r2.source)("column", column_r6)("inputClass", ctx_r2.filterInputClass);
} }
function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 6);
    ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.create.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r3.grid)("source", ctx_r3.source);
} }
class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
}
TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
TheadFitlersRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$a, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
        ɵɵtemplate(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
        ɵɵtemplate(2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
        ɵɵtemplate(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.grid.getColumns());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [NgIf, NgForOf, AddButtonComponent, FilterComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadFitlersRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-filters-row]',
                template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();

class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
}
ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
ActionsComponent.ɵcmp = ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "a", 1);
        ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("innerHTML", ctx.createButtonContent, ɵɵsanitizeHtml);
        ɵɵadvance(1);
        ɵɵproperty("innerHTML", ctx.cancelButtonContent, ɵɵsanitizeHtml);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

const _c0$b = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "td");
} }
function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵelementStart(1, "ng2-st-actions", 4);
    ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r1.grid);
} }
function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td");
    ɵɵelementStart(1, "ng2-smart-table-cell", 5);
    ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cell", cell_r6)("grid", ctx_r2.grid)("isNew", true)("createConfirm", ctx_r2.createConfirm)("inputClass", ctx_r2.addInputClass)("isInEditing", ctx_r2.grid.getNewRow().isInEditing);
} }
function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵelementStart(1, "ng2-st-actions", 4);
    ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r3.grid);
} }
class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
}
TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) { return new (t || TheadFormRowComponent)(); };
TheadFormRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$b, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
        ɵɵtemplate(1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
        ɵɵtemplate(2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
        ɵɵtemplate(3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.grid.getNewRow().getCells());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [NgIf, NgForOf, ActionsComponent, CellComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadFormRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-form-row]',
                template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

const _c0$c = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 3);
    ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.selectAllRows.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source);
} }
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 4);
    ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r8 = ɵɵnextContext(); return ctx_r8.filter.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r1.grid)("source", ctx_r1.source);
} }
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 5);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r2.grid)("createConfirm", ctx_r2.createConfirm);
} }
class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
Ng2SmartTableTheadComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [ɵɵNgOnChangesFeature], attrs: _c0$c, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);
        ɵɵtemplate(1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
        ɵɵtemplate(2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.isHideHeader);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isHideSubHeader);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.grid.createFormShown);
    } }, directives: [NgIf, TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableTheadComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead]',
                templateUrl: './thead.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();

const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
class THeadModule {
}
THeadModule.ɵmod = ɵɵdefineNgModule({ type: THeadModule });
THeadModule.ɵinj = ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            FilterModule,
            CellModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(THeadModule, { declarations: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent], imports: [CommonModule,
        FormsModule,
        FilterModule,
        CellModule], exports: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(THeadModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: [
                    ...THEAD_COMPONENTS,
                ],
                exports: [
                    ...THEAD_COMPONENTS,
                ],
            }]
    }], null, null); })();

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}

function prepareValue(value) { return value; }
class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;

class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}

class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}

class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
    }
    selectRow(row) {
        const previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    selectPreviousRow() {
        if (this.rows.length > 0) {
            let index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    }
    selectFirstRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    }
    selectLastRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    }
    willSelectFirstRow() {
        this.willSelect = 'first';
    }
    willSelectLastRow() {
        this.willSelect = 'last';
    }
    select() {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        for (const id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            this.rows.push(new Row(index, el, this));
        });
    }
}

class Grid {
    constructor(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    showActionColumn(position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }
    isCurrentActionsPosition(position) {
        return position == this.getSetting('actions.position');
    }
    isActionsVisible() {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }
    isMultiSelectVisible() {
        return this.getSetting('selectMode') === 'multi';
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    }
    getDataSet() {
        return this.dataSet;
    }
    setSource(source) {
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
        this.source.onUpdated().subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    }
    getSetting(name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    }
    getColumns() {
        return this.dataSet.getColumns();
    }
    getRows() {
        return this.dataSet.getRows();
    }
    selectRow(row) {
        this.dataSet.selectRow(row);
    }
    multipleSelectRow(row) {
        this.dataSet.multipleSelectRow(row);
    }
    onSelectRow() {
        return this.onSelectRowSource.asObservable();
    }
    edit(row) {
        row.isInEditing = true;
    }
    create(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                this.createFormShown = false;
            }
            else {
                this.source.prepend(newData).then(() => {
                    this.createFormShown = false;
                    this.dataSet.createNewRow();
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    save(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    delete(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                const row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    }
    shouldProcessChange(changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    }
    // TODO: move to selectable? Separate directive
    determineRowToSelect(changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    }
    prepareSource(source) {
        const initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const sortConf = {};
        this.getColumns().forEach((column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    }
    getSelectedRows() {
        return this.dataSet.getRows()
            .filter(r => r.isSelected);
    }
    selectAllRows(status) {
        this.dataSet.getRows()
            .forEach(r => r.isSelected = status);
    }
    getFirstRow() {
        return this.dataSet.getFirstRow();
    }
    getLastRow() {
        return this.dataSet.getLastRow();
    }
}

class DataSource {
    constructor() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    refresh() {
        this.emitOnChanged('refresh');
    }
    load(data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prepend(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    }
    append(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    }
    add(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    }
    remove(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    }
    update(element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    }
    empty() {
        this.emitOnChanged('empty');
        return Promise.resolve();
    }
    setSort(conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    }
    setFilter(conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    addFilter(fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    setPaging(page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    }
    setPage(page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}

class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}

class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = {};
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.load(data);
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prepend(element);
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.append(element);
    }
    add(element) {
        this.data.push(element);
        return super.add(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.remove(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.update(found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    }
    empty() {
        this.data = [];
        return super.empty();
    }
    count() {
        return this.filteredAndSorted.length;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        super.setSort(conf, doEmit);
        return this;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        super.setFilter(conf, andOperator, doEmit);
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf['field'] === fieldConf['field']) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        super.addFilter(fieldConf, andOperator, doEmit);
        return this;
    }
    setPaging(page, perPage, doEmit = true) {
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        super.setPaging(page, perPage, doEmit);
        return this;
    }
    setPage(page, doEmit = true) {
        this.pagingConf['page'] = page;
        super.setPage(page, doEmit);
        return this;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    }
}

function Ng2SmartTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "thead", 4);
    ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r5 = ɵɵnextContext(); return ctx_r5.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r6 = ɵɵnextContext(); return ctx_r6.filter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source)("createConfirm", ctx_r0.createConfirm);
} }
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng2-smart-table-pager", 5);
    ɵɵlistener("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.changePage($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("source", ctx_r1.source)("perPageSelect", ctx_r1.perPageSelect);
} }
class Ng2SmartTableComponent {
    constructor() {
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
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
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
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
}
Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) { return new (t || Ng2SmartTableComponent)(); };
Ng2SmartTableComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]], template: function Ng2SmartTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);
        ɵɵelementStart(2, "tbody", 2);
        ɵɵlistener("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) { return ctx.onUserSelectRow($event); })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) { return ctx.editRowSelect($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
    } if (rf & 2) {
        ɵɵproperty("id", ctx.tableId)("ngClass", ctx.tableClass);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
        ɵɵadvance(1);
        ɵɵproperty("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isPagerDisplay);
    } }, directives: [NgClass, NgIf, Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent, PagerComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableComponent, [{
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

class Ng2SmartTableModule {
}
Ng2SmartTableModule.ɵmod = ɵɵdefineNgModule({ type: Ng2SmartTableModule });
Ng2SmartTableModule.ɵinj = ɵɵdefineInjector({ factory: function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule], exports: [Ng2SmartTableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableComponent,
                ],
            }]
    }], null, null); })();

class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';

class ServerDataSource extends LocalDataSource {
    constructor(http, conf = {}) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
        this.conf = new ServerSourceConf(conf);
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return this.requestElements()
            .pipe(map(res => {
            this.lastRequestCount = this.extractTotalFromResponse(res);
            this.data = this.extractDataFromResponse(res);
            return this.data;
        })).toPromise();
    }
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    extractDataFromResponse(res) {
        const rawData = res.body;
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    extractTotalFromResponse(res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            const rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }
    requestElements() {
        let httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    }
    createRequesParams() {
        let httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }
    addSortRequestParams(httpParams) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                httpParams = httpParams.set(this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    }
    addFilterRequestParams(httpParams) {
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    }
    addPagerRequestParams(httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableComponent, Ng2SmartTableModule, ServerDataSource };
//# sourceMappingURL=ng2-smart-table.js.map
