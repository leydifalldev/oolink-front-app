import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as componentdef from '../../../../../components/raptorio.component.def';
import * as appdef from '../../../../app.definitions';
import SkillsGroup from './skills-group.class';


@Component({
    selector: 'skills-group-panel',
    templateUrl: './skills-group-panel.component.html',
    styles: [`
    mat-table {
      width: 70%;
    }
    raptor-radar-chart {
      width: 30%;
    }
    :host{
        width: 100%;
    }`
],
    inputs: [
      'skillsGroupInput'
    ]
})

export class SkillsGroupPanelComponent extends DataSource<any> implements OnInit{
    displayedColumns = ['technologie', 'personal_eval', 'test_eval'];
    dataSource = new ExampleDataSource();
    dataChart: componentdef.IRadialParams;
    skillsGroupInput: Array<appdef.ISkills>;
    group: any;
    
    constructor () {
      super();
    }

    connect(): Observable<EvalTechno[]> {
      return Observable.of(this.skillsGroupInput);
    }

    disconnect() {}

    ngOnInit() {
      //console.log();
      let personal_eval = [];
      let test_eval = [];
      this.group = new SkillsGroup(this.skillsGroupInput);
      console.log("group.getRadarChart", this.group.getRadarChart());
      this.dataChart = {
        labels: [],
        data: this.skillsGroupInput,
        type: 'radar'
      };
      console.log("dataChart", this.dataChart);
    }
}

export interface EvalTechno {
    technologie: string;
    personal_eval: number;
    test_eval: number;
  }

  /**
   * Data source to provide what data should be rendered in the table. The observable provided
   * in connect should emit exactly the data that should be rendered by the table. If the data is
   * altered, the observable should emit that new set of data on the stream. In our case here,
   * we return a stream that contains only one set of data that doesn't change.
   */
  export class ExampleDataSource  {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    
  
    
  }