// Step 1: An AJAX request, detecting a button press and input text, and starting with JSON.

$(document).ready(function() {

	// Function to handle the clicking of the "Go" button
	// and display GitHub user information.
	$("#submit-button").click(function() {
		var	username = $("#github-username").val();
		var userUrl = "https://api.github.com/users/" + username;
		var reposUrl = "https://api.github.com/users/" + username + "/repos";
		console.log("click detected");
		// Call the requestJSON() function.
		requestJSON(userUrl, function(json) {
			console.log(json);
			console.log(username, userUrl, reposUrl)
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

