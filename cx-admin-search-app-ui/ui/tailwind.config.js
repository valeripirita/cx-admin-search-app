/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#D7E4F2',
                    300: '#EEF1FF',
                    400: '#1F6BBF',
                    500: '#5F55AA',
                    800: '#03203F'
                },
                neutral: {
                    100: '#E5E5E5',
                    200: '#F6F6F6',
                    300: '#CAD0E1',
                    500: '#595959'
                },
                error: {
                    100: '#FFC4C2',
                    300: '#FDC8C6',
                    600: '#D72E5B'
                },
                success: {
                    300: '#E9F9CD',
                    500: '#97BF4D',
                    600: '#629208'
                }
            }
        }
    },
    plugins: []
};
