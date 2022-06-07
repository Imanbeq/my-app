import React, {useEffect, useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    useEffect(() => {
        console.log('я буду меняться при каждом рендеринге');
    })

    useEffect(() => {
        console.log('я запущусь только один раз');
    }, [])

    useEffect(() => {
        console.log('я буду запускаться при изменении age')
    }, [age])

    const clickInc = () => {
        setCount(count + 1);
    }

    const clickDec = () => {
        setAge(age-1);
    }


    return (
       <>
           <div style={{textAlign:"center"}}>
               <h1>Hook useEffect</h1>
               <button onClick={clickInc}>+++</button>
               <button onClick={clickDec}>---</button>
               <h2>{count}</h2>
               <h2>{age}</h2>
           </div>
       </>
    )
}

export default App;
