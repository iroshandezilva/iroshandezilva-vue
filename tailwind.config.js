module.exports = {
    mode:'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        container: {
            center: true,
            padding: "15px"
        },
        extend: {
            colors: {
                blue: "#3340FF",
                black: "#4A4A4A",
                light: "#ECF2F9",
            },
            spacing: {
                '70': '70px',
            },
            fontFamily: {
                'proxima-lt': ['Proxima Nova Alt Th'],
                'proxima-rg': ['Proxima Nova Rg'],
                'proxima-md': ['Proxima Nova Th'],
                'proxima-bl': ['Proxima Nova Bl'],
            },
            boxShadow: {
                'card': '40px 30px 50px 0px rgba(11, 34, 56, 0.07) !important',
            },
            borderRadius: {
                'card': '20px',
                'full': '9999px',
            },
            fontSize: {
                'title': '4.375rem',
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}