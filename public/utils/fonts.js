import {Allison, DM_Sans, Inter, Parisienne} from "next/font/google"

export const primary = Inter({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin-ext', 'cyrillic'],
    variable: "primary--font",
    style: ['normal'],
})

export const secondary = DM_Sans({
    weight: ['200', '300', '400', '500', '600', '800'],
    subsets: ['latin-ext'],
    style: ['normal'],
    variable: "--second-font"
})

export const titles = Parisienne({
    weight: ["400"],
    subsets: ["latin", "latin-ext"],
    style: ["normal"],
    variable: "--title-font"
})