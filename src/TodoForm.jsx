import React from "react";
import firebase from "firebase";
import {useHistory} from 'react-router-dom'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    const logOut =()=> {
        firebase.auth().signOut().then(()=> {
            history.push('/signup')
        }).catch(e=>console.log(e))
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type={"submit"}>Sumbit</button>
        </form>
    <button onClick={logOut}>Log Out</button>
        </>
    );
}
