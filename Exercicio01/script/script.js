function carregar() {
    let msg = document.getElementById('msg')
    let foto = document.getElementById('foto')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora > 0 && hora <= 12){
        msg.innerHTML = "Bom dia"
        foto.src = './img/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    
    if(hora > 12 && hora <= 18){
        msg.innerHTML = "Boa tarde"
        foto.src = './img/fototarde.jpg'
        document.body.style.background = '#b9846f'
    }
    
    if(hora > 18 && hora <= 24){
        msg.innerHTML = "Boa noite"
        foto.src = './img/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}