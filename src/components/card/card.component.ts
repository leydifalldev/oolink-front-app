import { Component } from '@angular/core';

@Component({
    selector: 'ng-raptorio-card',
    templateUrl: './card.component.html',
    styles: [`
        .raptorio-card {
            display: flex;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
            transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
            height: 215px;
        }
        img[raptorio-card-img] {
            height: 120px;
            width: 120px;
            border-radius: 60px;
        }
        .card-container {
            display: flex;
        }
        .raptorio-card-section-1 {
            width: 30%;
            background-color: #F5F5F5;
            text-align: center;
            padding: 35px;
        }
        .raptorio-card-section-2 {
            width: 70%;
            text-align: center;
            padding: 16px;
        }
        .raptorio-card-resume {
            font-size: 13px;
            color: #757575;
        }
        :host{
            width: 100%;
        }`
    ],
    inputs: [
        'info'
    ]
})
export class RaptorioCardComponent {
    info: any;
    constructor () {
        console.log('info', this.info);
    }
}