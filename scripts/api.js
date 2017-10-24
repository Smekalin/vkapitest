let userId = 1;
const button = document.getElementById("login-button");
button.addEventListener("click", _ => {
  VK.Auth.login(function(response) {
    if (response.session) {
      userId = response.session.userId;
      console.log(userId);
      showBlocksWhenAuthorized();
      showFriends(userId);
    } else {
      showBlocksWhenUnauthorized();
    }
  });
});

