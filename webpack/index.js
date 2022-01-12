import Aframe from './aframe';

class Main {
    constructor() {
        new Aframe();
    }
}

window.addEventListener('load', () => {
    new Main();
});
