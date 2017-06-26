function ObsSource(name) {
    this.name = name;
    console.log('source created', name);
}
export { ObsSource };



function ObsScene(name) {
    this.name = name;
}
ObsScene.prototype.addSource = function (name) {
    return new ObsSource(name);
}
export { ObsScene };