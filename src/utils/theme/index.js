import {extendTheme} from "native-base";

const theme = extendTheme({
    colors: {
        white:{
            50:"#FFFFFF",
        },
        violet:{
            50: "#FDFCFE",
            100:"#FBFAFF",
            200:"#F5F2FF",
            300:"#EDE9FE",
            400:"#E4DEFC",
            500:"#D7CFF9",
            600:"#C4B8F3",
            700:"#AA99EC",
            800:"#6E56CF",
            900:"#644FC1",
            1000:"#5746AF",
            1100:"#20134B",
        },
        red:{
            50:"#DC3D43",
            100:"#E5484D",
        }
    },
    fontConfig:{
        Inter:{
            100:{
                normal:"Inter-Thin",
                italic:"Inter-ThinItalic",
            },
            200:{
                normal:"Inter-ExtraLight",
                italic:"Inter-ExtraLightItalic",
            },
            300:{
                normal:"Inter-Light",
                italic:"Inter-LightItalic",
            },
            400:{
                normal:"Inter-Regular",
                italic:"Inter-Italic",
            },
            500:{
                normal:"Inter-Medium",
                italic:"Inter-MediumItalic",
            },
            600:{
                normal:"Inter-SemiBold",
                italic:"Inter-SemiBoldItalic",
            },
            700:{
                normal:"Inter-Bold",
                italic:"Inter-BoldItalic",
            },
        }
    },
    fonts: {
       
        body: "Inter-Regular",
       
      },
    fontSizes: {
        "sm":12,
        "md":14,
        "lg":23,
        "xl":37, 
    }
})

export default theme;