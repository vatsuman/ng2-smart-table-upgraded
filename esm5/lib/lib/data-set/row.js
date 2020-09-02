import { Cell } from './cell';
var Row = /** @class */ (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    };
    return Row;
}());
export { Row };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QjtJQU9FLGFBQW1CLEtBQWEsRUFBWSxJQUFTLEVBQVksUUFBaUI7UUFBL0QsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFZLFNBQUksR0FBSixJQUFJLENBQUs7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBTGxGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQkFBTyxHQUFQLFVBQVEsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLE1BQU0sRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQkFBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBVSxHQUFWO1FBQ0UsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQTNDLENBQTJDLENBQUMsQ0FBQztRQUMvRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQscUJBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHFCQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNoRCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdCQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3ZCLElBQU0sUUFBUSxHQUFJLE1BQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBRSxNQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BHLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XHJcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3cge1xyXG5cclxuICBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNJbkVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjZWxsczogQXJyYXk8Q2VsbD4gPSBbXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwcm90ZWN0ZWQgZGF0YTogYW55LCBwcm90ZWN0ZWQgX2RhdGFTZXQ6IERhdGFTZXQpIHtcclxuICAgIHRoaXMucHJvY2VzcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2VsbChjb2x1bW46IENvbHVtbik6IENlbGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuZmluZChlbCA9PiBlbC5nZXRDb2x1bW4oKSA9PT0gY29sdW1uKTtcclxuICB9XHJcblxyXG4gIGdldENlbGxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHM7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBnZXROZXdEYXRhKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5nZXRDZWxscygpLmZvckVhY2goKGNlbGwpID0+IHZhbHVlc1tjZWxsLmdldENvbHVtbigpLmlkXSA9IGNlbGwubmV3VmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YTogYW55KTogYW55IHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3MoKSB7XHJcbiAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICB0aGlzLl9kYXRhU2V0LmdldENvbHVtbnMoKS5mb3JFYWNoKChjb2x1bW46IENvbHVtbikgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5jcmVhdGVDZWxsKGNvbHVtbik7XHJcbiAgICAgIHRoaXMuY2VsbHMucHVzaChjZWxsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2VsbChjb2x1bW46IENvbHVtbik6IENlbGwge1xyXG4gICAgY29uc3QgZGVmVmFsdWUgPSAoY29sdW1uIGFzIGFueSkuc2V0dGluZ3MuZGVmYXVsdFZhbHVlID8gKGNvbHVtbiBhcyBhbnkpLnNldHRpbmdzLmRlZmF1bHRWYWx1ZSA6ICcnO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgdGhpcy5kYXRhW2NvbHVtbi5pZF0gPT09ICd1bmRlZmluZWQnID8gZGVmVmFsdWUgOiB0aGlzLmRhdGFbY29sdW1uLmlkXTtcclxuICAgIHJldHVybiBuZXcgQ2VsbCh2YWx1ZSwgdGhpcywgY29sdW1uLCB0aGlzLl9kYXRhU2V0KTtcclxuICB9XHJcbn1cclxuIl19