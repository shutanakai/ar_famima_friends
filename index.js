AFRAME.registerComponent('box', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                liff.init({ liffId: process.env.LIFF_ID })
                    .then(() => {
                        liff.getProfile().then((profile) => {
                            alert(profile.displayName);
                        });
                    })
                    .catch((error) => {
                        alert(error);
                    });
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
AFRAME.registerComponent('duck', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                this.el.setAttribute('animation', 'animation="property: position; to: -40 8 -10; dur: 2000; easing: linear;');
                liff.init({ liffId: process.env.LIFF_ID })
                    .then(() => {
                        liff.getProfile().then((profile) => {
                            alert(profile.displayName);
                        });
                    })
                    .catch((error) => {
                        alert(error);
                    });
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected',
            () => {
                this.el.setAttribute('animation', 'animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true"');
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected-cleared',
            () => {
                this.el.setAttribute('animation', '');
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
            url: process.env.LIFF_URL,
            external: true
        });
    }
    liff.init({ liffId: process.env.LIFF_ID })
        .then(() => {
            alert(liff.getProfile().displayName);
        })
        .catch((error) => {
            console.log(error);
        });
});
