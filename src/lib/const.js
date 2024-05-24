import { getBrowserAction, getBrowserStorageSync, isChrome } from "./util"

// export const BROWSER = getBrowser()
export const IS_CHROME = isChrome()

export const DEFAULT_OPTIONS = {
    selectedLanguages: {
        description: 'Languages the hovered word will be matched against',
        type: 'languageSelection',
        value: ['de']
    },
    shouldStartEnabled: {
        description: 'Enable extension on browser startup',
        type: 'bool',
        value: true,
    },
    UIScale: {
        description: 'Size of the hover utility',
        type: 'float',
        value: 1
    },
    distanceToMouse: {
        description: 'Distance between the hover utility and the cursor, in pixels',
        type: 'float',
        value: 8
    },
    shouldPopupBePinned: {
        description: 'Whether the popup should pin to the screen rather than the page',
        type: 'bool',
        value: true,
    },
    useMotion: {
        description: 'Play animations and transitions, disable for faster interaction',
        type: 'bool',
        value: true,
    }

}
// quick hack to retain object order. we only need it for display in the options page so this is fine
export const OPTION_ORDER = Object.keys(DEFAULT_OPTIONS)

export const AVAILABLE_LANGUAGES = [
    // 'pt', 
    'de',
]

export const HTML_ESCAPE_LIST = {
    '<': '&lt;',
    '>': '&gt;',
}

export const REPLACEMENT_STRING = '$replace$'

export const browserAction = getBrowserAction()
export const browserStorageSync = getBrowserStorageSync()