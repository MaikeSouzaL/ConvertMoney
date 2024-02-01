const input = document.querySelector(".inputValue");
    const btn = document.querySelector("button");

    const selectFinal = document.querySelector("#select");
    const selectInicial = document.querySelector("#valorInicial");

    const nomemoeda1 = document.querySelector("#nomemoeda1");
    const valorEmDolar = document.querySelector("#valorconvertido");
    const valor = document.querySelector("#valor");
    const bandeiraInicio = document.querySelector("#logoInicio");
    const logoFinal = document.querySelector("#bandeira");
    const moeda = document.querySelector(".nomeMoeda");

    let real = 1;
    let dolar = 5.2;
    let euro = 6.4;

    function handleAcaount() {
      if (selectFinal.value === "") {
        alert("O valor não pode ser vazio");
      } else if (selectFinal.value === selectInicial.value) {
        alert("Os valores de seleção não podem ser iguais");
      } else {
        if (selectFinal.value === "dolar" && selectInicial.value === "real") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(input.value / dolar);
        }

        if (selectFinal.value === "dolar" && selectInicial.value === "euro") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(input.value / (euro / dolar));
        }

        if (selectFinal.value === "euro" && selectInicial.value === "real") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(input.value / euro);
        }

        if (selectFinal.value === "euro" && selectInicial.value === "dolar") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(input.value / euro);
        }

        if (selectFinal.value === "real" && selectInicial.value === "dolar") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(input.value * dolar);
        }

        if (selectFinal.value === "real" && selectInicial.value === "euro") {
          valor.innerHTML = input.value;
          valorEmDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(input.value * euro);
        }
      }
    }

    btn.addEventListener("click", handleAcaount);

    selectInicial.addEventListener("change", () => {
      if (selectInicial.value === "real") {
        bandeiraInicio.src = "assets/brasil.png";
        nomemoeda1.innerHTML = "Real";
      } else if (selectInicial.value === "dolar") {
        bandeiraInicio.src = "assets/estados-unidos.png";
        nomemoeda1.innerHTML = "Dólar";
      } else {
        bandeiraInicio.src = "assets/euro.png";
        nomemoeda1.innerHTML = "Euro";
      }

      handleAcaount();
    });

    selectFinal.addEventListener("change", function () {
      if (selectFinal.value === "dolar") {
        logoFinal.src = "assets/estados-unidos.png";
        moeda.innerHTML = "Dólar";
      } else if (selectFinal.value === "euro") {
        logoFinal.src = "assets/euro.png";
        moeda.innerHTML = "Euro";
      } else {
        logoFinal.src = "assets/brasil.png";
        moeda.innerHTML = "Real";
      }

      handleAcaount();
    });