$(document).ready(function () {
  let game_block = document.querySelectorAll(".game-block");
  app = {
    game_block: Array.from(game_block),
    enterName: function () {
      $(".overlay button").click(function () {
        if ($(".overlay input").val() !== "") {
          $(".overlay").css({ display: "none" });
          setTimeout(() => {
            game_block.forEach((e) => {
              e.classList.remove("activeCart");
            });
          }, 2000);
        }
        $(".name").text($(".overlay input").val());
      });
    },
    onload: function () {
      $(".game-block").each(function () {
        $(this).addClass("activeCart");
      });
    },

    setId: function () {
      $(".game-block").each(function () {
        $(this).on("click", () => {
          $(this).attr("id", $(this).data("technology"));
        });
      });
    },
    addClass: function () {
      $(".game-block").each(function () {
        $(this).on("click", () => {
          let r = $(".game-block").filter(".activeCart").length;
          if (r < 2) {
            $(this).addClass("activeCart");
            app.check();

            setTimeout(() => {
              game_block.forEach((e) => {
                e.classList.remove("activeCart");
              });
            }, 2000);
          }
        });
      });
    },
    removeClass: function () {
      $(".game-block").each(function () {
        $(this).on("click", () => {
          $(this).removeClass("activeCart");
        });
      });
    },
    check: function () {
      if ($(".activeCart").length === 2) {
        if (
          $(".activeCart").first().attr("id") ===
          $(".activeCart").last().attr("id")
        ) {
          $(".activeCart").each(function () {
            $(this).addClass("sabitCart");
          });
          app.inccrement();
        } else {
          app.minus();
        }
      }
    },
    inccrement: function () {
      let True = parseInt($(".true").text());

      $(".true").text(True + 1);
    },
    minus: function () {
      let Wrong = parseInt($(".wrong").text());

      $(".wrong").text(Wrong + 1);
    },
  };
  app.onload();

  app.setId();
  app.enterName();
  app.addClass();
});
