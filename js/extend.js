
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name
        this.location = location
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }

}


class Instructor extends TeamMember {
    name; designation = 'Web Course Instructor'
    team = ' web team'

    constructor(name, location) {
        super(name, location)
    }

    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }

}

class Developer extends TeamMember {

    designation = 'Web Course Instructor'
    team = ' web team'
    tech;

    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`);
    }
    release(version) {
        console.log(`please release the version${version}`);
    }

}

class jobPlacement extends TeamMember {

    designation = 'Job Placement Commandos'
    team = ' Job Placement team'
    region;

    constructor(name, location, region) {
        super(name, location)
        this.region = region
    }
    providerResume(feature) {
        console.log(`please develop the ${feature}`);
    }

    prepareStudent(version) {
        console.log(`please release the version${version}`);
    }

}


const anik = new Developer('Anik', 'sirajgong', 'react')
console.log(anik);
anik.provideFeedback()

const ranvir = new jobPlacement('Ranvir', 'Delhi', 'India')
console.log(ranvir);