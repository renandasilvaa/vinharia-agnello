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

// Console.log onde exibe o nome do vinho selecionado
console.log("Nome do Vinho: " + nomeVinho);
// Console.log onde exibe o tipo do vinho selecionado
console.log("Tipo do Vinho: " + tipoVinho);
// Console.log onde exibe o safra do vinho
console.log("Safra do Vinho: " + safraVinho);
// Console.log para a variavel " precoVinho"
console.log("Preço: R$ " + precoVinho.toFixed(2));
// Console.log para a variavel " quantidadeVinho"
console.log("Quantidade no Estoque: " + quantidadeVinho);

// Alert para a descrição do cadastro 
alert(`Descrição do Cadastro:\n\n Nome do vinho: ${nomeVinho}\n Tipo de Vinho: ${tipoVinho}\n Safra: ${safraVinho}\n Preço: R$ ${precoVinho}\n Quantidade no Estoque: ${quantidadeVinho}`);
