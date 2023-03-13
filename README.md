#ЗАВДАННЯ З РОБОТОЮ API НОВОЇ ПОШТИ

Документація API: https://developers.novaposhta.ua/documentation 

Порядок роботи:

Зареєструватися на сайті Нової пошти та згенерувати ключ після входу за адресою https://new.novaposhta.ua/dashboard/settings/developers 

Знайти зі списку документації запити для пошуку актуального статусу місцезнаходження посилки за номером накладної та отримання списку відділень Нової пошти

Адреси для API запитів: https://api.novaposhta.ua/v2.0/json/ 

Для тестування запитів можна користуватися Postman або іншою схожою програмою.

#ВИМОГИ ДО ФУНКЦІОНАЛУ
1) Користувач вводить номер ТТН або свій номер накладної в поле введення на сторінці.
2) Додаток відправляє запит на отримання даних про актуальний статус місця доставки товару.
3) Виводимо інформацію про відправку користувачеві.
4) Користувач повинен бачити всі попередні номери ТТН у вигляді списку в сайтбарі. Навіть після перезавантаження сторінки.
5) По кліку на вже доданий до списку введених номер ТТН повинен автоматично бути виконаний запит на статус знаходження товару (доставки) і виведена відповідна інформація. При цьому номер ТТН повинен автоматично відображатися в полі введення.
6) Номер ТТН накладної обов'язково повинен бути перевірений при введенні на коректність заповнення. Або засобами порівняння кожного символа з потрібним діапазоном кодування або регулярним виразом.
7) Повинна бути можливість очистити всі старі ТТН.
8) При невірному форматі після натискання на кнопку отримати статус доставки ТТН, обов'язково повинна бути показана підказка і запит відправлятися не повинен.
9) Переходячи на другу вкладку, користувач повинен мати можливість побачити список відділень Нової пошти, для чого потрібно зробити відповідний запит до API Нової пошти і вивести їх списком на свій розсуд.

#ТЕХНІЧНІ ЗАЛЕЖНОСТІ ПРОЕКТУ


Обов'язково створити окремий репозиторій на Git.

 Крім коду на GitHub, обов'язково налаштувати публікацію ТЗ на Git Pages.

Розбити проект на підзадачі та виділяти для кожної задачі окрему гілку, на якій буде щонайменше декілька комітів. Наприклад, створення html структури. Гілка create-structure, коміти "Add html", “Add styles”
 Проект повинен бути реалізований за допомогою React js. Використання TypeScript, Mui, Redux, Redux ToolKit, Axios є привітним.
Обов'язково подумати про стилістичне оформлення задачі, верстка повинна бути з використанням, бути адаптивною та кроссбраузерною. Однозначно придумати свій оригінальний зовнішній вигляд додатка та зробити його максимально зручним для використання на екранах мобільних пристроїв. Будь-які вдосконалення для того, щоб приховувати елементи або робити їх більш інтерактивними на мобільному пристрої - однозначно вітаються.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
