import { Component } from '@angular/core';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
    user: any;
    details: any;

    constructor() {
        this.user = {
            thumbnail: "../assets/me_linked_in.png"
        }
        this.details = {
            skills: {
                groups: [
                    [
                        { technologie: 'Angular', personal_eval: 17, test_eval: 19 },
                        { technologie: 'React', personal_eval: 12, test_eval: 12 },
                        { technologie: 'Vue', personal_eval: 16, test_eval: 13 },
                        { technologie: 'ES6', personal_eval: 18, test_eval: 20 },
                        { technologie: 'Backbone', personal_eval: 13, test_eval: 10 },
                        { technologie: 'Angular', personal_eval: 17, test_eval: 19 },
                        { technologie: 'React', personal_eval: 12, test_eval: 12 },
                        { technologie: 'Vue', personal_eval: 16, test_eval: 13 },
                        { technologie: 'ES6', personal_eval: 18, test_eval: 20 },
                        { technologie: 'Backbone', personal_eval: 13, test_eval: 10 },
                    ],
                    [
                        { technologie: 'Java', personal_eval: 17, test_eval: 19 },
                        { technologie: 'C++', personal_eval: 12, test_eval: 12 },
                        { technologie: 'Python', personal_eval: 12, test_eval: 13 },
                        { technologie: 'Golang', personal_eval: 18, test_eval: 20 },
                        { technologie: 'C', personal_eval: 13, test_eval: 10 },
                        { technologie: '.NET', personal_eval: 14, test_eval: 10 },
                        { technologie: 'Node', personal_eval: 12, test_eval: 13 }
                    ],
                    [
                        { technologie: 'Linux', personal_eval: 10, test_eval: 11 },
                        { technologie: 'Windows', personal_eval: 12, test_eval: 12 },
                        { technologie: 'MacOS', personal_eval: 12, test_eval: 13 },
                        { technologie: 'Arduino', personal_eval: 18, test_eval: 20 },
                        { technologie: 'Rasberry PI', personal_eval: 13, test_eval: 10 },
                        { technologie: 'Cent OS', personal_eval: 14, test_eval: 10 },
                        { technologie: 'Ubuntu', personal_eval: 12, test_eval: 13 },
                        { technologie: 'Mint', personal_eval: 13, test_eval: 10 },
                        { technologie: 'Dreawer', personal_eval: 14, test_eval: 10 },
                        { technologie: 'Lubuntu', personal_eval: 12, test_eval: 13 }
                    ]
                ]
            }
        }
    }

}