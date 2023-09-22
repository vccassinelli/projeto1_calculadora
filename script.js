//Criando a classe da calculadora
class Calculator {
    constructor(){
        this.displayValue = " ";
    }
    appendToDisplay(value) {
        this.displayValue += value;
        this.uptadeDisplay();
    }
    //  Este método atualiza o elemento o input no html com o valor atual que está armazenado em displayValue
    uptadeDisplay(){
        document.getElementById("displayContent").value = this.displayValue
    }
    // Este método limpa o valor que está armazenado em displayValue e chama a função updateDisplay para atualizar
    //a tela com um valoor vazio
    clearDisplay(){
        this.displayValue = " ";
        this.uptadeDisplay()
    }
    //O método try catch executa o cálculo da expressão matématica contida
    //em displayValue. Esse método utiliza a função eval() para avaliar a expressão
    //e, se for bem sucerdidda, atualiza o displayValue com o resultado e chama a função uptadeDisplay().
    //Se ocorrer um erro durante a avaliação, ele atualiza o displayValue com a mensagem "Erro" e chama a 
    //a função uptadeDisplay().
    calculate(){
        try{
            //const result = eval(this.displayValue);
            const result = math.evaluate(this.displayValue);
            this.displayValue = result.toString();
            this.uptadeDisplay();
        } catch (error) {
            this.displayValue = "Erro"
            this.uptadeDisplay();
        }
       
    }
}

//Criando o objeto ou instanciando a classe
const calc = new Calculator();
