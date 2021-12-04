import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            common: {
                black: string;
                white: string;
            }
            primary: {
                darkest: string;
                dark: string;
                default: string;
                light: string;
            }
            neutral: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
            }
        }
        borderRadius: string;
        fontFamily: string;
        fontSizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        },
        sizes: {
            0.5: string;
            1: string;
            1.5: string;
            2: string;
            2.5: string;
            3: string;
            3.5: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            12: string;
            14: string;
            16: string;
            20: string;
            24: string;
            28: string;
            32: string;
            36: string;
            40: string;
            44: string;
            48: string;
            52: string;
            56: string;
            60: string;
            64: string;
            72: string;
            80: string;
            96: string;
        }
        maxContainer: string;
    }
}