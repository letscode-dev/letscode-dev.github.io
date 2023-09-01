import coverReactStarWars from './img/react-star-wars.png';
import coverJsModuleComics from './img/js-modules-comics.png';
import coverJsGuitarShop from './img/js-guitar-shop.jpg';
import coverGit from './img/git.png';
import coverFrontend from './img/frontend.jpg';
import coverMarkup from './img/markup.png';

export const COURCES = [
    {
        stack: 'Git и GitHub',
        title: 'Теоретический курс',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnPyWTcz_GEQo5drpr_1UH2',
        level: 'Начальный',
        time: null,
        img: coverGit,
        type: 'Практика',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnPyWTcz_GEQo5drpr_1UH2'
            },
        ],
    },
    {
        stack: 'React и Redux',
        title: 'Приложение по Star Wars',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i',
        level: 'Продвинутый',
        time: '15 часов 35 минут',
        img: coverReactStarWars,
        type: 'Практика',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i'
            },
            {
                name: 'Проект на GitHub Pages',
                link: 'https://letscode-dev.github.io/react-star-wars/'
            },
            { 
                name: 'Репозиторий на GitHub',
                link: 'https://github.com/letscode-dev/react-star-wars'
            },
            {
                name: 'StoryBook на GitHub Pages',
                link: 'https://letscode-dev.github.io/react-star-wars/storybook'
            },
        ],
    },
    {
        stack: 'JavaScript ES6-модули',
        title: 'Приложение по комиксам Marvel',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t',
        level: 'Средний',
        time: '3 часа 52 минуты',
        img: coverJsModuleComics,
        type: 'Практика',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t'
            },
            {
                name: 'Проект на GitHub Pages',
                link: 'https://letscode-dev.github.io/js-modules-comics'
            },
            {
                name: 'Репозиторий на GitHub',
                link: 'https://github.com/letscode-dev/js-modules-comics'
            },
        ],
    },
    {
        stack: 'JavaScript ES6-классы',
        title: 'Приложение для магазина гитар',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw',
        level: 'Начальный',
        time: '2 часа 33 минуты',
        img: coverJsGuitarShop,
        type: 'Практика',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw'
            },
            {
                name: 'Проект на GitHub Pages',
                link: 'https://letscode-dev.github.io/js-guitar-shop'
            },
            {
                name: 'Репозиторий на GitHub',
                link: 'https://github.com/letscode-dev/js-guitar-shop'
            },
        ],
    },
    {
        stack: 'Frontend',
        title: 'Отдельные видео по Frontend',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnuc0VJqAajaRffTjdLA-jQ',
        level: 'Все',
        img: coverFrontend,
        type: 'Теория и практика',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnuc0VJqAajaRffTjdLA-jQ'
            },
        ],
    },
    {
        stack: 'HTML5 и CSS3',
        title: 'Теоретический курс',
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3',
        level: 'Все',
        time: null,
        img: coverMarkup,
        type: 'Теория',
        links: [
            {
                name: 'Курс на YouTube',
                link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3'
            },
        ],
    },
];

// Тип курса: type
