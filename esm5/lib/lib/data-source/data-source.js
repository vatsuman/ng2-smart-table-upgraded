import { Subject } from 'rxjs';
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort(),
        }); });
    };
    return DataSource;
}());
export { DataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0I7SUFBQTtRQUVZLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQXdIakQsQ0FBQztJQS9HQyw0QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLElBQWdCO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIs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QWUsQ0FBQyxJQUFJLENBQUM7WUFDOUQsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRTtTQUNyQixDQUFDLEVBTm9DLENBTXBDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUE3SEQsSUE2SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2VkU291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcm90ZWN0ZWQgb25BZGRlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJvdGVjdGVkIG9uVXBkYXRlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJvdGVjdGVkIG9uUmVtb3ZlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBhYnN0cmFjdCBnZXRBbGwoKTogUHJvbWlzZTxhbnk+O1xuICBhYnN0cmFjdCBnZXRFbGVtZW50cygpOiBQcm9taXNlPGFueT47XG4gIGFic3RyYWN0IGdldFNvcnQoKTogYW55O1xuICBhYnN0cmFjdCBnZXRGaWx0ZXIoKTogYW55O1xuICBhYnN0cmFjdCBnZXRQYWdpbmcoKTogYW55O1xuICBhYnN0cmFjdCBjb3VudCgpOiBudW1iZXI7XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3JlZnJlc2gnKTtcbiAgfVxuXG4gIGxvYWQoZGF0YTogQXJyYXk8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdsb2FkJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25DaGFuZ2VkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25BZGRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9uQWRkZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvblVwZGF0ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vblVwZGF0ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvblJlbW92ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vblJlbW92ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25BZGRlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3ByZXBlbmQnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPbkFkZGVkKGVsZW1lbnQpO1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnYXBwZW5kJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgYWRkKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25BZGRlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2FkZCcpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uUmVtb3ZlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3JlbW92ZScpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZShlbGVtZW50OiBhbnksIHZhbHVlczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPblVwZGF0ZWQoZWxlbWVudCk7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCd1cGRhdGUnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBlbXB0eSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnZW1wdHknKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBzZXRTb3J0KGNvbmY6IEFycmF5PGFueT4sIGRvRW1pdD86IGJvb2xlYW4pIHtcbiAgICBpZiAoZG9FbWl0KSB7XG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3NvcnQnKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoY29uZjogQXJyYXk8YW55PiwgYW5kT3BlcmF0b3I/OiBib29sZWFuLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdmaWx0ZXInKTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWx0ZXIoZmllbGRDb25mOiB7fSwgYW5kT3BlcmF0b3I/OiBib29sZWFuLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdmaWx0ZXInKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdpbmcocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIsIGRvRW1pdD86IGJvb2xlYW4pIHtcbiAgICBpZiAoZG9FbWl0KSB7XG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3BhZ2luZycpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogbnVtYmVyLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdwYWdlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGVtaXRPblJlbW92ZWQoZWxlbWVudDogYW55KSB7XG4gICAgdGhpcy5vblJlbW92ZWRTb3VyY2UubmV4dChlbGVtZW50KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBlbWl0T25VcGRhdGVkKGVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMub25VcGRhdGVkU291cmNlLm5leHQoZWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9uQWRkZWQoZWxlbWVudDogYW55KSB7XG4gICAgdGhpcy5vbkFkZGVkU291cmNlLm5leHQoZWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9uQ2hhbmdlZChhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuZ2V0RWxlbWVudHMoKS50aGVuKChlbGVtZW50cykgPT4gdGhpcy5vbkNoYW5nZWRTb3VyY2UubmV4dCh7XG4gICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50cyxcbiAgICAgIHBhZ2luZzogdGhpcy5nZXRQYWdpbmcoKSxcbiAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoKSxcbiAgICAgIHNvcnQ6IHRoaXMuZ2V0U29ydCgpLFxuICAgIH0pKTtcbiAgfVxufVxuIl19