import { Row } from './row';
import { Column } from './column';
export class DataSet {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc2V0L2RhdGEtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE9BQU8sT0FBTztJQVVsQixZQUFZLE9BQW1CLEVBQUUsRUFBWSxjQUFzQjtRQUF0QixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQU56RCxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFFdEIsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUdyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFh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LFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxRQUFhO1FBQ3pCLEtBQUssTUFBTSxFQUFFLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNldCB7XG5cbiAgbmV3Um93OiBSb3c7XG5cbiAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJvdGVjdGVkIGNvbHVtbnM6IEFycmF5PENvbHVtbj4gPSBbXTtcbiAgcHJvdGVjdGVkIHJvd3M6IEFycmF5PFJvdz4gPSBbXTtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkUm93OiBSb3c7XG4gIHByb3RlY3RlZCB3aWxsU2VsZWN0OiBzdHJpbmcgPSAnZmlyc3QnO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEFycmF5PGFueT4gPSBbXSwgcHJvdGVjdGVkIGNvbHVtblNldHRpbmdzOiBPYmplY3QpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoY29sdW1uU2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcblxuICAgIHRoaXMuY3JlYXRlTmV3Um93KCk7XG4gIH1cblxuICBzZXREYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY3JlYXRlUm93cygpO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0Um93cygpOiBBcnJheTxSb3c+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzWzBdO1xuICB9XG5cbiAgZ2V0TGFzdFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvd3NbdGhpcy5yb3dzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZmluZFJvd0J5RGF0YShkYXRhOiBhbnkpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvd3MuZmluZCgocm93OiBSb3cpID0+IHJvdy5nZXREYXRhKCkgPT09IGRhdGEpO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XG4gICAgY29uc3QgcHJldmlvdXNJc1NlbGVjdGVkID0gcm93LmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuXG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcHJldmlvdXNJc1NlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KTogUm93IHtcbiAgICByb3cuaXNTZWxlY3RlZCA9ICFyb3cuaXNTZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c1JvdygpOiBSb3cge1xuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvdyA/IHRoaXMuc2VsZWN0ZWRSb3cuaW5kZXggOiAwO1xuICAgICAgaWYgKGluZGV4ID4gdGhpcy5yb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLnJvd3MubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1tpbmRleF0pO1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Rmlyc3RSb3coKTogUm93IHtcbiAgICBpZiAodGhpcy5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1swXSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RMYXN0Um93KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbdGhpcy5yb3dzLmxlbmd0aCAtIDFdKTtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICAgIH1cbiAgfVxuXG4gIHdpbGxTZWxlY3RGaXJzdFJvdygpIHtcbiAgICB0aGlzLndpbGxTZWxlY3QgPSAnZmlyc3QnO1xuICB9XG5cbiAgd2lsbFNlbGVjdExhc3RSb3coKSB7XG4gICAgdGhpcy53aWxsU2VsZWN0ID0gJ2xhc3QnO1xuICB9XG5cbiAgc2VsZWN0KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMuZ2V0Um93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWxsU2VsZWN0KSB7XG4gICAgICBpZiAodGhpcy53aWxsU2VsZWN0ID09PSAnZmlyc3QnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Rmlyc3RSb3coKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLndpbGxTZWxlY3QgPT09ICdsYXN0Jykge1xuICAgICAgICB0aGlzLnNlbGVjdExhc3RSb3coKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud2lsbFNlbGVjdCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBjcmVhdGVOZXdSb3coKSB7XG4gICAgdGhpcy5uZXdSb3cgPSBuZXcgUm93KC0xLCB7fSwgdGhpcyk7XG4gICAgdGhpcy5uZXdSb3cuaXNJbkVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb2x1bW5zIGJ5IG1hcHBpbmcgZnJvbSB0aGUgc2V0dGluZ3NcbiAgICogQHBhcmFtIHNldHRpbmdzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVDb2x1bW5zKHNldHRpbmdzOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHNldHRpbmdzKSB7XG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKG5ldyBDb2x1bW4oaWQsIHNldHRpbmdzW2lkXSwgdGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcm93cyBiYXNlZCBvbiBjdXJyZW50IGRhdGEgcHJlcGFyZWQgaW4gZGF0YSBzb3VyY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVJvd3MoKSB7XG4gICAgdGhpcy5yb3dzID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5yb3dzLnB1c2gobmV3IFJvdyhpbmRleCwgZWwsIHRoaXMpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19