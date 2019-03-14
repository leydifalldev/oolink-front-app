export default class SkillsGroup {
    private personal_eval = [];
    private test_eval = [];
    private technologie = [];

    constructor (public group) {
        group.forEach((d) => {
            this.personal_eval.push(d.personal_eval);
            this.test_eval.push(d.test_eval);
            this.technologie.push(d.technologie);
        });
    }

    getRadarChart() {
        return {
            type : 'radar',
            labels: this.technologie,
            data: [
                this.test_eval,
                this.personal_eval
            ]
        }
    }

    getLabelsChart() {
        return this.technologie;
    }
}