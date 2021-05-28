var modal = document.getElementById('viewModal');

var form_feed = document.getElementById('form');

var closing = document.getElementsByClassName('close')[0];

function viewer(text) {
	form_feed.innerHTML = '<form class="g-form" id="g-form-1" method="POST" action="" autocomplete="off"><h2 class="g-form__title g-form__title_main">Оставьте заявку прямо сейчас</h2><h2 class="g-form__title g-form__title_respond">Мы Вам перезвоним</h2><div class="g-form__preloader"></div><div class="g-form__inputs"><fieldset class="g-form__input-wrapper"><input class="g-form__input g-form__input_name" id="name" name="Имя" placeholder="Введите ваше имя" required></fieldset><fieldset class="g-form__input-wrapper"><input class="g-form__input g-form__input-wrapper_hidden" id="theme" name="Тема" value="' + text + '"></fieldset><fieldset class="g-form__input-wrapper"><input class="g-form__input g-form__input_tel" id="tel" name="Телефон" placeholder="Введите ваш телефон" required min="10"></fieldset><fieldset class="g-form__input-wrapper"><textarea id="message" name="Сообщение" rows="10"  placeholder="Введите сообщение"></textarea></fieldset><fieldset class="g-form__input-wrapper g-form__input-wrapper_hidden"><label for="honeypot">Помогает бороться со спамом. Должно быть пустым!</label><input id="honeypot" type="text" name="honeypot" value=""></fieldset><div class="g-form__button-wrapper"><button class="g-form__button">Отправить</button></div></div></form>';
	modal.style.display = 'flex';

	var script = document.createElement("script");
    script.src = '/js/g-form.js';
    document.head.appendChild(script);
	
	var script = document.createElement("script");
    script.src = '/js/mask-tel.js';
    document.head.appendChild(script);
}

closing.onclick = function() {
    modal.style.display = "none";
	form_feed.innerHTML = '';
}
		
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		form_feed.innerHTML = '';	
    }
}
