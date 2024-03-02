/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                lightGrayishBlue: "#f7f8fc",
                moderateBlue: "#6674cc",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
