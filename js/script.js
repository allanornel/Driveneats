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
    let pedido = document.querySelector("footer buttom")
    let pedidoDiv = document.querySelector(".fecharPedido")
    if (selecionados == 3) {
        console.log("Temos os 3 pedidos");
        pedidoDiv.classList.add("itemClicavel");
        pedidoDiv.classList.add("pedidoPronto");
        pedido.innerHTML = "Fechar Pedido";
    } else {
        pedidoDiv.classList.remove("itemClicavel");
        pedidoDiv.classList.remove("pedidoPronto");
        pedido.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
    }
}