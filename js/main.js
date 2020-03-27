(function($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function() {
    var check = true;
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();
    // console.log(input);
    // console.log(username);
    // console.log(password);

    var page = "andy.html";
    if (
      username === "blake" &&
      (password === "20180312" || password === "dinngodinngo1234")
    ) {
      page = "i_respect_your_work.html";
      console.log("blake");
    } else if (
      username === "andy" &&
      (password === "20190304" || password === "dinngodinngo1234")
    ) {
      page = "i_ve_never_seen_anyone_do_it_better.html";
      console.log("andy");
    } else if (
      username === "zd" &&
      (password === "20190327" || password === "dinngodinngo1234")
    ) {
      page = "he_is_so_brilliant.html";
      console.log("zd");
    } else if (
      username === "jay" &&
      (password === "20190327" || password === "dinngodinngo1234")
    ) {
      page = "a_man_of_smart_and_energetic_young_people.html";
      console.log("jay");
    } else {
      //   alert("Wrong email or password.");
      swal(
        "Login Fail...",
        "Invalid email or password, please try again.",
        "error"
      );
      return false;
    }
    console.log(page);
    // page = "andy.html";

    swal("Good job!", "You still remember your password!", "success").then(
      value => {
        window.location.replace("/" + page);
      }
    );
    return false;
  });
})(jQuery);
