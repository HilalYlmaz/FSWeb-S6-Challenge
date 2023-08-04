import { useState } from "react";

function Accordion({title, children}){
    const [isOpen, setIsOpen]= useState(true);
   

    return(
        <div className="accordion">
            <div className="accordion-title" onClick={()=>{setIsOpen(!isOpen)}} > {title} </div>
            {isOpen && <div className="accordion-details"> {children} </div>}
        </div>
    )
}
export default Accordion;