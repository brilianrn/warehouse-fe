module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: '#FAFAFA',
                    200: '#F5F5F5',
                    300: '#EBEBEB',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#555555',
                    700: '#1A1A1A'
                },
                danger: {
                    default: '#CC3434',
                    lighter: '#FCE3D6'
                },
                warning: {
                    default: '#FF8A00',
                    lighter: '#FFF8EF',
                    darker: '#904E01'
                },
                positive: {
                    default: '#19954D',
                    lighter: '#E3F6EB',
                    darker: '#0B6732'
                },
                primary: {
                    green: '#006551',
                    magenta: '#E22153'
                },
                info: {
                    lighter: '#F0F7FF',
                    darker: '#2371C6'
                }
            },
            fontFamily: {
                interLight: ['Inter-Light'],
                interRegular: ['Inter-Regular'],
                interMedium: ['Inter-Medium'],
                interSemiBold: ['Inter-SemiBold']
            },
            fontSize: {
                extraSmall: ['8px', '12px'],
                mediumSmall: ['10px', '14px'],
                small: ['12px', '16px'],
                regular: ['14px', '20px'],
                medium: ['16px', '20px'],
                large: ['18px', '26px'],
                extraLarge: ['20px', '32px'],
                superLarge: ['24px', '36px']
            },
            screens: {
                mobile: '320px',
                tablet: '640px',
                laptop: '1024px',
                desktop: '1280px'
            },
            width: {
                '5/8': '62.5%',
                '2/9': '22.2%',
                '1/9': '24.5%',
                '7/15': '46.6%',
                '15/16': '94%',
                5.5: '1.125rem',
                7.5: '1.875rem',
                13: '3.25rem',
                15: '3.625rem',
                18: '4.5rem',
                21: '5.125rem',
                22: '5.5rem',
                25: '6.25rem',
                31: '7.5rem',
                34: '8.5rem',
                42: '10.5rem',
                66: '16.75rem',
                68: '17rem',
                78: '19.5rem',
                82: '21.5rem',
                84: '22rem',
                92: '23rem',
                97: '26.5rem',
                '95%': '95%',
                '96%': '96%'
            },
            maxWidth: {
                md2: '30rem'
            },
            height: {
                5.5: '1.125rem',
                7.5: '1.875rem',
                9.5: '2.375rem',
                10.5: '2.625rem',
                13: '3.25rem',
                13.5: '3.375rem',
                15: '3.625rem',
                15.5: '3.875rem',
                20.5: '5.625rem',
                113: '30.125rem'
            },
            maxHeight: {
                74: '18.5rem',
                144: '36rem',
                184.5: '45.625rem'
            },
            zIndex: {
                9999: '9999',
                99999: '99999'
            },
            space: {
                lg: '24px',
                xl: '40px'
            },
            borderWidth: {
                1.5: '1.5px',
                3: '3px'
            },
            inset: {
                76: '19rem',
                106: '27rem',
                124: '31rem'
            },
            boxShadow: {
                lxs: '0px -2px 1px rgba(189, 189, 189, 0.25)'
            },
            padding: {
                4.5: '1.125rem',
                15: '3.65rem',
                18: '4.5rem',
                22: '5.5rem',
                26: '6.2rem',
                54: '13.5rem'
            },
            margin: {
                6.5: '1.625rem',
                15: '3.75rem',
                '-7.5': '-1.875rem',
                '-18': '-4.5rem'
            }
        }
    },
    plugins: []
};
