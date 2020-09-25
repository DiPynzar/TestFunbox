Квалификационные задания для разработчиков 
HTML/CSS/JS 

Level I

1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
	пользователя;
	менеджера проекта; 
  дизайнера; 
  верстальщика; 
  клиентского программиста; 
  серверного программиста. 

Хорошая верстка с точки зрения:
- пользователя: интерфейс удобный, интуитивно понятный, не перегружен лишней информацией. Сайт быстро грузится.
- менеджера проекта: верстка выполнена в соответствии с техническим заданием, заказчик доволен.  
- дизайнера: дизайн внешне приятный, хорошо продуман с точки зрения UX, обеспечивает удобство в пользовании целевым функционалом сайта.
- верстальщика: когда дизайн сайта продуман и выдержан в едином стиле, который удобно воспроизвести при верстке. Верстка одинаково хорошо отображается на всех современных устройствах и браузерах. Ничего не «ломается» при изменении информации на сайте. 
- клиентского программиста:  во многом похоже на верстальщика, но важнее, что ничего не ломается при изменении информации на сайте. Код хорошо читается, разделен на отдельные модули, которые удобно менять и использовать в дальнейшем для развития и масштабирования сайта.
- серверного программиста: хорошая верстка должна мало весить, чтобы быстрее отдаваться по сети при запросе.


2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.  Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Опыта коммерческой разработки крупных многостраничных сайтов у меня не было.
Перед началом работы необходимо внимательно изучить макет на наличие повторяющихся компонентов, всплывающих и скрывающихся меню.
Внутри команды необходимо придерживаться одной модели именования сущностей, классов (например, BEM). Писать легко поддерживаемый код.

3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 

Для одинакового отображения сайта на разных устройствах необходимо соответствовать трем параметрам:
адаптивность в зависимости от размеров экрана (и не только). Для адаптивной верстки в CSS применяю flex-контейнеры, расставляю брейкпойнты через медиа-запросы. Адаптивность верстки проверяю с помощью консоли разработчика.
кроссбраузерность. Не все браузеры одинакового «понимают» новые стандарты в JS, новые возможности в CSS. Эту проблему во многом помогают решить полифилы. Иногда для проверки кроссбраузерности конкретного решения заглядываю на ресурс https://caniuse.com.
кроссплатформенность. Проверять можно либо вручную на устройствах с разной ОС, либо на специализированных сервисах.

4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Я использую VS Code, в котором много плагинов, которые сильно облегчают жизнь в процессе написания кода, среди них: Auto Complete Tag (Auto Close Tag, Auto Rename Tag), eCSStractor for VSCode, SCSS Formatter, SCSS IntelliSense, JavaScript Snippet Pack, ESLint, Code Runner и т.д.
Для отладки кода пока пользуюсь только консолью разработчика. В контрольных точках вывожу сообщения в консоль или расставляю брейкпойнты.
При разработке React-приложения заглядываю в React-developers tool в Google Chrome.


5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 

Я воспользуюсь информацией из консоли разработчика, где можно посмотреть какие стили заданы кодом, а какие в итоге вычислены браузером и применены на странице. Отталкиваясь от этого уже можно будет понять, в чем причина некорректного отображения страницы.

6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 

Спрошу у дизайнера. Если на данный момент его нет на связи, или он не может дать мне ответ, то уточню у  коллег, которые работают на этом же проекте, есть ли у них аналогичные интерактивные элементы. Если таких элементов нет, то предусмотрю возможность интерактива и в качестве «заглушки» предложу наиболее простое и приятное глазу решение. 
Позже при получении актуальной информации от дизайнера внесу изменения.

7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
Ресурсы:
- https://learn.javascript.ru/
- https://developer.mozilla.org/ru/
- https://medium.com/
- https://habr.com/ru/
- https://stackoverflow.com/
- Блог «Фрилансер по жизни - IT и фриланс»  хорошо помог разобраться во многих вопросах верстки - https://www.youtube.com/c/FreelancerLifeStyle/featured

Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? 

На мой взгляд, каждый уважающий себя фронтенд-разработчик должен владеть как JS-программированием, так и версткой. Поэтому стараюсь подтягивать свои знания и в JS, и в HTML/CSS. Сейчас мне интереснее изучать их симбиоз в библиотеке React.


Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 

Изучаю человеческое (пока что только свое) тело: биомеханику движения,  анатомию; физиотерапию. 
Веду детские и взрослые группы по pole dance и pole sport в UNI-DANCE.
Люблю читать художественную и нон-фикшн литературу, но в последнее время больше углубилась в чтение технической документации по программированию. 
Подтягиваю свои знания английского языка.

8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

Учиться программированию и верстке начала в 2020 году. Всегда поглядывала на web-разработку с особым интересом, но как-то не решалась окунаться. Был опыт разработки сайта на конструкторе от wix.com. После этого решила немного познакомиться с  SEO, SMM,  контекстной рекламой, UX-дизайном для общего развития. Пожалуй, только в SMM погружение было более глубокое.

С 2013 года я работала в архитектурно-проектной мастерской «КАНГРО-ПРОЕКТ». Начинала в должности офис-менеджера, после стала заниматься маркетингом и развитием компании. За это время прокачала свои навыки по управлению проектами, внешним и внутренним коммуникациям,  ведении документооборота, подготовке презентаций, работе в команде и многому другому. Для получения рекомендации можно обратиться к техническому директору Тюриной Маргарите Николаевне (+7 (8422) 67-57-03).

Свое обучение программированию начала с ресурсов, указаных ранее в  п.7, а также по некоторым курсам по HTML/CSS/JS на htmlacademy.ru, hexlet.io, youtube и книгам.
О своих качествах: коммуникабельна, хорошо работаю как в команде, так и самостоятельно. Всегда охотно учусь новому. 









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

