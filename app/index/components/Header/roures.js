import MenuRoutes from './components/MenuRoutes'
import MenuHash from './components/MenuHash'
import MenuSelected from './components/MenuSelected'

const MENU_ROUTES = {
    letsCode: {
        path: '/',
        title: 'Let\'s Code School'
    },
    letsInterview: {
        path: '/interview',
        title: 'Let\'s Interview'
    }
}

const MENU_HASH = {
    cources: {
        hash: 'cources',
        title: 'Курсы',
    },
    publications: {
        hash: 'publications',
        title: 'Публикации',
    }
}

const MENU_SELECTED = {
    community: {
        title: 'Коммьюнити',
        items: [
            {
                href: 'https://t.me/letscode_channel',
                title: 'Telegram Channel'
            },
            {
                href: 'https://t.me/letscode_chat',
                title: 'Telegram Chat'
            },
            {
                href: 'https://t.me/letscodedev_bot',
                title: 'Telegram Bot'
            },
            {
                href: 'https://anton-sergeenkov.github.io',
                title: 'Об авторе'
            },
        ]
    },
    learn: {
        title: 'Обучение',
        items: [
            {
                href: 'https://www.youtube.com/c/letscode-dev',
                title: 'YouTube'
            },
            {
                href: 'https://letscode-dev.github.io/workbook',
                title: 'Методичка'
            },
            {
                href: 'https://github.com/letscode-dev',
                title: 'GitHub'
            },
            {
                href: 'https://codepen.io/letscode-dev',
                title: 'CodePen'
            },
            {
                href: 'https://codesandbox.io/u/letscode-dev',
                title: 'CodeSandbox'
            },
        ]
    }
}

export const CONFIG = [
    // Routes
    // <MenuRoutes item={MENU_ROUTES.letsCode} />,
    // <MenuRoutes item={MENU_ROUTES.letsInterview} />,
    // Hash
    <MenuHash item={MENU_HASH.cources} />,
    <MenuHash item={MENU_HASH.publications} />,
    // Selected
    <MenuSelected item={MENU_SELECTED.community} />,
    <MenuSelected item={MENU_SELECTED.learn} />,
]
