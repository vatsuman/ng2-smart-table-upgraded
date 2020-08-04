export class Column {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLE1BQU07SUFvQmpCLFlBQW1CLEVBQVUsRUFBWSxRQUFhLEVBQVksT0FBZ0I7UUFBL0QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBbEJsRixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxvQkFBZSxHQUFRLElBQUksQ0FBQztRQU8xQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUJBQXVCO1FB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QUM7UUFDdEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsYUFBYTtRQUNYLCtCQUErQjtRQUMvQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAnLi9kYXRhLXNldCc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW4ge1xuXG4gIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgdHlwZTogc3RyaW5nID0gJyc7XG4gIGNsYXNzOiBzdHJpbmcgPSAnJztcbiAgd2lkdGg6IHN0cmluZyA9ICcnO1xuICBpc1NvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0FkZGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0ZpbHRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgZWRpdG9yOiB7IHR5cGU6IHN0cmluZywgY29uZmlnOiBhbnksIGNvbXBvbmVudDogYW55IH0gPSB7IHR5cGU6ICcnLCBjb25maWc6IHt9LCBjb21wb25lbnQ6IG51bGwgfTtcbiAgZmlsdGVyOiB7IHR5cGU6IHN0cmluZywgY29uZmlnOiBhbnksIGNvbXBvbmVudDogYW55IH0gPSB7IHR5cGU6ICcnLCBjb25maWc6IHt9LCBjb21wb25lbnQ6IG51bGwgfTtcbiAgcmVuZGVyQ29tcG9uZW50OiBhbnkgPSBudWxsO1xuICBjb21wYXJlRnVuY3Rpb246IEZ1bmN0aW9uO1xuICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogRnVuY3Rpb247XG4gIGZpbHRlckZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgb25Db21wb25lbnRJbml0RnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwcm90ZWN0ZWQgc2V0dGluZ3M6IGFueSwgcHJvdGVjdGVkIGRhdGFTZXQ6IERhdGFTZXQpIHtcbiAgICB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIGdldE9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vbkNvbXBvbmVudEluaXRGdW5jdGlvbjtcbiAgfVxuXG4gIGdldENvbXBhcmVGdW5jdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZUZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0RmlsdGVyRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmNvbmZpZztcbiAgfVxuXG4gIGdldEZpbHRlclR5cGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIudHlwZTtcbiAgfVxuXG4gIGdldEZpbHRlckNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5jb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5zZXR0aW5nc1sndGl0bGUnXTtcbiAgICB0aGlzLmNsYXNzID0gdGhpcy5zZXR0aW5nc1snY2xhc3MnXTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zZXR0aW5nc1snd2lkdGgnXTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnByZXBhcmVUeXBlKCk7XG4gICAgdGhpcy5lZGl0b3IgPSB0aGlzLnNldHRpbmdzWydlZGl0b3InXTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuc2V0dGluZ3NbJ2ZpbHRlciddO1xuICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gdGhpcy5zZXR0aW5nc1sncmVuZGVyQ29tcG9uZW50J107XG5cbiAgICB0aGlzLmlzRmlsdGVyYWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydmaWx0ZXInXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydmaWx0ZXInXTtcbiAgICB0aGlzLmRlZmF1bHRTb3J0RGlyZWN0aW9uID0gWydhc2MnLCAnZGVzYyddXG4gICAgICAuaW5kZXhPZih0aGlzLnNldHRpbmdzWydzb3J0RGlyZWN0aW9uJ10pICE9PSAtMSA/IHRoaXMuc2V0dGluZ3NbJ3NvcnREaXJlY3Rpb24nXSA6ICcnO1xuICAgIHRoaXMuaXNTb3J0YWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydzb3J0J10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snc29ydCddO1xuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydlZGl0YWJsZSddID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiAhIXRoaXMuc2V0dGluZ3NbJ2VkaXRhYmxlJ107XG4gICAgdGhpcy5pc0FkZGFibGU9dHlwZW9mIHRoaXMuc2V0dGluZ3NbJ2FkZGFibGUnXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydhZGRhYmxlJ107XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5wcmVwYXJlU29ydERpcmVjdGlvbigpO1xuXG4gICAgdGhpcy5jb21wYXJlRnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWydjb21wYXJlRnVuY3Rpb24nXTtcbiAgICB0aGlzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1sndmFsdWVQcmVwYXJlRnVuY3Rpb24nXTtcbiAgICB0aGlzLmZpbHRlckZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snZmlsdGVyRnVuY3Rpb24nXTtcbiAgICB0aGlzLm9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snb25Db21wb25lbnRJbml0RnVuY3Rpb24nXTtcbiAgfVxuXG4gIHByZXBhcmVUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbJ3R5cGUnXSB8fCB0aGlzLmRldGVybWluZVR5cGUoKTtcbiAgfVxuXG4gIHByZXBhcmVTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbJ3NvcnQnXSA9PT0gJ2Rlc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gIH1cblxuICBkZXRlcm1pbmVUeXBlKCk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogZGV0ZXJtaW5lIHR5cGUgYnkgZGF0YVxuICAgIHJldHVybiAndGV4dCc7XG4gIH1cbn1cbiJdfQ==