import { useEffect, useState } from "react";


function UseHook() {

    // const [todos, setTodos] = useState(null);
    // const [isloding, setIsloding] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("https://jsonplaceholder.typicode.com/todos")
    //             .then((res) => {
    //                 if (!res.ok) {
    //                     throw Error("Fetching is a not Succussful!!");
    //                 } else {
    //                     return res.json();
    //                 }

    //             }).then((data) => {
    //                 setTodos(data);
    //                 setIsloding(!isloding);
    //                 setError(null);
    //             })
    //             .catch((error) => {
    //                 setError(error.message);
    //                 setIsloding(!isloding);
    //             })
    //     }, 2000);
    // }, []);

    // const todoData =
    //     todos &&
    //     todos.map((todo) => {
    //         return <p key={todo.id}>{todo.title}</p>
    //     });

    // const todoLoding = <p style={{color: 'yellow'}}>Loding is a Successful!</p>

    const [todos, setTodos] = useState(null);
    const [isloding, setIsloding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Data is a Not Successful!")
                    } else {
                        return res.json();
                    }

                }).then((data) => {
                    setTodos(data);
                    setIsloding(false);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                    setIsloding(false);
                })
        }, 2000);
    }, [])

    const todoData =
        todos &&
        todos.map((todo) => {
            return <div key={todo.id}>
                <h3 >{todo.title}</h3>
                <p>{todo.completed}</p>
            </div>

        })

    const lodingData = <p>Loding is a Successful!!</p>


    return (
        <div>
            {/* <h1>FakeData</h1>
            {isloding && todoLoding}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {todoData} */}

            <h1>FakeData</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}           
            <h5 style={{ color: 'blue' }}>{isloding && lodingData}</h5>
            {todos && todoData}
        </div>
    )
}

export default UseHook