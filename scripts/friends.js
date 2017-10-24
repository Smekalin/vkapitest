function showFriends(userId) {
  const friendsBlock = document.getElementById("friends");
  if (friendsBlock.style.display !== "none") {
    VK.api("friends.get", {user_ids: userId, count: 5, order: "random", fields: "nickname, photo_100"}, function(response){
      console.log(response);
      const friends = response.response.map(item => {
        return {
          first_name: item.first_name,
          last_name: item.last_name,
          photo_100: item.photo_100
        }
      });
      const list = listOfFriends(friends);
      friendsBlock.appendChild(list);
    });
  } else {
    console.log('sorry');
  }
}


function listOfFriends(friends) {
  let ul = document.getElementsByClassName("friends-list")[0];
  friends.forEach(item => {
    ul.appendChild(friendToListElement(item));
  });
  return ul;
}

function friendToListElement({first_name, last_name, photo_100}) {
    let friendPhoto = document.createElement("img");
    friendPhoto.classList.add("friends-photo");
    friendPhoto.src = photo_100;

    let friendName = document.createElement("span");
    friendName.classList.add("friends-name");
    friendName.innerText = `${first_name} \n ${last_name}`;

    let friendItem = document.createElement("div");
    friendItem.classList.add("friends-item");
    friendItem.appendChild(friendPhoto);
    friendItem.appendChild(friendName);

    let li = document.createElement("li");
    li.appendChild(friendItem);
    return li;
}