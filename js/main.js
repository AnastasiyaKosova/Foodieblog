$(function(){
    //слайдер slick
  $('.slider__inner-footer').slick({
    arrows: false,
    dots: false,
    infinite: true,
    
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //menu__btn
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form"); // Находим форму

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Предотвращаем перезагрузку страницы

      //const nameInput = form.querySelector("input[name='name']");
      //const emailInput = form.querySelector("input[name='email']");
      //const messageInput = form.querySelector("textarea[name='message']");
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("mail");
      const messageInput = document.getElementById("textarea");

      const russianNameRegex = /^[А-Яа-яёЁ]+$/; // Только русские буквы
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Латиница для email
      const maxMessageLength = 255;

      // Проверка имени (только русские буквы)
      if (!russianNameRegex.test(nameInput.value.trim())) {
        alert("Имя должно содержать только русские буквы.");
        nameInput.focus();
        return;
      }

      // Проверка email
      if (!emailRegex.test(emailInput.value)) {
        alert("Введите корректный email на латинице.");
        emailInput.focus();
        return;
      }

      // Проверка длины сообщения
      if (messageInput.value.length > maxMessageLength) {
        alert(`Сообщение не должно превышать ${maxMessageLength} символов.`);
        messageInput.focus();
        return;
      }

      // Уведомление для пользователя
      alert("Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.");

      // Очищаем поля формы
      form.reset();
    });
  } else {
    console.error("Форма с классом 'form' не найдена.");
  }
});

