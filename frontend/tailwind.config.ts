import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'


const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom-yellow": {
            "500": "#EDAE0A",
        },
    },
}
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'light-shade': '#A39CB1',
                'stroke': '#514078',
                'primary': '#CA175C',
                'primary-shade': '#760C35',
                'secondary-error': '#F43F5E',
                'secondary-shade': '#9F1239',
                'second': '#47019d',
                'shade-1': '#14082A',
                'second': '#47019d',
            },
            rotate: {
                'y-45': 'rotateY(45deg)',
            },
            backdropBlur: {
                xs: '2px',
            },
            fontFamily: {
                shabnam: ['Shabnam', 'sans-serif'],
                Shokoh : ['Shokoh']
            },
            animation: {
                'fade-slide': 'fadeSlide 0.5s ease-out forwards',
            },
            keyframes: {
                fadeSlide: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        }
    },
    content: [],
    plugins: [
        typography(),
        require("daisyui")
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
        ]
    }
}