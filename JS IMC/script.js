function menu() {
    window.location.href = "pagina.html";
  }
  
 

// IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Smurf",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Elfo",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Lobisomen",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Orc",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Dragao",
      obesity: "III",
    },
  ];
  
  // Seleção de elementos
  const imcTable = document.querySelector("#imc-table"); /// 
  
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const calcBtn = document.querySelector("#calc-btn");
  const clearBtn = document.querySelector("#clear-btn");
  
  const calcContainer = document.querySelector("#calc-container");
  const resultContainer = document.querySelector("#result-container");
  
  const imcNumber = document.querySelector("#imc-number span");
  const imcInfo = document.querySelector("#imc-info span");
  
  const backBtn = document.querySelector("#back-btn");
  
  // Funções
  function createTable(data) {
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("table-data");
  
      const classification = document.createElement("p");
      classification.innerText = item.classification; /// criando elemento para mostrar na tela
  
      const info = document.createElement("p");
      info.innerText = item.info;
  
      const obesity = document.createElement("p");
      obesity.innerText = item.obesity;
  
      div.appendChild(classification); /// adicionando a div criada
      div.appendChild(info);
      div.appendChild(obesity);
  
      imcTable.appendChild(div);
    });
  }
  
  function validDigits(text) {
    return text.replace(/[^0-9,]/g, ""); /// so pode ser numero e virgula
  }
  
  function calcImc(height, weight) {
    const imc = (weight / (height * height)).toFixed(1); // pegar somente o decimal
    return imc;
  }
  
  function cleanInputs() {
    heightInput.value = "";
    weightInput.value = "";
    imcNumber.className = "";
    imcInfo.className = "";
  } /// limpar
  
  function showOrHideResults() {
    calcContainer.classList.toggle("hide"); /// para aparecer a tabela, se tem hide ele tira se nao tem ele coloca
    resultContainer.classList.toggle("hide");
  }
  
  // Init
  createTable(data);
  
  // Eventos
  [heightInput, weightInput].forEach((el) => {
    el.addEventListener("input", (e) => {
      const updatedValue = validDigits(e.target.value); /// pegar o que esta sendo digitado
  
      e.target.value = updatedValue; /// atualizando o valor
    });
  });  /// evento de input para pegar oq esta sendo digitado
  
  calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const weight = +weightInput.value.replace(",", "."); /// toda virgula sera um ponto o + serve para isso tb
    const height = +heightInput.value.replace(",", ".");
  
    console.log(weight, height);
  
    if (!weight || !height) return; // bloqeia passagem para proxima tela caso nao sejam iseridos
  
    const imc = calcImc(height, weight);
    let info;
  
    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        info = item.info;
      }
    });
  
    if (!info) return; /// caso coloque um valor aonde o usuario nao se encaixa na faixa
  
    imcNumber.innerText = imc;
    imcInfo.innerText = info;
  
    switch (info) {
      case "Smurf":
        imcNumber.classList.add("low");
        imcInfo.classList.add("low");
        break;
      case "Elfo":
        imcNumber.classList.add("good");
        imcInfo.classList.add("good");
        break;
      case "Lobisomen":
        imcNumber.classList.add("low");
        imcInfo.classList.add("low");
        break;
      case "Orc":
        imcNumber.classList.add("medium");
        imcInfo.classList.add("medium");
        break;
      case "Dragao":
        imcNumber.classList.add("high");
        imcInfo.classList.add("high");
        break;
    }
  
    showOrHideResults();
  });
  
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    cleanInputs();
  });
  
  backBtn.addEventListener("click", (e) => {
    cleanInputs();
    showOrHideResults();
  });