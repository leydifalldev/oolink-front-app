import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/observable';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import 'rxjs/add/observable/of';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'raptorio-gridpanel',
    templateUrl: 'gridpanel.component.html',
    styleUrls: ['gridpanel.component.css'],
    inputs: [
        'params',
        'data'
    ]
})
export class RaptorioGridPanelComponent implements OnInit {
    params: any;
    data: any;
    length: number = 100;
    pageSize: number = 10;
    pageSizeOptions: Array<number> = [5, 10, 25, 100];
    dataTable: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    source: Source;
    columns = [
        {columnDef: 'ID', header: 'ID', cell: (row: any) => `${row.id}`}
    ];

    /** Column definitions in order */
    displayedColumns = this.columns.map(x => x.columnDef);

    constructor() {
        console.log("params", this.params);
        this.source = new Source(this.dataTable.asObservable());
    }

    ngOnInit() {
        console.log("params", this.data);
        this.dataTable.next(this.data);
    }
  
    // MdPaginator Output
    pageEvent: PageEvent;
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}

export class Source extends DataSource<any> {

    constructor (private dataTable: Observable<any>) {
        super();
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {
      return this.dataTable;//Observable.of(this.params.data);
    }
  
    disconnect() {}
  }