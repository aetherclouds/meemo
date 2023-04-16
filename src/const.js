import { isChrome } from "./util"

// TODO: pass an arg through dev script that enables this 
export const IN_DEV = true

// export const BROWSER = getBrowser()
export const IS_CHROME = isChrome()

export const EXTENSION_ALIAS = 'meemo'

export const DEFAULT_OPTIONS = {
    selectedLanguages: {
        description: 'The languages that the selected word will be matched against',
        type: 'languageSelection',
        value: ['de']
    },
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
    shouldPopupBePinned: {
        description: 'Whether popup should stay fixed to the screen rather than the page',
        type: 'bool',
        value: true,
    },
    useMotion: {
        description: 'Play animations and transitions, such as when moving your cursor or spawning the popup (disabling this should help if your computer is a literal potato)',
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
    // '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
}

export const REPLACEMENT_STRING = '$replace$'