import cn from 'classnames';
import { Roboto, Open_Sans } from 'next/font/google';

/*
span {
    font-family: var(--font-roboto-thin);
    font-family: var(--font-roboto-light);
    font-family: var(--font-roboto-regular);
    font-family: var(--font-roboto-medium);
    font-family: var(--font-roboto-bold);
    font-family: var(--font-roboto-black);
}
*/

export const robotoThin = Roboto({
    weight: '100',
    variable: '--font-roboto-thin',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const robotoLight = Roboto({
    weight: '300',
    variable: '--font-roboto-light',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const robotoRegular = Roboto({
    weight: '400',
    variable: '--font-roboto-regular',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const robotoMedium = Roboto({
    weight: '500',
    variable: '--font-roboto-medium',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const robotoBold = Roboto({
    weight: '700',
    variable: '--font-roboto-bold',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const robotoBlack = Roboto({
    weight: '900',
    variable: '--font-roboto-black',
    subsets: ['cyrillic'],
    display: 'swap',
})

export const opensansRegular = Open_Sans({
    weight: '300',
    variable: '--font-opensans-regular',
    subsets: ['cyrillic'],
    display: 'swap',
})

export default cn(
    robotoThin.variable,
    robotoLight.variable,
    robotoRegular.variable,
    robotoMedium.variable,
    robotoBold.variable,
    robotoBlack.variable,
    opensansRegular.variable,
);
