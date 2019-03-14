import { Component } from '@angular/core';

@Component({
    selector: 'panel-users',
    templateUrl: './user-page.component.html',
    styles: [`{
        .mat-tab-header {
            padding-left: 30px;
        }
    }`]
})
export class PanelUserComponent {
    params: any;
    data: any;
    constructor() {
        this.data = [
            {id: 1, firstname: "Doudou", lastname: "FALL", age: "29", sex: "Homme", profile: "Developpeur JavaScript", resume: "Mon parcours, complété par ma passion pour internet et l'informatique, m'a permis d'acquérir les connaissances techniques et pratiques indispensables à l'exercice de ce métier. Maîtrisant différents langages informatiques", trinomial: ' DLF', thumbnail: "../assets/me_linked_in.png"},
            {id: 2, firstname: "Mohammed", lastname: "ZIAD", age: "30", profile: "Developpeur Microsoft", resume: "Motivation Dose is an app for motivation, so if you tired, desperate, or bored the app will supply you with a dose of motivational stories, quotes, and videos.", trinomial: 'MHZ'},
            {id: 3, firstname: "Tiffany", lastname: "GAMEZ", age: "24", profile: "Ingénieure Commerciale", resume: "De plus, une année de césure dans l'industrie aéronautique de septembre 0000 à juillet 0000 m'a permis de m'éveiller aux besoins en systèmes d'information du milieu ainsi qu'aux solutions qui peuvent y être apportées.", trinomial: 'TFG'},
            {id: 4, firstname: "Vanessa", lastname: "DUHOMME", age: "40", profile: "Directeur", resume: "Dans un premier temps rattaché au service de préparation technique, j'ai pris conscience des manques liés aux exigences de la gestion de configuration. J'ai donc proposé à la direction de développer un outil informatique d'aide à la gestion de configuration", trinomial: 'VDH'},
            {id: 3, firstname: "Christophe", lastname: "Martin", age: "45", profile: "Directeur Commerciale", resume: "’ai pu apprécier les qualités de votre entreprise lors du salon XX porte de Versailles, j’y ai perçu des produits innovants, ainsi qu’une une équipe commerciale impliquée, motivée et aux arguments convaincants ", trinomial: 'CM'}
        ];
    }
      
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
