function showCommits() {
  let commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(commit => "<li><strong>" +
   commit.commit.author.name + "</strong> - " + commit.commit.message +
   "</li>").join("")}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}

function getCommits(element) {
  const repoName = element.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", `https://api.github.com/repos/octocat/${repoName}/commits`);
  req.send();
}

function showRepositories(event, data) {
  let repos = JSON.parse(this.responseText);
  const repoList = "<ul>" + repos.map(repo => {
    return "<li>"
      + repo.name
      + " - "
      + `<a href="#" data-repo="${repo.name}" onclick="getCommits(this)">Get Commits</a>`
      + "</li>";
  }).join("") + "</ul>";
  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
}
