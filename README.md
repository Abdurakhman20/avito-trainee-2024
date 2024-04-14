# Frontend приложение | Kinopoisk API

## О Приложении
Frontend приложениt для быстрого поиска информации по фильмам и сериалам с платформы «Кинопоиска»

## Функциональные возможности проекта
- Поиск фильмов по названию
- Сортировка по возрастному рейтингу, году выпуска или стране
- Переход на страницу фильма
- Пагинация данных
- Возможность поделиться результатами выдачи с другими пользователями через копирование ссылки
- Поиск с интервалом времени (debounce)

## Запросы к API
- Получение списка фильмов по заданным параметрам: https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&year=${year}&country=${country}&age=${ageRating}

- Поиск фильмов https://api.kinopoisk.dev/v1.4/movie/search/

- Поиск фильма по ID https://api.kinopoisk.dev/v1.4/movie/${id}

## Инструкция по  запуску
- cкачать проект из ветка main: `git clone <ссылка на проект>`
- в командной строке ввести `npm install`
- в командной строке ввести:
  - для powershell : `$env:REACT_APP_TOKEN = token ; npm run start`
  - для CMD: `set REACT_APP_TOKEN = token && npm run start`
  - для Bash: `REACT_APP_TOKEN=token npm run start`
  - или создать файл .env в корне проекта и записать туда -> `REACT_APP_TOKEN=token` и потом в консоли ввести команду `npm run start`

