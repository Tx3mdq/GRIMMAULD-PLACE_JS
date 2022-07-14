const form1 = document.getElementById('form')
//const sendMail = document.getElementById('emailA')



async function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    const response = await fetch('https://formspree.io/f/mknyladk', {
        method: 'POST',
        body: fd,
        headers:{
            'Accept': 'application/json'
        }
    })

    if (response.ok){
        this.reset()
        alert('Reserva Realizada con exito')
    }else{
        alert('Error en la reserva')
    }
}
    

form.addEventListener('submit', handleSendEmail)

