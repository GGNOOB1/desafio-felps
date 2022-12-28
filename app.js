let msg = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

let msgDividida = msg.split(",");

console.log("Mensagem sem alteração:", msgDividida);

//const deslocamento = parseInt(prompt("Insira o numero do deslocamento: "));
const deslocamento = -1;

// Como é positivo será deslocado para a esquerda
if (deslocamento >= 0) {
    for (let i = 0; i < deslocamento; i++) {
        let teste = msgDividida.shift();
        msgDividida.push(teste);
    }
    console.log("Mensagem com alteração com número positivo", msgDividida);

} else {

    // Como é negativo o array inverte e será deslocado para a direita, nesse caso eu mudei o número para 
    // positivo e fiz o mesmo processo do número positivo
    if (deslocamento < 0) {
        msgDividida.reverse();

        let deslocamento1 = (deslocamento * deslocamento);

        for (let i = 0; i < deslocamento1; i++) {
            let teste = msgDividida.shift();
            msgDividida.push(teste);
        }
        console.log("Mensagem com alteração com número negativo", msgDividida);
    }



}


