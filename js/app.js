
const playerSearch = () => {
      const searchValue =  document.getElementById('searchInput').value
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => showTeams(data.player))
    //   console.log(url) 
}

function showTeams(teams) {
    console.log(teams)
}
