import React, {useState, useEffect} from "react";
import './Temp.css';

export const Temp = () => {
    const [count, setCount]= useState(0);
    const [appState, setAppState] = useState<{userId:number, id: number, title: string, completed: boolean}>({} as any);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/'+ count)
            .then(response => response.json())
            .then(json => setAppState(json)).catch(err=>console.log(err))
    }, [count]);

    useEffect(()=>{
        console.log(appState)
    },[appState])


    const incrementer = () => {
        setCount(count+1)
    }
    const decrementer = () => {
        if (count>0)
            setCount(count-1)
    }

    return (


        <div>
            <button className="button"

                onClick={()=> incrementer()}>
                Click to Increment
            </button>
            <button className="button button3"

                    onClick={()=> decrementer()}>
                Click to Decrement
            </button>

            <p>{count}</p>

            <a> Api Response:  </a>
            <p>UserId: {JSON.stringify(appState["userId"], null, 2)}</p>
            <p>Id: {JSON.stringify(appState["id"], null, 2)}</p>
            <p>Title: {JSON.stringify(appState["title"], null, 2)}</p>
            <p>Completed: {JSON.stringify(appState["completed"], null, 2)}</p>


        </div>

    )

}


