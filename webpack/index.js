import Aframe from './Aframe';
import List from './List';

class Main {
    constructor() {
        new Aframe();
        new List();
    }
}

window.addEventListener('load', () => {
    new Main();
});
