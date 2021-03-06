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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zZXQvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsWUFBWSxDQUFFLEtBQVUsSUFBSSxPQUFPLEtBQUssQ0FBQSxDQUFDLENBQUM7QUFFMUQ7SUFLRSxjQUFzQixLQUFVLEVBQVksR0FBUSxFQUFZLE1BQVcsRUFBWSxPQUFnQjtRQUFqRixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFZLFdBQU0sR0FBTixNQUFNLENBQUs7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSHZHLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFJakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFlBQVksUUFBUSxDQUFDO1FBQ3hFLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDbkM7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUNwQztJQUNILENBQUM7SUF2Q2dCLFlBQU8sR0FBRyxZQUFZLENBQUM7SUF5QzFDLFdBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xyXG5pbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAnLi9kYXRhLXNldCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlVmFsdWUgKHZhbHVlOiBhbnkpIHsgcmV0dXJuIHZhbHVlIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIHtcclxuXHJcbiAgbmV3VmFsdWU6IGFueSA9ICcnO1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgUFJFUEFSRSA9IHByZXBhcmVWYWx1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHZhbHVlOiBhbnksIHByb3RlY3RlZCByb3c6IFJvdywgcHJvdGVjdGVkIGNvbHVtbjogYW55LCBwcm90ZWN0ZWQgZGF0YVNldDogRGF0YVNldCkge1xyXG4gICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uKCk6IENvbHVtbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW47XHJcbiAgfVxyXG5cclxuICBnZXRSb3coKTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLnJvdztcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY29sdW1uLmdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCkgaW5zdGFuY2VvZiBGdW5jdGlvbjtcclxuICAgIGNvbnN0IHByZXBhcmUgPSB2YWxpZCA/IHRoaXMuY29sdW1uLmdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCkgOiBDZWxsLlBSRVBBUkU7XHJcbiAgICByZXR1cm4gcHJlcGFyZS5jYWxsKG51bGwsIHRoaXMudmFsdWUsIHRoaXMucm93LmdldERhdGEoKSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pZDtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS50aXRsZTtcclxuICB9XHJcblxyXG4gIGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5nZXRSb3coKS5pbmRleCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaXNBZGRhYmxlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLmlzRWRpdGFibGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=