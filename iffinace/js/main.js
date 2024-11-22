function openModal(id){
    const modal = document.querySelector (id)
    modal.style.display = 'flex'
}

function closeModal(event, id){
    
    const modal = document.querySelector (id)
    
    if(event === null)
        return modal.style.display = 'none'


    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}

function handleSubmitAddTicker (event){
    event.preventDefault()
    console.log(event.target.urlLogo)
}

function AddTicker(event){
    event.preventDefault()
    const cardList = document.querySelector('#card-list')

    //evenet.target (form)
    const urlLogo= event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    const tickerData ={
        urlLogo,
        nameCompany,
        ticker,
        quantity,
        closedValue
    }

    addOrUptadeTicker(tickerData)
    closeModal(null, '#modal-add-ticker')
    event.target.reset()

    /*cardList.innerHTML += `
                    <div class="card-ticker" id ="${ticker}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                    <header>
                        <img src="${urlLogo}" alt="Logo">
                        <h4>${nameCompany}</h4>
                        <span> ${ticker}</span>
                    </header>
                    <main>
                        <p>Valor: <span style="color: #lebdle">${closedValue} <span>🔺🔻</span></span></p>
                    </main>
                    <footer>
                        <p>Quantidade: <span> ${quantity} </span></p>
                        <p>Posição: <span>R$: ${quantity * closeModal}</span></p>
                        <div class="card-options">
                            <button onclick="editTicker(event)">Editar</button>
                            <button onclick="removeCard(event)">Excluir</button>
                    </div>
                    </footer>
                </div>
           `
    closeModal()
    event.target.reset()
    */
}

function showCardOptions(event){
    //console.log(event.target)
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'flex'
}
function hideCardOptions(event){
    //console.log(event.target)
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'none'
}

function removeCard(event){
    //closest busca nos ascendentes um elemento
    const cardTicker = event.target.closest('.card-ticker')
    cardTicker.remove()
    //.remove() elimina um elemento do html
}

function editTicker(event){
    const cardTicker = event.target.closest('.card-ticker')
    console.log(cardTicker)
    const imgLogo = cardTicker.querySelector('header img')
    const urlLogo = imgLogo.getAttribute('src') //pegar um atributo, tipo pegar só a url.
    document.querySelector('#eUrlLogo').value = urlLogo


    const nameCompany = cardTicker.querySelector('header h4').innerText
    document.querySelector('#eNameCompany').value= nameCompany

    openModal('#modal-edit-ticker')
}

function uptadeTicker(event){
    event.preventDefault()
    const cardList = document.querySelector('#card-list')

    const urlLogo= event.target.eUrlLogo.value
    const nameCompany = event.target.eNameCompany.value
    const ticker = event.target.eTicker.value
    const quantity = event.target.eQuantity.value
    const closedValue = event.target.eClosedValue.value
    event.preventDefault()

    //evenet.target (form)

    const tickerData ={
        urlLogo,
        nameCompany,
        ticker,
        quantity,
        closedValue
    }

    addOrUptadeTicker(tickerData)
    closeModal()

}

function addOrUptadeTicker(tickerData){
    const ticker = document.querySelector(`#tickerData.ticker`)
    console.log(ticker)
    if(ticker){
        ticker.querySelector('header img').setAttribute('src', tickerData.urlLogo)
        ticker.querySelector('header h4').innerHTML = tickerData.nameCompany
        ticker.querySelector('main p span').innerHTML = tickerData.closedValue + ' '
        ticker.querySelector('footer p span').innerHTML = tickerData.quantity
        ticker.querySelector('footer p:last-child span').innerHTML = 'R$' + (tickerData.quantity * tickerData.closeModal)
        
    } else{
        const cardList = document.querySelector('#card-list')
        cardList.innerHTML += `
                        <div class="card-ticker" id ="${tickerData.ticker}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                        <header>
                            <img src="${tickerData.urlLogo}" alt="Logo">
                            <h4>${tickerData.nameCompany}</h4>
                            <span> ${tickerData.ticker}</span>
                        </header>
                        <main>
                            <p>Valor: <span style="color: #lebdle">${tickerData.closedValue} <span>🔺🔻</span></span></p>
                        </main>
                        <footer>
                            <p>Quantidade: <span> ${tickerData.quantity} </span></p>
                            <p>Posição: <span>R$: ${tickerData.quantity * tickerData.closeModal}</span></p>
                            <div class="card-options">
                                <button onclick="editTicker(event)">Editar</button>
                                <button onclick="removeCard(event)">Excluir</button>
                        </div>
                        </footer>
                    </div>
               `
    }
}