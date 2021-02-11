
const ARR_LINKS_MAIN = [
    { name: 'YouTube',          link: 'https://www.youtube.com/c/DevPandaren' },
    { name: 'GitHub',           link: 'https://github.com/dev-pandaren' },
    { name: 'Telegram Channel', link: 'https://t.me/devpandaren' },
    { name: 'Telegram Chat',    link: 'https://t.me/devpandaren_chat' },
];

const ARR_COURCES = {
    react: {
        links: [
            { name: 'Проект',      link: 'https://dev-pandaren.github.io/react-star-wars/' },
            { name: 'Репозиторий', link: 'https://github.com/dev-pandaren/react-star-wars' },
            { name: 'StoryBook',   link: 'https://dev-pandaren.github.io/react-star-wars/storybook' },
        ],
        level: 'Продвинутый'
    }
};

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
