import MenuRoutes from '../components/Header/components/MenuRoutes'
import MenuHash from '../components/Header/components/MenuHash'
import MenuSelected from '../components/Header/components/MenuSelected'

import { MENU_ROUTES, MENU_HASH, MENU_SELECTED } from './routes'

export const CONFIG = [
    // Routes
    {
        component: <MenuRoutes item={MENU_ROUTES.letsCode} />,
        isMobile: false,
        isVisible: false
    },
    {
        component: <MenuRoutes item={MENU_ROUTES.letsInterview} />,
        isMobile: false,
        isVisible: false
    },
    // Hash
    {
        component: <MenuHash item={MENU_HASH.cources} />,
        isMobile: false,
        isVisible: true
    },
    {
        component: <MenuHash item={MENU_HASH.publications} />,
        isMobile: false,
        isVisible: true
    },
    // Selected
    {
        component: <MenuSelected item={MENU_SELECTED.community} />,
        isMobile: true,
        isVisible: true
    },
    {
        component: <MenuSelected item={MENU_SELECTED.learn} />,
        isMobile: true,
        isVisible: true
    },
    {
        component: <MenuSelected item={MENU_SELECTED.roadmaps} />,
        isMobile: true,
        isVisible: true
    },
]

export const CONFIG_MOBILE = [
    <MenuSelected item={MENU_SELECTED.community} />,
    <MenuSelected item={MENU_SELECTED.learn} />,
]
