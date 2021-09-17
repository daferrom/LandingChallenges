import React from 'react'
import DataChallenges from '../../database/challengesList.json'

const Header = () => {
    const result = document.getElementById('result')
    const filter = document.getElementById('filter')
    const challengesList = []

    getData()

    //filter.addEventListener('input', (e) => filterData(e.target.value))

    function getData(){
            const res = DataChallenges;
            //console.log(res)
            const results = res;
            console.log(results)
            result.innerHTML = ''

            results.forEach(challenge => {
                const li = document.createElement('li')
                console.log(li)
                challengesList.push(li)
                    

            li.innerHTML = `<p>${challenge.name}<p/>`

            result.appendChild(li)

            //results.appendChild(li)
    })

}



    return (
        <div className="header">
        <h4 class="title">Buscador</h4>
        <small class="subtitle">Buscar reto por nombre </small>
        <input type="text" id="filter" placeholder="Buscar"></input>
        
        <ul id="result" class="user-list">
            <li>
            <h3>Loading...</h3>
            </li>
        </ul>
        </div>
    )
}

export default Header
