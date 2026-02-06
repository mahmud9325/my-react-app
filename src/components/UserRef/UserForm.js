import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


// const booksList = [

//     { id: 1, name: 'Bangla' },
//     { id: 2, name: 'Englash' },
//     { id: 3, name: 'Arabic' }

// ];

// const Modal = ({ modalText }) => {
//     return <p>{modalText}</p>
// }

// const reducer = (state, action) => {
//     // action: type , action: payload;
//     if (action.type === "ADD") {
//         const allBook = [...state.books, action.payload]
//         return {
//             ...state,
//             books: allBook,
//             isModal: true,
//             modalText: "Book is added"
//         }
//     }
//     if (action.type === "REMOVE") {
//         const filteredBook = [...state.books].filter((book) => book.id !== action.payload);
//         return {
//             ...state,
//             books: filteredBook,
//             isModal: true,
//             modalText: "Book is Removed",
//         }
//     }

//     return state;
// }

function UserForm() {

    // const [bookState, dispatch] = useReducer(reducer, {
    //     books: booksList,
    //     isModal: false,
    //     modalText: ""
    // });

    // const [bookName, setBookName] = useState("");

    // const handleChange = (e) => {
    //     setBookName(e.target.value);

    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newBook = { id: uuidv4(), name: bookName }
    //     dispatch({ type: "ADD", payload: newBook });
    //     setBookName("");
    // };

    // const removeBtn = (id) => {
    //     dispatch({ type: "REMOVE", payload: id })
    // }

    return (
        <div>
            {/* <h1>Books List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={handleChange} /><br /><br />
                <button>Add Book</button>
            </form><br />
            {bookState.isModal && <Modal modalText={bookState.modalText} />}
            {bookState.books.map((book) => {
                const { id, name } = book;
                return <li key={id}>
                    {name}
                    <button onClick={() => { removeBtn(id) }}>Remove</button>
                </li>
            })} */}

            
        </div>
    )
}

export default UserForm