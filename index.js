function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);

  let repoList = '<ul>';
  repoList += repos.map(r => `<li>${r.name} - <a href="#" data-repo="${r.name}" onclick="getCommits(this)">Get Commits</a></li>`).join('');
  repoList += '</ul>';

  document.getElementById('repositories').innerHTML = repoList;
}

function showCommits(event, data) {
  const commits = JSON.parse(this.responseText);

  let commitsList = '<ul>';
  commitsList += commits.map(c => `<li>${c.commit.message}</li>`).join('');
  commitsList += '</ul>';

  document.getElementById('commits').innerHTML = commitsList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function getCommits(element) {
  const name = element.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', `https://api.github.com/repos/octocat/${name}/commits`);
  req.send();
}
