import React from 'react';
import "./Viewer.css";


const Viewer = () => {
    return <div 
            className="viewer"> 
            Viewer
            <div id="div1">
                <p id="p1">This is a paragraph.</p>
                <p id="p2">This is another paragraph.</p>
            </div>

            <script>
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(Node);

            const element = document.getElementById("div1");
            element.appendChild(para);
            </script>
            
    
            </div>;
    
}


export default Viewer;