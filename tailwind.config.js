/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                opacity: "opacity",
            },
            keyframes: {
                slideIn: {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-100%) rotate(0deg)",
                    },
                    "30%": {
                        opacity: 0.8,
                        transform:
                            "translateX(80%) translateY(100%) rotate(1000deg)",
                    },
                    "80%": {
                        opacity: 0.8,
                        transform:
                            "translateX(-80%) translateY(-100%) rotate(2400deg)",
                    },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
                slide: {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-30%) rotate(0deg)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0) rotate(360deg)",
                    },
                },
            },
            animation: {
                slideIn: "slideIn 5s ease-in-out",
                slide: "slide 1s ease-in-out",
            },
        },
    },
    plugins: [],
};
