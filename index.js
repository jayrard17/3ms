$(document).ready(function () {
    $("header nav a").on("click", function (e) {
        e.preventDefault();

        const target = $(this).attr("href");
        let offset = 0;

        if (target !== "#home") {
            offset = $(target).offset().top - $("#navbar").outerHeight();
        }

        $("html, body").animate({
            scrollTop: offset
        }, 100);
    });
});
$(document).ready(function () {
    // Open sidenav
    $('#menu-toggle').click(function () {
        $('#mySidenav').removeClass('translate-x-full').addClass('translate-x-0');
    });

    // Close sidenav
    $('#closebtn').click(function () {
        $('#mySidenav').removeClass('translate-x-0').addClass('translate-x-full');
    });

    // Close sidenav on nav link click
    $('#mySidenav a').click(function () {
        $('#mySidenav').removeClass('translate-x-0').addClass('translate-x-full');
    });
});
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const observers = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    observers.forEach((el) => observer.observe(el));
});
