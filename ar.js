AFRAME.registerComponent('box', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                console.log(process.env);
                liff.init({ liffId: '1656788750-0YlgEZw2' })
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
                liff.init({ liffId: '1656788750-0YlgEZw2' })
                    .then(() => {
                        liff.getProfile().then((profile) => {
                            liff.openWindow({
                                url: `https://stupefied-torvalds-7636a6.netlify.app/get.html?id=duck&name=${profile.displayName}`,
                                external: true
                            });
                        });
                    })
                    .catch((error) => {
                        alert(error);
                    });
            },
            false
        );
    }
});

document.addEventListener('load', function () {
    const canGetUserMediaVersion = 14.3;
    if (liff.getOS() === 'ios' && parseFloat(liff.getLineVersion()) < canGetUserMediaVersion) {
        liff.openWindow({
            url: 'https://liff.line.me/1656788750-0YlgEZw2',
            external: true
        });
    }
});
