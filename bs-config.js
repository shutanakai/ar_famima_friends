/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    ui: {
        port: 5001
    },
    files: ['./dist/**/*'],
    server: {
        baseDir: './dist',
        index: 'start.html',
        serveStaticOptions: {
            extensions: ['html']
        }
    },
    port: 5000
};
