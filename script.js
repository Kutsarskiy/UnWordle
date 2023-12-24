// Обробник події, який викликається при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function() {
    // Додаємо обробник події для кнопки "Почати гру"
    document.getElementById("openWordleButton").addEventListener("click", function() {
        // Отримуємо значення слайдерів для висоти та ширини
        var heightSliderValue = document.getElementById("fader").value;
        var widthSliderValue = document.getElementById("fader2").value;

        // Привласнюємо значення змінним height і width
        var height = parseInt(heightSliderValue);
        var width = parseInt(widthSliderValue);

        // Отримуємо вибране значення slider2
        var slider2Value = parseInt(document.getElementById("fader2").value);

        // Перенаправляємо на сторінку unwordle.html з передачею параметрів
        window.location.href = "unwordle.html?height=" + height + "&width=" + width + "&slider2=" + slider2Value;
    });
});

// Обробник події для перемикача темної теми
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("darkThemeToggle").addEventListener("click", function() {
        var body = document.body;
        var isDarkTheme = body.classList.contains("dark-theme");
        if (!isDarkTheme) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    });
});

// Обробник подій для попапу з питанням
document.addEventListener("DOMContentLoaded", function () {
    var questionMark = document.querySelector(".fa-regular.fa-circle-question");
    var popup = document.getElementById("popup");
    var closePopup = document.getElementById("close-popup");
    var navbarIcons = document.querySelectorAll(".navbar i");

    // Обробник події для відображення попапу при кліку на питання
    questionMark.addEventListener("click", function (event) {
        event.stopPropagation(); // Передбачаємо закриття попапу при кліку на питальний знак
        togglePopup();
    });

    // Обробник події для закриття попапу при кліку на хрестик
    closePopup.addEventListener("click", function () {
        closePopupHandler();
    });

    // Обробник події для закриття попапу при кліку поза попапом та за межами іконок навбару
    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && !navbarIconsArrayContains(event.target)) {
            closePopupHandler();
        }
    });

    // Функція перемикача відображення попапу
    function togglePopup() {
        if (popup.style.display === "block") {
            closePopupHandler();
        } else {
            openPopupHandler();
        }
    }

    // Функція для відкриття попапу з плавним зникненням
    function openPopupHandler() {
        popup.style.display = "block";
        popup.style.opacity = 0;
        popup.classList.add("show");

        setTimeout(function () {
            popup.style.opacity = 1;
        }, 50);
    }

    // Функція для закриття попапу з плавним зникненням
    function closePopupHandler() {
        popup.style.opacity = 0;
        popup.classList.remove("show");

        setTimeout(function () {
            popup.style.display = "none";
        }, 500);
    }

    // Функція, яка перевіряє, чи елемент входить в масив
    function navbarIconsArrayContains(target) {
        var iconsArray = Array.from(navbarIcons);
        return iconsArray.some(function (icon) {
            return icon.contains(target);
        });
    }
});
