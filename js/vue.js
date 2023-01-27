
/*
Let's Code
› Сайт                   https://letscode-dev.github.io
› YouTube                https://www.youtube.com/c/letscode-dev
› GitHub                 https://github.com/letscode-dev
› Методичка              https://letscode-dev.github.io/training
› Codepen                https://codepen.io/letscode-dev
› CodeSandbox            https://codesandbox.io/u/letscode-dev
› Telegram Channel       https://t.me/letscode_channel
› Telegram Chat          https://t.me/letscode_chat
› Донаты                 https://yoomoney.ru/to/410011498839870

› IT-School              https://it-school58.github.io/
*/

const ARR_LINKS_MAIN = [
    { name: '› Сайт',             link: 'https://letscode-dev.github.io' },
    { name: '› YouTube',          link: 'https://www.youtube.com/c/letscode-dev' },
    { name: '› GitHub',           link: 'https://github.com/letscode-dev' },
    { name: '› Методичка',        link: 'https://letscode-dev.github.io/training' },
    { name: '› Codepen',          link: 'https://codepen.io/letscode-dev' },
    { name: '› CodeSandbox',      link: 'https://codesandbox.io/u/letscode-dev' },
    { name: '› Telegram Channel', link: 'https://t.me/letscode_channel' },
    { name: '› Telegram Chat',    link: 'https://t.me/letscode_chat' },
    { name: '› Донаты',           link: 'https://yoomoney.ru/to/410011498839870' },
];

// Тип курса: type

const PATH_IMG = 'img/';

const ARR_COURCES = [
    {
        title: 'Курс #3: React/Redux-практика',
        links: [
            { name: 'Курс на YouTube',           link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i' },
            { name: 'Проект на GitHub Pages',    link: 'https://letscode-dev.github.io/react-star-wars/' },
            { name: 'Репозиторий на GitHub',     link: 'https://github.com/letscode-dev/react-star-wars' },
            { name: 'StoryBook на GitHub Pages', link: 'https://letscode-dev.github.io/react-star-wars/storybook' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i',
        level: 'Продвинутый',
        time: '15 часов 35 минут',
        img: PATH_IMG+'courses/react-star-wars.png',
        type: 'Практика',
    },
    {
        title: 'Курс #2: JavaScript-практика (модульное приложение)',
        links: [
            { name: 'Курс на YouTube',        link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t' },
            { name: 'Проект на GitHub Pages', link: 'https://letscode-dev.github.io/js-modules-comics' },
            { name: 'Репозиторий на GitHub',  link: 'https://github.com/letscode-dev/js-modules-comics' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t',
        level: 'Средний',
        time: '3 часа 52 минуты',
        img: PATH_IMG+'courses/js-modules-comics.png',
        type: 'Практика',
    },
    {
        title: 'Курс #1: JavaScript-практика (простой проект)',
        links: [
            { name: 'Курс на YouTube',        link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw' },
            { name: 'Проект на GitHub Pages', link: 'https://letscode-dev.github.io/js-guitar-shop' },
            { name: 'Репозиторий на GitHub',  link: 'https://github.com/letscode-dev/js-guitar-shop' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw',
        level: 'Начальный',
        time: '2 часа 33 минуты',
        img: PATH_IMG+'courses/js-guitar-shop.png',
        type: 'Практика',
    },
    {
        title: 'Курс Git / GitHub',
        links: [
            { name: 'Курс на YouTube',           link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnPyWTcz_GEQo5drpr_1UH2' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnPyWTcz_GEQo5drpr_1UH2',
        level: 'Начальный',
        time: null,
        img: PATH_IMG+'courses/git.png',
        type: 'Практика',
    },
    {
        title: 'Frontend (Common Playlist)',
        links: [
            { name: 'Курс на YouTube',           link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnuc0VJqAajaRffTjdLA-jQ' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKnuc0VJqAajaRffTjdLA-jQ',
        level: 'Все',
        img: PATH_IMG+'courses/frontend.jpg',
        type: 'Теория и практика',
    },
    {
        title: 'Курс HTML5 и CSS3',
        links: [
            { name: 'Курс на YouTube', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3' },
        ],
        youtube: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3',
        level: 'Все',
        time: null,
        img: PATH_IMG+'courses/css.png',
        type: 'Теория',
    },
];

const ARR_ARTICLES = [
    {
        title: 'Основные варианты использования CSS-переменных (Custom Properties)',
        link: 'https://habr.com/ru/post/589375/',
        img: PATH_IMG+'articles/custom-properties.png',
    },
    {
        title: 'Базовые задачи на Promise в JavaScript',
        link: 'https://habr.com/ru/post/582914/',
        img: PATH_IMG+'articles/promises.png',
    },
    {
        title: 'Разработка документации на VuePress',
        link: 'https://habr.com/ru/post/580894/',
        img: PATH_IMG+'articles/vue-press.jpg',
    },
];

new Vue({
    el: '#root',
    data: {
        linksMain: null,
        sectionCources: null,
        sectionArticles: null,
    },
    mounted() {
        this.linksMain = ARR_LINKS_MAIN;
        this.sectionCources = ARR_COURCES;
        this.sectionArticles = ARR_ARTICLES;
    },
});
