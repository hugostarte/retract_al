import {  useState } from 'react';
import './Button.css';

export default function Button(){
    const [count,setCount] = useState(0);

    return (
        <button className="btn" onClick={() => {
            setCount(count +1);
        }} >Cliquez ici! {count} </button>
    );
}