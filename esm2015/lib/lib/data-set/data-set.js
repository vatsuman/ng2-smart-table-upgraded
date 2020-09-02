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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc2V0L2RhdGEtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE9BQU8sT0FBTztJQVVsQixZQUFZLE9BQW1CLEVBQUUsRUFBWSxjQUFzQjtRQUF0QixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQU56RCxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFFdEIsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUdyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFh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LFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxRQUFhO1FBQ3pCLEtBQUssTUFBTSxFQUFFLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVNldCB7XHJcblxyXG4gIG5ld1JvdzogUm93O1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByb3RlY3RlZCBjb2x1bW5zOiBBcnJheTxDb2x1bW4+ID0gW107XHJcbiAgcHJvdGVjdGVkIHJvd3M6IEFycmF5PFJvdz4gPSBbXTtcclxuICBwcm90ZWN0ZWQgc2VsZWN0ZWRSb3c6IFJvdztcclxuICBwcm90ZWN0ZWQgd2lsbFNlbGVjdDogc3RyaW5nID0gJ2ZpcnN0JztcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogQXJyYXk8YW55PiA9IFtdLCBwcm90ZWN0ZWQgY29sdW1uU2V0dGluZ3M6IE9iamVjdCkge1xyXG4gICAgdGhpcy5jcmVhdGVDb2x1bW5zKGNvbHVtblNldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1JvdygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldFJvd3MoKTogQXJyYXk8Um93PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLnJvd3NbMF07XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0Um93KCk6IFJvdyB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIGZpbmRSb3dCeURhdGEoZGF0YTogYW55KTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLnJvd3MuZmluZCgocm93OiBSb3cpID0+IHJvdy5nZXREYXRhKCkgPT09IGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVzZWxlY3RBbGwoKSB7XHJcbiAgICB0aGlzLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIHJvdy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XHJcbiAgICBjb25zdCBwcmV2aW91c0lzU2VsZWN0ZWQgPSByb3cuaXNTZWxlY3RlZDtcclxuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcclxuXHJcbiAgICByb3cuaXNTZWxlY3RlZCA9ICFwcmV2aW91c0lzU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gIH1cclxuXHJcbiAgbXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpOiBSb3cge1xyXG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcm93LmlzU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJldmlvdXNSb3coKTogUm93IHtcclxuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93ID8gdGhpcy5zZWxlY3RlZFJvdy5pbmRleCA6IDA7XHJcbiAgICAgIGlmIChpbmRleCA+IHRoaXMucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLnJvd3MubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbaW5kZXhdKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFJvdygpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1swXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TGFzdFJvdygpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1t0aGlzLnJvd3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbGxTZWxlY3RGaXJzdFJvdygpIHtcclxuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdmaXJzdCc7XHJcbiAgfVxyXG5cclxuICB3aWxsU2VsZWN0TGFzdFJvdygpIHtcclxuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdsYXN0JztcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMuZ2V0Um93cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aWxsU2VsZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLndpbGxTZWxlY3QgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMud2lsbFNlbGVjdCA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMYXN0Um93KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53aWxsU2VsZWN0ID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOZXdSb3coKSB7XHJcbiAgICB0aGlzLm5ld1JvdyA9IG5ldyBSb3coLTEsIHt9LCB0aGlzKTtcclxuICAgIHRoaXMubmV3Um93LmlzSW5FZGl0aW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBjb2x1bW5zIGJ5IG1hcHBpbmcgZnJvbSB0aGUgc2V0dGluZ3NcclxuICAgKiBAcGFyYW0gc2V0dGluZ3NcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbHVtbnMoc2V0dGluZ3M6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBpZCBpbiBzZXR0aW5ncykge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2gobmV3IENvbHVtbihpZCwgc2V0dGluZ3NbaWRdLCB0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSByb3dzIGJhc2VkIG9uIGN1cnJlbnQgZGF0YSBwcmVwYXJlZCBpbiBkYXRhIHNvdXJjZVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgY3JlYXRlUm93cygpIHtcclxuICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICB0aGlzLnJvd3MucHVzaChuZXcgUm93KGluZGV4LCBlbCwgdGhpcykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==