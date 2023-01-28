import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        greckoGreen: {
            800: "#206B39" 
        },
        greckoBlue: {
            800: "#308CCC"
        },
        greckoBlueGray: {
            600: "#354346"
        }

    },
    fonts: {
        heading: "Inter_700Bold",
        medium: "Inter_500Medium",
        regular: "Inter_400Regular",
        light: "Inter_300Light"
    }
})