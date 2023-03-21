import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);

    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=870")
        .then(response => {console.log(response);setPoke(response.data.results)})
    }, []);
    return (
        <div className='container'>
            <ol>
            { poke.length > 0 && poke.map((item, index)=>{
                return(<li key={index}>{item.name} {item.type}</li>)
            })}
        </ol>
        </div>
        
    );
    
}
export default Pokemon;