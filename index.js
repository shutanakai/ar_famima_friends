AFRAME.registerComponent('box', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                location.href = url;
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected',
            () => {
                console.log(this);
                this.el.setAttribute('color', '#0000FF');
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected-cleared',
            () => {
                this.el.setAttribute('color', '#FFFFFF');
            },
            false
        );
    }

    // update: function () {
    //     // Do something when component's data is updated.
    // },

    // remove: function () {
    //     // Do something the component or its entity is detached.
    // },

    // tick: function (time, timeDelta) {
    //     // Do something on every scene tick or frame.
    // }
});
AFRAME.registerComponent('apple', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                this.el.setAttribute('visible', false);
            },
            false
        );
    }
});

AFRAME.registerComponent('cage', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                console.log('clicked');
                // location.href = './get.html';
            },
            false
        );
    }
});

let url = 'https://www.google.com/';

document.addEventListener('load', function () {
    const canGetUserMediaVersion = 14.3;
    if (liff.getOS() === 'ios' && parseFloat(liff.getLineVersion()) < canGetUserMediaVersion) {
        liff.openWindow({
            url: 'https://www.google.com/',
            external: true
        });
    }
    liff.init({ liffId: process.env.LIFF_ID })
        .then(() => {
            console.log('Success! you can do something with LIFF API here.');
        })
        .catch((error) => {
            console.log(error);
        });
    url = 'https://www.yahoo.co.jp/';
});
