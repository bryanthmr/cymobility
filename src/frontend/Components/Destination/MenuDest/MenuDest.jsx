import {useEffect, useState} from "react";

import "./MenuDest.css"

export default function MenuDest(){
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
                console.log(error)
            }

        }
        fetchData().then();
    }, []);
    //Printing
    return(
            <>

                <body id="MenuDest-body">
                <table>
                    <tbody>


                    {data && data.map((pays,index) => <tr key={index}>
                        <td>
                            <button class="MenuDest-bouton-bg">{pays.pays}</button>
                        </td>
                    </tr>)}

                    </tbody>
                </table>
                </body>
            </>
        )


}