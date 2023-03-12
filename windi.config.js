// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        extend: {
            transitionProperty: {
                // ring AND ring-offset
                'ring': '--tw-ring-offset-shadow, --tw-ring-shadow, -webkit-box-shadow, box-shadow, --tw-ring-offset-width',
                'input-field': 'width, --tw-ring-offset-shadow, --tw-ring-shadow, -webkit-box-shadow, box-shadow, --tw-ring-offset-width'
            },
        }
    },
    shortcuts: {
        'popup': 'absolute top-0 left-0 text-red-400' 
    },
})