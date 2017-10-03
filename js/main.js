// what happens when you click the button //
function listIt() {


var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Your Name is: " + username)
	var commentText = document.createTextNode("Commentary: " + comment)

	var newListItem = document.createElement("li")
	newListItem.className = "list-group"
	var newUserName = document.createElement("h3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}
