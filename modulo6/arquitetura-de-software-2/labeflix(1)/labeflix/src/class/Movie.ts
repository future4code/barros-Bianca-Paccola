export class Movie {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private duration_in_minutes: number,
        private year_of_release: number
    ) { }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getYearOfRelease() {
        return this.year_of_release;
    }

    getDurationInMinutes() {
        return this.duration_in_minutes
    }

    setId (newId:string) {
        this.id = newId
    }

    setTitle(newTitle:string) {
        this.title = newTitle
    }

    setDescription(newDescription:string) {
        this.description = newDescription
    }

    setYearOfRelease(newYear:number) {
        this.year_of_release = newYear
    }

    setDuration(newDuration:number) {
        this.duration_in_minutes = newDuration
    }
}