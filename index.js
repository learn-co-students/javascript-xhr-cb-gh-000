function getRepositories() {
  const req = new XMLHttpRequest
  req.open("GET", 'https://api.github.com/users/keithgordon/repos')
  req.send()

}
