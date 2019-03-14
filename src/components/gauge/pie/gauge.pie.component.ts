import { Component, OnInit, OnChanges, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as d3 from "d3";
import { DataService } from './gauge.pie.service';
import { setInterval } from 'timers';

@Component({
    selector: 'gauge-pie-component',
    templateUrl: './gauge.pie.component.html',
    styles: [`
    #pieChartContainer {
        padding: 20px;
    }
  `]
})
export class RaptorPieGaugeComponent implements AfterViewInit, OnInit {
    @ViewChild("pieChart") element: ElementRef;
    percent: number;
    pie: any;
    height: number;
    width: number;
    outerRadius: number;
    innerRadius: number;
    color: Array<string>;
    arcLine: any;
    arcDummy: any;
    arc: any;
    svg: any;
    path: any;
    pathForeground: any;
    pathDummy: any;
    endCircle: any;
    middleTextCount: any;
    label: any;
    private htmlElement: HTMLElement;
    oldValue: number;
    currentValue: number = 20;
    data: number = (this.currentValue / 20) * (2 * Math.PI);

    ngOnInit() {

    }

    constructor() {
        this.percent = 55;
        this.height = 200;
        this.width = 200;
        this.outerRadius = (this.width / 2) - 10;
        this.innerRadius = this.outerRadius - 6;
        this.pie = d3.pie()
            .sort(null);
        this.color = ['rgba(127, 15, 126, 0.9)', '#D3D3D3'];

        this.arcLine = d3.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.outerRadius)
            .startAngle(0);

        this.arcDummy = d3.arc()
            .innerRadius((this.outerRadius - this.innerRadius) / 2 + this.innerRadius)
            .outerRadius((this.outerRadius - this.innerRadius) / 2 + this.innerRadius)
            .startAngle(0);

        this.arc = d3.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.outerRadius)
            .startAngle(0)
            .endAngle(2 * Math.PI);
    }

    public arcTweenOld(transition, percent, oldValue) {
        transition.attrTween("d", function (d) {
            console.log('d', d);

            var newAngle = (percent / 100) * (2 * Math.PI);

            var interpolate = d3.interpolate(d.endAngle, newAngle);

            var interpolateCount = d3.interpolate(oldValue, percent);

            return function (t) {
                d.endAngle = interpolate(t);
                var pathForegroundCircle = this.arcLine(d);

                this.middleTextCount.text(Math.floor(interpolateCount(t)) + '%');

                return pathForegroundCircle;
            };
        });
    };

    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.svg = d3.select(this.htmlElement)
            .append("svg")
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('class', 'shadow')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

        //background
        this.path = this.svg.append('path')
            .attr('d', this.arc)
            .style('fill', this.color[1]);

        this.pathForeground = this.svg.append('path')
            .datum({ endAngle: this.data })
            .attr('d', this.arcLine)
            .style('fill', this.color[0]);

        this.middleTextCount = this.svg.append('text')
            .datum(this.currentValue)
            .html(function (d) {
                return d;
            })
            .attr('class', 'middleText')
            .attr('text-anchor', 'middle')
            .attr('dy', '16')
            .attr('dx', '0')
            .style('fill', this.color[0])
            .style('font-size', '70px');
        
        this.label = this.svg.append('text')
        .html(function (d) {
            return 'Java';
        })
        .attr('class', 'middleText')
        .attr('text-anchor', 'middle')
        .attr('dy', '50')
        .attr('dx', '0')
        .style('fill', this.color[0])
        .style('font-size', '30px');

        this.oldValue = 0;
        this.oldValue = this.percent;
        console.log('pathForeground', this.pathForeground);
        //this.percent = (Math.random() * 60) + 20;
        //this.arcTweenOld.attrTween("d", function (d) {
        //console.log('d',d);
        //this.pathForeground.transition()
        //.duration(750)

        //.call(this.arcTweenOld, this.percent, this.oldValue);


        //setTimeout(this.animate, 3000);
    }

}

