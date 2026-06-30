module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'flora-bg': '#0f1a10',
                'flora-bg2': '#141f14',
                'flora-bg3': '#1a2a1b',
                'flora-card': '#1b2c1c',
                'flora-green': '#4caf50',
                'flora-glow': '#66bb6a',
                'flora-muted': '#8a9e8b',
                'flora-border': '#2a3d2b',
                'flora-gold': '#f5c842',
                'flora-pink': '#e91e8c',
            },
            fontFamily: {
                playfair: ["'Playfair Display'", "serif"],
                inter: ["'Inter'", "sans-serif"],
            },
        },
    },
    plugins: [],
};