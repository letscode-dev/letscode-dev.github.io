# Readme

### TODO
- Поправить меню как на anton-sergeenkov.github.io
- Добавить Prettier и Linter
- Написать текст об авторе

### Разделы на сайт

**Об авторе**
- Данные

**Roadmaps**
- React Frontend Developer Roadmap
https://lets-code.notion.site/React-Frontend-Developer-Roadmap-7bea7f13d1f745f0848161df3a95d9d6

**Платные курсы и услуги**
- Менторство
- Интервью по софт-скиллам
- Интервью по хард-скиллам

### Deploy
1. Остановить dev server
2. Запустить команду `npm run deploy`

### Состав `npm run deploy`
1. `npm run commit` - commit и push в ветку "master" на удаленном репозитории
2. `npm run build` - сборка приложения
3. `npm run create-nojekyll` - создание файла ".nojekyll" в директории "out"
4. `gh-pages` - commit и push файлов из директории out в ветку "gh-pages" на удаленном репозитории

### Версии
- `0.1.0` - Next.js версии 13 (2023.10.02)
- `0.1.1` - Next.js версии 14 (2023.12.23)
