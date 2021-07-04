function getCommits(el) {
  // Get data-repo through dataset property
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits);
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}

function showRepositories(event, data) {
    //this is set to the XMLHttpRequest object that fired the event
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories)
  /* set up request - HTTP verb & URL for request */
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  /* send request */
  req.send()
}