
import Accordion from "./Accordion";



export default function Filmler({char, films} ){




    return(
       
                <div>
                    
                   {films.filter((f)=>char.films.includes(f.title)).map((film,i) => (<Accordion key ={i} title ={film.title} >
                     <p> {film.opening_crawl}</p>
                     <p> Title: {film.title} </p>
                     <p> Director: {film.director}</p>
                     <p> Producer: {film.producer}</p>
                     <p> Release Date: {film.release_date}</p>

                   </Accordion>))};
                </div>
      

    );


}