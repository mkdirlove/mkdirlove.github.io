cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cocoon-plugin-common.Cocoon",
        "file": "plugins/cocoon-plugin-common/www/cocoon.js",
        "pluginId": "cocoon-plugin-common",
        "runs": true
    },
    {
        "id": "cocoon-plugin-ads-common.Ads",
        "file": "plugins/cocoon-plugin-ads-common/www/cocoon_ads.js",
        "pluginId": "cocoon-plugin-ads-common",
        "runs": true
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cocoon-plugin-common": "1.0.2",
    "cocoon-plugin-ads-common": "1.0.3",
    "cocoon-plugin-ads-android-common": "1.0.4",
    "cocoon-plugin-ads-android-admob": "1.0.11",
    "com.ludei.defaultres.android": "1.0.1",
    "com.ludei.usericon.android": "1.0.1",
    "com.ludei.usersplash.android": "1.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});