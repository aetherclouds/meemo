
export const IS_DEBUG = true
export const EXTENSION_ALIAS = 'meemo'


export const DEFAULT_OPTIONS = {
    UISize: {
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
        value: []
    }
}

export const AVAILABLE_LANGUAGES = ['pt', 'de']
