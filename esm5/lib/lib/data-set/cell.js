export function prepareValue(value) { return value; }
var Cell = /** @class */ (function () {
    function Cell(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    };
    Cell.prototype.setValue = function (value) {
        this.newValue = value;
    };
    Cell.prototype.getId = function () {
        return this.getColumn().id;
    };
    Cell.prototype.getTitle = function () {
        return this.getColumn().title;
    };
    Cell.prototype.isEditable = function () {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    };
    Cell.PREPARE = prepareValue;
    return Cell;
}());
export { Cell };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zZXQvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsWUFBWSxDQUFFLEtBQVUsSUFBSSxPQUFPLEtBQUssQ0FBQSxDQUFDLENBQUM7QUFFMUQ7SUFLRSxjQUFzQixLQUFVLEVBQVksR0FBUSxFQUFZLE1BQVcsRUFBWSxPQUFnQjtRQUFqRixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFZLFdBQU0sR0FBTixNQUFNLENBQUs7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSHZHLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFJakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFlBQVksUUFBUSxDQUFDO1FBQ3hFLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDbkM7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUNwQztJQUNILENBQUM7SUF2Q2dCLFlBQU8sR0FBRyxZQUFZLENBQUM7SUF5QzFDLFdBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4vZGF0YS1zZXQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVZhbHVlICh2YWx1ZTogYW55KSB7IHJldHVybiB2YWx1ZSB9XG5cbmV4cG9ydCBjbGFzcyBDZWxsIHtcblxuICBuZXdWYWx1ZTogYW55ID0gJyc7XG4gIHByb3RlY3RlZCBzdGF0aWMgUFJFUEFSRSA9IHByZXBhcmVWYWx1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdmFsdWU6IGFueSwgcHJvdGVjdGVkIHJvdzogUm93LCBwcm90ZWN0ZWQgY29sdW1uOiBhbnksIHByb3RlY3RlZCBkYXRhU2V0OiBEYXRhU2V0KSB7XG4gICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0Q29sdW1uKCk6IENvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uO1xuICB9XG5cbiAgZ2V0Um93KCk6IFJvdyB7XG4gICAgcmV0dXJuIHRoaXMucm93O1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogYW55IHtcbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY29sdW1uLmdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCkgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgICBjb25zdCBwcmVwYXJlID0gdmFsaWQgPyB0aGlzLmNvbHVtbi5nZXRWYWx1ZVByZXBhcmVGdW5jdGlvbigpIDogQ2VsbC5QUkVQQVJFO1xuICAgIHJldHVybiBwcmVwYXJlLmNhbGwobnVsbCwgdGhpcy52YWx1ZSwgdGhpcy5yb3cuZ2V0RGF0YSgpLCB0aGlzKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaWQ7XG4gIH1cblxuICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLnRpdGxlO1xuICB9XG5cbiAgaXNFZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5nZXRSb3coKS5pbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLmlzQWRkYWJsZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pc0VkaXRhYmxlO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=