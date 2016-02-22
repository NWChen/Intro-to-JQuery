// Step 3: Extracting and displaying GitHub user data.

$(document).ready(function() {

	// Function to handle the clicking of the "Go" button
	// and display GitHub user information.
	$("#submit-button").click(function() {
		var username = $("#github-username").val();
		var userUrl = "https://api.github.com/users/" + username;
		var reposUrl = "https://api.github.com/users/" + username + "/repos";

		// Call the requestJSON() function.
		requestJSON(userUrl, function(json) {

			// If an illegitimate GitHub username is entered, do proper input handling.
			if(json.message == "Not Found" || !username.trim())
				displayData(false, null);

			// Otherwise, display the user's information.
			else {

				// Extract useful data from the JSON response.
				var data = new Array();
				data["username"] = username;
				data["avatar_url"] = json.avatar_url;
				data["email"] = json.email;
				data["followers"] = json.followers;
				data["following"] = json.following;
				data["html_url"] = json.html_url;
				data["location"] = json.location;
				data["name"] = json.name;
				data["public_repos"] = json.public_repos;
				displayData(true, data);
			}

		});
	});
});

// Function to make an AJAX request to a service, in this case GitHub's user API.
function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
};

// Function to display data from GitHub.
function displayData(isValid, userData) {
	if(isValid == false)
		$("#github-data").html("<span>User does not exist!</span>");
	else {
		var username = "@" + userData["username"];
		$("#github-data").html("<span><strong>" + username +
			 "</strong> has <strong>" + userData["followers"] + "</strong> followers, follows <strong>" +
			 userData["following"] + "</strong> users, is located in <strong>" + userData["location"] + "</strong>, and has <strong>" +
			 userData["public_repos"] + "</strong> public repositories. <strong>" + username + "</strong>'s real name is <strong>" +
			 userData["name"] + "</strong>.");

	}
}

