var selecionados = 0;

function selecionarItem(elemento, tipo) {
    let checagem = document.querySelector(tipo + " .itemSelecionado");
    if (elemento.classList.contains("itemSelecionado")) {
        elemento.classList.remove("itemSelecionado");
        console.log("Primeiro IF");
        selecionados = selecionados - 1;
        console.log(selecionados);

    } else {
        if (checagem !== null) {
            checagem.classList.remove("itemSelecionado");
            elemento.classList.toggle("itemSelecionado");
            console.log('segundo if');
        } else {
            elemento.classList.toggle("itemSelecionado");
            console.log('segundo else');
            selecionados += 1;

        }

        console.log(selecionados);
    }
    checaPedido();
}

function checaPedido() {
    let pedido = document.querySelector("footer button")
    let pedidoDiv = document.querySelector(".fecharPedido")
    if (selecionados == 3) {
        console.log("Temos os 3 pedidos");
        pedidoDiv.classList.add("itemClicavel");
        pedidoDiv.classList.add("pedidoPronto");
        pedido.innerHTML = "Fechar Pedido";
    } else {
        pedidoDiv.classList.remove("itemClicavel");
        pedidoDiv.classList.remove("pedidoPronto");
        if (pedido.innerHTML !== null) {
            pedido.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
        }
    }
}

function fecharPedido() {
    if (selecionados == 3) {
        let nomePrato = document.querySelector(".pratos .itemSelecionado h2").innerHTML;
        let valorPrato = document.querySelector(".pratos .itemSelecionado p").innerHTML;
        let nomeBebida = document.querySelector(".bebidas .itemSelecionado h2").innerHTML;
        let valorBebida = document.querySelector(".bebidas .itemSelecionado p").innerHTML;
        let nomeSobremesa = document.querySelector(".sobremesa .itemSelecionado h2").innerHTML;
        let valorSobremesa = document.querySelector(".sobremesa .itemSelecionado p").innerHTML;
        let valorPedido = valorBebida + valorPrato + valorSobremesa;
        console.log("Nome: " + nomePrato + " Valor: " + valorPrato);
        console.log(valorPedido);
        console.log ("Sobremesa:   "+nomeSobremesa);
        let TextoWhatsApp = "Olá, gostaria de fazer o pedido: /n - Prato: " + nomePrato + "/n - Bebida: " + nomeBebida + "/n - Sobremesa: " + nomeSobremesa + "/n Total: " + valorPedido;
        console.log(TextoWhatsApp);


        // Olá, gostaria de fazer o pedido: 
        // - Prato: Frango Yin Yang
        //- Bebida: Coquinha Gelada
        //- Sobremesa: Pudim
        //Total: R$ 27.70
        // https://wa.me/númerodetelefonenowhatsapp?text=urldamensagempronta
    }
}