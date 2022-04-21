import React, {useState} from "react";
import Style from "./Style.css"


const App = () => {

    const [count, setCount] = useState(0);
    const [lang, setLang] = useState('Javascript');


    const increase = () => {
        setCount(1);
        setLang('Python')
    }

    return (
        <>
            <button onClick={increase}>+++</button>
            <button>---</button>
            <h1>{count}</h1>
            <h1>{lang}</h1>
        </>


    )
}

export default App;






















