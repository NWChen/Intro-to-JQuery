// Step 2: Starting input handling.

$(document).ready(function() {

	// Function to handle the clicking of the "Go" button
	// and display GitHub user information.
	$("#submit-button").click(function() {
		var	username = $("#github-username").val();
		var userUrl = "https://api.github.com/users/" + username;
		var reposUrl = "https://api.github.com/users/" + username + "/repos";

		// Call the requestJSON() function.
		requestJSON(userUrl, function(json) {

			console.log(json);

			// If an illegitimate GitHub username is entered, do proper input handling.
			if(json.message == "Not Found" || !username.trim())
				displayData(false, null);

			// Otherwise, display the user's information.
			else {
				console.log("found a legit user!");
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
function displayData(isValid, data) {
	if(isValid == false)
		$("#github-data").html("<span>User does not exist!</span>");
}

