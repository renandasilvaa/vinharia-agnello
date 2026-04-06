let nomeVinho = prompt("Digite o nome do vinho:");
alert(`Nome do Vinho já está disponível no console!`);
let tipoVinho = prompt("Digite o tipo do vinho: Tinto, Branco, Rosé");
alert(`Tipo de Vinho já está disponível no console!`);
let safraVinho = prompt("Digite a safra do vinho:");
alert(`Safra do Vinho já está disponível no console!`);
let precoVinho = parseFloat(prompt("Digite o preço do vinho:"));
alert(`Preço do Vinho já está disponível no console!`);
let quantidadeVinho = parseInt(prompt("Digite a quantidade de garrafas no estoque:"));
alert(`Quantidade no Estoque já está disponível no console!`);

alert("O Cadastro foi realizado com sucesso! Veja mais detalhes no console.");

console.log("Nome do Vinho: " + nomeVinho);
console.log("Tipo do Vinho: " + tipoVinho);
console.log("Safra do Vinho: " + safraVinho);
console.log("Preço: R$ " + precoVinho.toFixed(2));
console.log("Quantidade no Estoque: " + quantidadeVinho);