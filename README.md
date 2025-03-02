# 🍕 Pizza Ordering System

Простое веб-приложение для заказа пиццы с **Django (DRF) + React**.  
Позволяет пользователям оставлять заказы, а кухне – видеть список заказов.

---

## 🚀 **Технологии**
- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios, TailwindCSS
- **Database**: SQLite (по умолчанию, можно заменить)

---

## 🛠 **Как запустить проект?**

###   ------------ 1. Клонируем репозиторий


## 🛠 **2. Запуск бэкенда (Django)**
```sh
cd backend
python -m venv venv       # Создаём виртуальное окружение
source venv/bin/activate  # Активируем (MacOS/Linux)
# venv\Scripts\activate    # Для Windows

pip install -r requirements.txt  # Устанавливаем зависимости
python manage.py migrate         # Применяем миграции
python manage.py runserver        # Запускаем сервер
```

####  📌 Бэкенд запустится на http://127.0.0.1:8000/
####  📌 API доступно по http://127.0.0.1:8000/api/orders/

## 🛠 **3. Запуск фронтенда (React)**
```sh
cd frontend
npm install  # Устанавливаем зависимости
npm start    # Запускаем React-приложение
```

####  📌 Фронтенд запустится на http://localhost:3000/

## 🔧  **Настройки CORS (если нужно)**
Если фронтенд и бэкенд на разных доменах, добавь в backend/config/settings.py:
```sh
INSTALLED_APPS += ['corsheaders']
MIDDLEWARE.insert(1, 'corsheaders.middleware.CorsMiddleware')
CORS_ALLOW_ALL_ORIGINS = True
```
