import { ObsScene, ObsSource } from './obs-api';

function createSceneSource(): ObsSource {
    let scene = new ObsScene('myScene');
    let source = scene.addSource('mySource');
    return scene;
}

createSceneSource();