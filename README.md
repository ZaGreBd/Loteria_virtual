# Simulador de LOTERIA

Este projeto é um simulador da *mega sena*, onde o usuário digita seis números, e sorteamos aleatoriamente
outros seis números e comparamos para verificar quantos números você acertou

**Não é para jogos oficiais**


## Tecnologias utilizadas
1. **HTML**: HTML é uma linguagem de marcação utilizada na construção das estruturas das páginas na Web.
2. **CSS**: Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.
3. **JS**: JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).
4. ~~**JQuery**~~: Não foi utilizado


## Funções Principal
Aqui será apresentado as duas principais funções do site


### Sorteio de Números
Nessa função os números são sorteados aleatoriamente
```
function sortearNumeros() {
	numSort = [];
	let sort;
	for (var i = 0; i < 6; i++) {
		do {
			sort = Math.ceil(Math.random() * 60);
			sort = (sort == 0) ? 1 : sort;
		}while(numSort.includes(sort));
			numSort.push(sort);
		}
}
```


### Lendo os números digitados
Lê as entradas de números digitadas pelo usuário
```
function addToList(num, pos) {
	if (num.length == 2) {
		if (numEsco.includes(num)) {
			Swal.fire('Número escolhido anteriormente :( Digite outro numero: ')
		}else if(parseInt(num) > 60){
			Swal.fire('O número digitado não pode ser maior que 60!!');
 		}else{
			numEsco[pos -1] = num;
		}
	}
}
```


## Como rodar o código
> Simplesmente baixe o código e abra o arquivo **_index.html_** no seu navegador


## Exemplo de tabela
|Exemplo   | Valor do exemplo | Quantidade |
|--------- | ---------------- | ---------- |
|Exemplo 1 | R$ 10            | 5          |
|Exemplo 2 | R$ 8             | 4          |
|Exemplo 3 | R$ 7             | 34         |
|Exemplo 4 | R$ 8             | 23         |


## Imagens da tela
Tela1: Tela de abertura
![Tela 1](/_images/tela1.png)
Tela2: 6 Números digitados, dois sorteados
![Tela 2](/_images/tela2.png)


#### Referências
* HTML: [Wikipedia](https://pt.wikipedia.org/wiki/HTML)
* CSS: [W3Schools](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
* JS: [Wikipedia](https://pt.wikipedia.org/wiki/JavaScript)
