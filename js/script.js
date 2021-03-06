var selecionados = 0;

function selecionarItem(elemento, tipo) {
    let checagem = document.querySelector(tipo + " .itemSelecionado");
    if (elemento.classList.contains("itemSelecionado")) {
        elemento.classList.remove("itemSelecionado");
        selecionados = selecionados - 1;

    } else {
        if (checagem !== null) {
            checagem.classList.remove("itemSelecionado");
            elemento.classList.toggle("itemSelecionado");
        } else {
            elemento.classList.toggle("itemSelecionado");
            selecionados += 1;

        }

    }
    checaPedido();
}

function checaPedido() {
    let pedido = document.querySelector("footer div")
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
        let nomePessoa = prompt("Qual seu nome? ");
        let endereco = prompt("Endereço? ");
        let nomePrato = document.querySelector(".pratos .itemSelecionado h2").innerHTML;
        let valorPrato = document.querySelector(".pratos .itemSelecionado p").innerHTML;
        let nomeBebida = document.querySelector(".bebidas .itemSelecionado h2").innerHTML;
        let valorBebida = document.querySelector(".bebidas .itemSelecionado p").innerHTML;
        let nomeSobremesa = document.querySelector(".sobremesa .itemSelecionado h2").innerHTML;
        let valorSobremesa = document.querySelector(".sobremesa .itemSelecionado p").innerHTML;

        valorPrato = valorPrato.replace("R$ ", "");
        valorBebida = valorBebida.replace("R$ ", "");
        valorSobremesa = valorSobremesa.replace("R$ ", "");
        valorPrato = valorPrato.replace(",", ".");
        valorBebida = valorBebida.replace(",", ".");
        valorSobremesa = valorSobremesa.replace(",", ".");


        let valorPedido = parseFloat(valorPrato) + parseFloat(valorBebida) + parseFloat(valorSobremesa);
        valorPedido = valorPedido.toFixed(2);
        console.log(valorPedido);
        let TextoWhatsApp = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + "\n Total: R$ " + valorPedido + "\n\n Nome: " + nomePessoa + "\n Endereço: " + endereco;
        console.log(TextoWhatsApp);

        const url = "https://wa.me/5553999958472?text=" + encodeURIComponent(TextoWhatsApp);
        console.log(url);
        window.open(url, "_blank");
    }
}