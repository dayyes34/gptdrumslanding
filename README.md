# gptDrums Landing Page

Landing page for gptDrums project.

## Деплой на Vercel

### Шаги для деплоя:

1. **Создайте репозиторий на GitHub:**
   - Зайдите на github.com
   - Нажмите "New repository"
   - Название: `gptDrums` (или любое другое)
   - Сделайте репозиторий приватным или публичным (на ваше усмотрение)
   - НЕ добавляйте README, .gitignore или лицензию (они уже есть в проекте)
   - Нажмите "Create repository"

2. **Подключите локальный репозиторий к GitHub:**
   ```bash
   cd /Users/mdayyes/gptDrums
   git remote add origin https://github.com/YOUR_USERNAME/gptDrums.git
   git branch -M main
   git push -u origin main
   ```
   Замените `YOUR_USERNAME` на ваш GitHub username.

3. **Импортируйте проект в Vercel:**
   - Зайдите на vercel.com
   - Войдите в аккаунт
   - Нажмите "Add New..." → "Project"
   - Выберите "Import Git Repository"
   - Найдите ваш репозиторий `gptDrums` и нажмите "Import"
   - Vercel автоматически определит настройки Next.js
   - Нажмите "Deploy"

4. **Настройте кастомный домен gptdrums.taktapp.com:**
   - После деплоя зайдите в настройки проекта в Vercel
   - Перейдите в раздел "Domains"
   - Нажмите "Add Domain"
   - Введите `gptdrums.taktapp.com`
   - Следуйте инструкциям по настройке DNS:
     - Добавьте CNAME запись для `gptdrums`, указывающую на домен Vercel (например, `your-project.vercel.app`)
     - Или используйте A записи, если Vercel предоставит IP адреса

5. **Готово!**
   - После настройки DNS (может занять несколько минут) сайт будет доступен по адресу gptdrums.taktapp.com
   - Каждый push в main ветку будет автоматически деплоить изменения

## Локальная разработка

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.


