
const ARR_LINKS_MAIN = [
    { name: 'YouTube',          link: 'https://www.youtube.com/c/DevPandaren' },
    { name: 'GitHub',           link: 'https://github.com/dev-pandaren' },
    { name: 'Справочник',       link: 'https://dev-pandaren.github.io/training' },
    { name: 'Telegram Channel', link: 'https://t.me/devpandaren' },
    { name: 'Telegram Chat',    link: 'https://t.me/devpandaren_chat' },
];

// Тип курса: type
// Продолжительность курса: time

const ARR_COURCES = [
    {
        title: 'Курс #3: React/Redux-практика',
        links: [
            { name: 'Курс на YouTube',           link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i' },
            { name: 'Проект на GitHub Pages',    link: 'https://dev-pandaren.github.io/react-star-wars/' },
            { name: 'Репозиторий на GitHub',     link: 'https://github.com/dev-pandaren/react-star-wars' },
            { name: 'StoryBook на GitHub Pages', link: 'https://dev-pandaren.github.io/react-star-wars/storybook' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i',
        level: 'Продвинутый',
        time: null,
        img: 'img/courses/react-star-wars.png',
        type: 'Практика',
    },
    {
        title: 'Курс #2: JavaScript-практика (модульное приложение)',
        links: [
            { name: 'Курс на YouTube',        link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t' },
            { name: 'Проект на GitHub Pages', link: 'https://dev-pandaren.github.io/js-modules-comics' },
            { name: 'Репозиторий на GitHub',  link: 'https://github.com/dev-pandaren/js-modules-comics' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t',
        level: 'Средний',
        time: '3 часа 52 минуты',
        img: 'img/courses/js-modules-comics.png',
        type: 'Практика',
    },
    {
        title: 'Курс #1: JavaScript-практика (простой проект)',
        links: [
            { name: 'Курс на YouTube',        link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw' },
            { name: 'Проект на GitHub Pages', link: 'https://dev-pandaren.github.io/js-guitar-shop' },
            { name: 'Репозиторий на GitHub',  link: 'https://github.com/dev-pandaren/js-guitar-shop' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw',
        level: 'Начальный',
        time: '2 часа 33 минуты',
        img: 'img/courses/js-guitar-shop.png',
        type: 'Практика',
    },
    {
        title: 'Курс HTML5 и CSS3',
        links: [
            { name: 'Курс на YouTube', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3',
        level: 'Все',
        time: null,
        img: 'img/courses/css.png',
        type: 'Теория',
    },
];

new Vue({
    el: '#root',
    data: {
        linksMain: null,
        cources: null,
    },
    mounted() {
        this.linksMain = ARR_LINKS_MAIN;
        this.cources = ARR_COURCES;
    },
});
