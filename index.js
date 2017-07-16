function showRepositories(event, data){
  console.log(this.responseText);
  let repos = JSON.parse(this.responseText);
  let repoList = '<ul>';
  for(let i of repos) { repoList += `<li>${i.name} - <a href="#" data-repo="${i.name}" onclick="getCommits(this)">Get Commits</a></li>`; }
  repoList += '</ul>';
  $("#repositories").html(repoList);
}

function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/j-ackerman/repos');
  req.send();
}

function showCommits(){
  const commits = JSON.parse(this.responseText);
  let commitsList = '<ul>';
  for(let i of commits) {
    commitsList += `<li><strong>${i.author.login}</strong> - ${i.commit.message}</li>`;
  }
  commitsList += '</ul>';
  $("#commits").html(commitsList);
}

function getCommits(el){
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", `https://api.github.com/repos/j-ackerman/${name}/commits`);
  req.send();
}
