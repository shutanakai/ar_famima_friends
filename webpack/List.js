import Vue from 'vue';

class List {
    constructor() {
        new Vue({
            el: '#list',
            data: {
                userName: ''
            },
            mounted: function () {
                this.userName = this.login();
            },
            methods: {
                login: function () {
                    liff.init({ liffId: process.env.LIFF_ID }).then(() => {
                        liff.getProfile().then((profile) => {
                            return profile.displayName;
                        });
                    });
                }
            }
        });
    }
}

export default List;
