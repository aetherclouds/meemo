// https://github.com/samrum/vite-plugin-web-extension?tab=readme-ov-file#usage
export default function generateExtensionManifest(targetBrowser) {
    const isFirefox = (targetBrowser == 'firefox')
    return {
        "manifest_version": isFirefox ? 2 : 3,

        "name": "meemo",
        "description": "A couple versatile tools aimed at helping language learners!",
        "version": process.env.npm_package_version,
        
        "icons": {
            "48": "assets/icons/ext-icon48.png",
            "128": "assets/icons/ext-icon128.png"
        },
        
        ...(isFirefox && {"browser_action": {}}),
        ...(!isFirefox && {"action": {}}),
    
        "permissions": ["storage"],
        
        "options_ui": {
            "page": "src/html/options.html",
            "open_in_tab": false
        },
        "background": isFirefox ? {
            "scripts": ["src/js/backgroundScript/background.mjs"],
        } : {
            "service_worker": "src/js/backgroundScript/background.mjs",
            "type": "module"
        },
        "content_scripts": [
            {
            "js": [ "src/js/contentScript/content.js"],
            "match_about_blank": true,
            "matches": [ "http://*/*", "https://*/*", "ftp://*/*", "file:///*" ],
            "run_at": "document_end"
            }
        ],
        "web_accessible_resources": isFirefox ? [

            "assets/flags/*.svg", 
            "assets/data/dicts/*.csv", 
            "assets/icons/*", 
            "assets/**/*.js", 
            "assets/*.js", 
            "assets/*.css"
        ] : [{
            "resources": [  
                "assets/flags/*.svg", 
                "assets/data/dicts/*.csv", 
                "assets/icons/*", 
                "assets/**/*.js", 
                "assets/*.js", 
                "assets/*.css"
            ],
            "matches": [ "<all_urls>"]
        }],
        
        ...(isFirefox && {"browser_specific_settings": {
            "gecko": {
                "id": "azethercloudschrm@gmail.com"
              }
            }}
        )
    }
}
