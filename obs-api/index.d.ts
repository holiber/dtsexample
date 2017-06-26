
export class ObsScene {
    name: string;
    sources: string[];
    constructor (name: string);
    addSource(sourceName: string): ObsSource;
}

export class ObsSource {
    constructor (name: string);
}