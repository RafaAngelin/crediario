function calcular() {
    var valorProduto = parseFloat(produto.value);
    var valorParcela = parseInt(parcela.value);
    var valorEntrada = parseFloat(entrada.value);
    var valorTipo = tipo.value;
    var valorResultado = 0;

    if (valorParcela == 1 && valorTipo == 1) {
        valorResultado = valorProduto * 1.040;
    }
    if (valorParcela == 1 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.5098);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 2 && valorTipo == 1) {
        valorResultado = valorProduto * 0.5302;
    }
    if (valorParcela == 2 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.3465);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 3 && valorTipo == 1) {
        valorResultado = valorProduto * 0.3603;
    }
    if (valorParcela == 3 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.2649);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 4 && valorTipo == 1) {
        valorResultado = valorProduto * 0.2820;
    }
    if (valorParcela == 4 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.2200);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 5 && valorTipo == 1) {
        valorResultado = valorProduto * 0.2310;
    }
    if (valorParcela == 5 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1876);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 6 && valorTipo == 1) {
        valorResultado = valorProduto * 0.2034;
    }
    if (valorParcela == 6 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1690);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 7 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1791;
    }
    if (valorParcela == 7 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1519);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }
    
    if (valorParcela == 8 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1610;
    }
    if (valorParcela == 8 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1387);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 9 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1535;
    }
    if (valorParcela == 9 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1331);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 10 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1424;
    }
    if (valorParcela == 10 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1246);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 11 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1334;
    }
    if (valorParcela == 11 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1177);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 12 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1259;
    }
    if (valorParcela == 12 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1118);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 13 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1197;
    }
    if (valorParcela == 13 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1069);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 14 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1143;
    }
    if (valorParcela == 14 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1026);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 15 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1098;
    }
    if (valorParcela == 15 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0989);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 16 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1130;
    }
    if (valorParcela == 16 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.1015);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 17 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1096;
    }
    if (valorParcela == 17 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0988);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 18 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1067;
    }
    if (valorParcela == 18 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0964);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 19 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1041;
    }
    if (valorParcela == 19 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0943);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 20 && valorTipo == 1) {
        valorResultado = valorProduto * 0.1019;
    }
    if (valorParcela == 20 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0924);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 21 && valorTipo == 1) {
        valorResultado = valorProduto * 0.0998;
    }
    if (valorParcela == 21 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0908);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 22 && valorTipo == 1) {
        valorResultado = valorProduto * 0.0980;
    }
    if (valorParcela == 22 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0893);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 23 && valorTipo == 1) {
        valorResultado = valorProduto * 0.0964;
    }
    if (valorParcela == 23 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0879);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    if (valorParcela == 24 && valorTipo == 1) {
        valorResultado = valorProduto * 0.0950;
    }
    if (valorParcela == 24 && valorTipo == 2) {
        valorResultado = (valorProduto * 0.0867);
        valorResultado = valorResultado * (valorParcela + 1)
        valorResultado = valorResultado - valorEntrada;
        valorResultado = valorResultado / valorParcela;
    }

    resultado.innerHTML = "Parcela: " + valorResultado.toFixed(2);
    if (valorTipo == 1){
        total.innerHTML = "Valor total: " + (valorResultado*valorParcela).toFixed(2);
    }
    if (valorTipo == 2){
        total.innerHTML = "Valor total: " + ((valorResultado*valorParcela)+valorEntrada).toFixed(2);
    }


}