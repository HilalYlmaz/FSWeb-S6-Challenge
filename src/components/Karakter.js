// Karakter bileşeniniz buraya gelecek

import { useEffect , useState } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import Filmler from "./Filmler";

export default function Karakter(){
    const [chars, setChars] = useState([]);
    const [films, setFilms]= useState([]);
    const [loading, setLoading]= useState(true);
    
    useEffect(()=>{
        const charsPromise = axios("https://swapi.dev/api/people/");
        const filmsPromise = axios("https://swapi.dev/api/films/");
        Promise.all([charsPromise, filmsPromise]).then((values)=>{
            setChars(values[0].data);
            setFilms(values[1].data[0].results);
            setLoading(false);
        });
    }, []);



    return(
        <div>
            {loading && <h1>loading</h1>}
            {!loading && ( 
                <div>
                    
                   {chars.map((char,i) => (<Accordion key ={i} title ={char.name} >
                     <p> <span> Height: </span> {char.height}</p>
                     <p> <span>Mass: </span> {char.mass} </p>
                     <p> <span>Hair Color: </span> {char.hair_color}</p>
                     <p> <span>Skin Color: </span> {char.skin_color}</p>
                     <p> <span>Eye Color: </span> {char.eye_color}</p>
                     <p> <span>Birth Year:</span> {char.birth_year}</p>
                     <p> <span>Gender: </span> {char.gender}</p>
                     <Filmler char={char} films={films} />
                   </Accordion>))}
                </div>
             
            )}   
        </div>

    );


}