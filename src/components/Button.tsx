import { useState } from "react";


function Button(){
    // let count = 0;

    const [count, setCount] = useState(0) //o count representa o valor do estado, e setCount serve para alterar o valor de count

    function increment(){
        setCount(count + 1); // imutabilidade: count nao está sendo modificado está criando um novo valor
        console.log(count);
    }
    return (
        <button onClick={increment}>
            {count}
        </button>
    )
}

export default Button;