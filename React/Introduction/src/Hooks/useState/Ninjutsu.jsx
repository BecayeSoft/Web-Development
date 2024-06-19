/**
 * Hooks allows functional components to use React features without writing a class.
 * Without hooks, vvariables would be update in the browser but not in React Virtual DOM.
 */
import React, { useState } from 'react';

function Ninjutsu() {

    const [jutsu, setJutsu] = useState("Mokuton: Jukai Kōtan");
    const [level, setLevel] = useState(100000);

    const update_jutsu = () => {
        console.log(`Jutsu has been leveled up!: ${jutsu}`);
        setJutsu(() => "Mokuton: Shin Sūsenju");
        setLevel(l => l + 100000);
    }


    return (
        <div>
            <p>Name: {jutsu}</p>
            <button onClick={() => update_jutsu(jutsu)}>Set Jutsu</button>
        </div>
    )
}

export default Ninjutsu
