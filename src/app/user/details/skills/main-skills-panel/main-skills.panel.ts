import {Component} from '@angular/core';

@Component ({
    selector: 'main-skills-panel',
    templateUrl: './main-skills.panel.html'
})
export class UserMainSkillsPanelComponent {
    user: any;
    skills: any;
    mainSkills: any;

    constructor() {
        this.mainSkills = [{
            name: 'Java',
            value: 10,
            total: 20 
        }]
    }


}