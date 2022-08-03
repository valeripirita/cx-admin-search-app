/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#D7E4F2',
                    400: '#1F6BBF',
                    500: '#5F55AA',
                    800: '#03203F'
                },
                neutral: {
                    100: '#E5E5E5',
                    200: '#CAD0E1'
                }
            }
        }
    },
    plugins: []
};
