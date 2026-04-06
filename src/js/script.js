let nomeVinho = prompt("Digite o nome do vinho:");
let tipoVinho = prompt("Digite o tipo do vinho: Tinto, Branco, Rosé");
let safraVinho = prompt("Digite a safra do vinho:");
let quantidadeVinho = parseInt(prompt("Digite a quantidade de garrafas no estoque:"));
let precoVinho = parseFloat(prompt("Digite o preço do vinho:"));

alert("O Cadastro foi realizado com sucesso! Veja mais detalhes no console.");

alert(`Nome do Vinho já está disponível no console!`);
console.log("Nome do Vinho: " + nomeVinho);
alert(`Tipo de Vinho já está disponível no console!`);
console.log("Tipo do Vinho: " + tipoVinho);
alert(`Safra do Vinho já está disponível no console!`);
console.log("Safra do Vinho: " + safraVinho);
alert(`Preço do Vinho já está disponível no console!`);
console.log("Preço: R$ " + precoVinho.toFixed(2));
alert(`Quantidade no Estoque já está disponível no console!`);
console.log("Quantidade no Estoque: " + quantidadeVinho);