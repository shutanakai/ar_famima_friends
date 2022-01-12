class Aframe {
    constructor() {
        AFRAME.registerComponent('box', {
            // schema: {},

            init: function () {
                this.el.addEventListener(
                    'click',
                    () => {
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
        AFRAME.registerComponent('duck', {
            // schema: {},

            init: function () {
                this.el.addEventListener(
                    'click',
                    () => {
                        liff.init({ liffId: process.env.LIFF_ID }).then(() => {
                            liff.getProfile().then((profile) => {
                                location.href = `./get.html?id=duck&name=${profile.displayName}`;
                            });
                        });
                    },
                    false
                );
            }
        });
        AFRAME.registerComponent('deer', {
            // schema: {},

            init: function () {
                this.el.addEventListener(
                    'click',
                    () => {
                        liff.init({ liffId: process.env.LIFF_ID }).then(() => {
                            liff.getProfile().then((profile) => {
                                location.href = `./get.html?id=deer&name=${profile.displayName}`;
                            });
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
                    url: process.env.LIFF_URL,
                    external: true
                });
            }
        });
    }
}

export default Aframe;
