export const IS_DEBUG = true // FIXME:

export const EXTENSION_ALIAS = 'meemo'

export const DEFAULT_OPTIONS = {
    shouldStartEnabled: {
        description: 'Whether the extension should be enabled by default upon opening the browser',
        type: 'bool',
        value: true,
    },
    UIScale: {
        description: 'Size of the hover utility',
        type: 'float',
        value: 1
    },
    distanceToMouse: {
        description: 'Distance between from the hover utility to the cursor',
        type: 'float',
        value: 8
    },
    selectedLanguages: {
        description: 'The languages that the selected word will be matched against',
        type: 'languageSelection',
        value: ['de']
    },
    shouldPopupBePinned: {
        description: 'Whether popup should stay fixed to the screen rather than the page',
        type: 'bool',
        value: true,
    },

}

export const AVAILABLE_LANGUAGES = ['pt', 'de']

export const HTML_ESCAPE_LIST = {
    // '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
}

export const REPLACEMENT_STRING = '$replace$'
