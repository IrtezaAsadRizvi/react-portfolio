/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    theme: {
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
                'move': 'move 6s linear infinite both',
                'spin': 'spin 6s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                move: {
                    '0%': { transform: 'perspective(1000px) scale(1.05) rotateX(var(--main-angle)) rotateY(calc(var(--main-angle) * -1))' },
                    '12.5%': { transform: 'perspective(1000px) scale(1.05) rotateX(var(--secondary-angle)) rotateY(0)' },
                    '25%': { transform: 'perspective(1000px) scale(1.05) rotateX(var(--main-angle)) rotateY(var(--main-angle))' },
                    '37.5%': { transform: 'perspective(1000px) scale(1.05) rotateX(0) rotateY(var(--secondary-angle))' },
                    '50%': { transform: 'perspective(1000px) scale(1.05) rotateX(calc(var(--main-angle) * -1)) rotateY(var(--main-angle))' },
                    '62.5%': { transform: 'perspective(1000px) scale(1.05) rotateX(calc(var(--secondary-angle) * -1)) rotateY(0)' },
                    '75%': { transform: 'perspective(1000px) scale(1.05) rotateX(calc(var(--main-angle) * -1)) rotateY(calc(var(--main-angle) * -1))' },
                    '87.5%': { transform: 'perspective(1000px) scale(1.05) rotateX(0) rotateY(calc(var(--secondary-angle) * -1))' },
                    '100%': { transform: 'perspective(1000px) scale(1.05) rotateX(var(--main-angle)) rotateY(calc(var(--main-angle) * -1))' },
                },
                spin: {
                    '0%': { transform: 'perspective(1000px) scale(1.05) rotateY(0deg)' },
                    '100%': { transform: 'perspective(1000px) scale(1.05) rotateY(360deg)' },
                },
            },
            content: {
                'starIcon': 'url("../public/assets/images/star.svg")',
                'starBigIcon': 'url("../public/assets/images/star-big.png")',
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(353deg, rgba(29,33,76,1) 0%, rgba(250,193,39,1) 75%)',
            },
        },
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [
        function ({ addBase }) {
            addBase({
                ':root': {
                    '--main-angle': '15deg',
                    '--secondary-angle': '22deg',
                },
            });
        },
    ]
}