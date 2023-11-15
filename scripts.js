$(document).ready(function () {
  $("#search-form").on("submit", function (e) {
      e.preventDefault(); // Evita que o formulário seja enviado

      var searchText = $("#search").val().toLowerCase();
      var contentSections = $("section.conteudo");

      contentSections.hide();

      contentSections.each(function () {
          var section = $(this);
          var content = section.text().toLowerCase();
          if (content.includes(searchText)) {
              section.show();

              // Rola a página até a seção correspondente
              $('html, body').animate({
                  scrollTop: section.offset().top
              }, 1000);
          }
      });
  });
});
