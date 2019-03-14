import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ng-raptorio-header',
    templateUrl: './toolbar.header.html',
    styleUrls: ['./toolbar.header.css'],
    inputs: [
        'params'
    ]
})
export class RaptorioHeader implements OnInit {
    params: any;
    
    constructor (){
        
    }
    
    ngOnInit() {
        console.log("paramsOnInit", this.params);
    }
}