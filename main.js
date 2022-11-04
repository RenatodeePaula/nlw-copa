function createMatch (team1, hour, team2) {
    return `
         <li>
                <img src="./assets/icon-${team1}.svg" alt="Bandeira de ${team1}">
                <strong>${hour}</strong>
                <img src="./assets/icon-${team2}.svg" alt="Bandeira de ${team2}">
         </li>  
    `
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `          
  <header>
      <img src="./assets/logo.svg" alt="Logo da NLW">
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta",
        createMatch("switzerland", "07:00", "cameroon")+
        createMatch("uruguay", "10:00", "south-korea") +
        createMatch("brazil", "16:00", "serbia")        
        
    )}

    ${createCard("28/11", "segunda",
        createMatch("cameroon","07:00", "serbia")+
        createMatch("south-korea", "10:00", "ghana")+
        createMatch("brazil", "13:00", "switzerland" )
    )}
    
    ${createCard("02/12", "sexta", 
        createMatch("south-korea", "12:00", "portugal")+
        createMatch("ghana", "12:00", "uruguay") +
        createMatch("cameroon", "16:00", "brazil")
    )}
  </main>
  `