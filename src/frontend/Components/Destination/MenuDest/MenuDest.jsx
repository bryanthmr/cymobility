import {useEffect, useState} from "react";

import "./MenuDest.css"



export default function MenuDest({setChoixDest,choixDest}){
    //state

    const [data,setData] = useState("");
    //Behavior
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch("https://cymobility.go.yo.fr/apiBryan/menuDest");
                const result = await response.json();


                setData(result);
            }
            catch(error){
                console.log(error);
            }

        }
        fetchData().then();
    }, []);

    const setStyleButton = (i,pays) => {

        let buttons = document.getElementsByClassName("MenuDest-bouton-bg");
        if(choixDest==="" || pays!==choixDest){




            buttons[i].style.backgroundColor = "white";
            buttons[i].style.background="rgba(240, 245, 217, 0.5)";
            buttons[i].style.border="2px solid #f0f5d9";
            buttons[i].style.color="#292F36";
            buttons[i].style.borderRadius="10px";

            for(let j=0;j<buttons.length;j++){
                if(j!==i){
                    buttons[j].style.backgroundColor='#292F36';
                    buttons[j].style.border="none";
                    buttons[j].style.fontSize="medium";
                    buttons[j].style.fontFamily="Linotype Didot";
                    buttons[j].style.color="white";
                    buttons[j].style.transition="background-color 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease";
                    buttons[j].style.width='140px';


                }
            }


            setChoixDest(pays);
    }
        else{
            buttons[i].style.backgroundColor='#292F36';
            buttons[i].style.border="none";
            buttons[i].style.fontSize="medium";
            buttons[i].style.fontFamily="Linotype Didot";
            buttons[i].style.color="white";
            buttons[i].style.transition="background-color 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease";
            buttons[i].style.width='140px';
            setChoixDest("");
        }

    }



    //Printing
    return(
            <>

                <body id="MenuDest-body">
                <table>
                    <tbody>


                    {data && data.map((pays,index) => <tr key={index}>
                        <td>
                            <button className="MenuDest-bouton-bg" onClick={()=>{setStyleButton(index,pays.pays)}}>{pays.pays}</button>
                        </td>
                    </tr>)}

                    </tbody>
                </table>
                </body>
            </>
        )


}