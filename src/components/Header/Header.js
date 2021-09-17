const result = document.getElementById('result')
const filter = document.getElementById('filter')
const challengesList = []


getData()

    filter.addEventListener('input', (e) => filterData(e.target.value))

    function getData(){
            const res = DataChallenges;
            //console.log(res)
            const results = res;
            //console.log(results)
            
            

            

            results.forEach(challenge => {
            const li = document.createElement('li')
           
            challengesList.push(li)
                    

            li.innerHTML = `<p>${challenge.name}<p/>`
            result.appendChild(li)
            })
            result.innerHTML = ''
    }
    /*
    function filterData(searchTerm) {
        challengesList.forEach(item => {
            if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }
    */