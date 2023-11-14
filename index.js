$(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });

    $('i').hover(
      function () {
          $(this).animate({ marginTop: '-10px' }, 200);
      },
      function () {
          $(this).animate({ marginTop: '0px' }, 200);
      }
  );
});