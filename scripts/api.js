VK.init({
  apiId: 6231710
});
VK.Auth.getLoginStatus(function (response) {
  if (response.session) {
    showBlocksWhenAuthorized();
    showFriends();
  } else {
    showBlocksWhenUnauthorized();
  }
})

function showBlocksWhenUnauthorized() {
  const loginButton = document.getElementById("login-button");
  loginButton.style.display = "block";
  const friendsBlock = document.getElementById("friends");
  friendsBlock.style.display = "none";
}

function showBlocksWhenAuthorized() {
  const loginButton = document.getElementById("login-button");
  loginButton.style.display = "none";
  const friendsBlock = document.getElementById("friends");
  friendsBlock.style.display = "block";
}

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

