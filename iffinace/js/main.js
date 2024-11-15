function openModal(){
    const modal = document.querySelector (".modal")
    modal.style.display = 'flex'
}

function closeModal(event){
    
    const modal = document.querySelector (".modal")
    
    if(event === undefined)
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
    const namecompany = event.target.namecompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.quantity.value

    cardList.innerHTML += `
                <div class="card-ticker">
                    <header>
                        <img src="${urlLogo}" alt="Logo">
                        <h4>${namecompany}</h4>
                        <span> ${ticker}</span>
                    </header>
                    <main>
                        <p>Valor: <span style="color: #lebdle">${closedValue} <span>🔺🔻</span></span></p>
                    </main>
                    <footer>
                        <p>Quantidade: <span> ${quantity} </span></p>
                        <p>Posição: <span>R$: ${quantity * closeModal}</span></p>
                    </footer>
                </div>
           `
    closeModal()
    event.target.reset()

}