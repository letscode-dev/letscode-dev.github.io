# Readme

### TODO
- Поменять иконку школы на сайте-портфолио
- Для лого добавить shape. Shape-генераторы
- Написать текст об авторе
- Посмотреть шаблоны дизайна

### Deploy
1. Остановить dev server
2. Запустить команду `npm run deploy`

### Состав `npm run deploy`
1. `npm run commit` - commit и push в ветку "master" на удаленном репозитории
2. `npm run build` - сборка приложения
3. `npm run create-nojekyll` - создание файла ".nojekyll" в директории "out"
4. `gh-pages` - commit и push файлов из директории out в ветку "gh-pages" на удаленном репозитории
