
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let fsex = document.getElementsByName('radsex')
    let res = document.getElementById('res')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.getElementById('foto')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }

    if (fsex[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', './img/foto-bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', './img/foto-jovem-m.png')
            
        } else if (idade < 50) {
            img.setAttribute('src', './img/foto-adulto-m.png')
            
        } else {
            img.setAttribute('src', './img/foto-idoso-m.png')
        }

    } else {
    genero = 'Mulher'

    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/foto-fem-bebe.png')
    } else if (idade < 21) {
        img.setAttribute('src', './img/foto-fem-jovem.png')
    } else if (idade < 50) {
        img.setAttribute('src', './img/foto-fem-adulto.png')
    } else {
        img.setAttribute('src', './img/foto-fem-idoso.png')
    }
}

res.innerHTML = `Genero: ${genero} - Idade: ${idade}`
res.appendChild(img)
}