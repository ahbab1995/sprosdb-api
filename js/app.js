
const playerSearch = () => {
      const searchValue =  document.getElementById('searchInput').value
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => showTeams(data.player))
    //   console.log(url) 
}

function showTeams(players) {
    for (const player of players) {
            const playerCon = document.getElementById('playerContaner')
            const div = document.createElement('div')
            div.innerHTML = ` 
             <div class="col">
                <div class="card">
                    <img src="${player.strThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${player.strPlayer}</h5>
                            <h5>Country: ${player.strNationality}</h5>
                            <p class="card-text">${player.strDescriptionEN.slice(0,100)}</p>
                        </div>
                        <div class="button-container text-center p-2">
                            <button  class="delete-btn btn btn-danger">Delete</button>
                            <button onclick="details('${player.idPlayer}')"  class="details-btn btn btn-success">Details</button>
                        </div>
                </div>
            </div>`
            playerCon.appendChild(div)
            // console.log(player)
    }
}

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
}
