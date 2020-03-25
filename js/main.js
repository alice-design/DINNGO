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
    if (username === "blake" && password === "blake-pwd") {
      page = "blake-page";
      console.log("blake");
    } else if (username === "andy" && password === "andy-pwd") {
      page = "andy.html";
      console.log("andy");
    } else if (username === "zd" && password === "zd-pwd") {
      page = "zd-page";
      console.log("zd");
    } else if (username === "jay" && password === "jay-pwd") {
      page = "jay-page";
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
    page = "andy.html";

    swal("Good job!", "You still remember your password!", "success").then(
      value => {
        window.location.replace("/" + page);
      }
    );
    return false;
  });
})(jQuery);
