function fetchUserDetails() {
  const username = document.getElementById("username").value;

  if (username === "") {
    alert("Please enter a GitHub username");
    return;
  }

  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const userDetails = `
        <h2>${data.login}</h2>
        <p>Name: ${data.name}</p>
        <p>Public Repositories: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p>GitHub URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
      `;
      document.getElementById("user-details").innerHTML = userDetails;
    })
    .catch(error => {
      console.log(error);
      alert("An error occurred while fetching user details");
    });
}
