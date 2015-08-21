module.exports = {

    prompts: false,

    /* =================================
     * Template Data
     */

    // These are variables will be accessible via our templates
    templateData: {

        /* -----------------------------
         * AlloyEditor Information
         */

        alloyeditor: {
            // AlloyEditor version
            version: '0.5.0'
        },

        /* -----------------------------
         * Site Information
         */

        site: {
            // Website version
            version: '2.6.x',
            isLastVersion: true,

            // Production URL
            url: '//alloyeditor.com',

            // Github branch
            githubUrl: 'https://github.com/liferay/alloy-editor/',

            // Basic info
            title: 'Alloy Editor',
            description: 'Alloy Editor is a modern WYSIWYG editor built on top of CKEditor, designed to create modern and gorgeous web content.'

        },

        /* -----------------------------
         * Helpers
         */

        // Get the absolute URL of the assets folder
        getAssetsUrl: function() {
            if (this.site.isLastVersion) {
                return "" + this.site.url + "/website";
            } else {
                return "" + this.site.url + "/versions/" + this.site.version + "/website";
            }
        },

        // Get AlloyEditor's version
        getAlloyEditorVersion: function() {
            return this.alloyeditor.version;
        },

        // Get the prepared site/document title
        getPreparedTitle: function() {

            // if we have a document title, then we should use that and suffix the site's title into it
            if (this.document.title) {
                if (this.document.category) {
                    return "" + this.document.category + " - " + this.document.title + " | " + this.site.title;
                } else {
                    return "" + this.document.title + " | " + this.site.title;
                }
            } // if our document does not have it's own title, then we should just use the site's title
            else {
                return this.site.title;
            }
        },

        // Get the prepared site/document description
        getPreparedDescription: function() {
            // if we have a document description, then we should use that, otherwise use the site's description
            return this.document.description || this.site.description;
        },

        // Get the download URL for this Alloy version
        getDownloadUrl: function() {
            return "https://github.com/liferay/alloy-editor/releases/download/" + "v" + this.alloyeditor.version + "/alloy-editor-" + this.alloyeditor.version + ".zip";
        },

        // Get the absolute URL of the website
        getSiteUrl: function() {
            if (this.site.isLastVersion) {
                return "" + this.site.url;
            } else {
                return "" + this.site.url + "/versions/" + this.site.version;
            }
        }
    },

    /* =================================
     * Collections
     */

    collections: {
        // Get all guides sorted by type & alphabetical order
        guides: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/guides'
                }
            }, [{
                order: 1,
                title: 1
            }]);
        },

        // Get all features sorted by category & alphabetical order
        landing_features: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/landing_features'
                }
            }, [{
                order: 1,
                title: 1
            }]);
        },

        // Get all features sorted by category & alphabetical order
        features: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/features'
                }
            }, [{
                category: 1,
                title: 1
            }]);
        },

        // Get all updates sorted by version
        updates: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/updates/v_'
                }
            }, [{
                version: -1
            }]);
        }
    },

    /* =================================
     * Environments
     */

    environments: {
        development: {
            templateData: {

                /* -----------------------------
                 * Site Information
                 */

                // Development URL
                site: {
                    url: 'http://localhost:9778'
                },

                /* -----------------------------
                 * Helpers
                 */

                // Get the absolute Development URL of the website
                getSiteUrl: function() {
                    return "" + this.site.url;
                },

                // Get the absolute Development URL of the assets folder
                getAssetsUrl: function() {
                    return "" + this.site.url + "/website";
                }
            }
        }
    }
};