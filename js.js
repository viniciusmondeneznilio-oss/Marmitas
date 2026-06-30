let numero = 5517991520113



function limitarCheckbox(classe, limite) {
    let itens = document.querySelectorAll("." + classe)
    
    itens.forEach(item => {
        item.addEventListener("change", function () {
            let marcados = document.querySelectorAll(
                "." + classe + ":checked"
            )
            
            if (marcados.length > limite) {
                this.checked = false
                alert(`Você só pode escolher ${limite} opções.`)
            }
        })
    })
}
setInterval(() => {
    limitarCheckbox("carne", 2)
    limitarCheckbox("refogados", 2)
}, 20);

function enviar(){
    let mensagem = "ola"
    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    )
}