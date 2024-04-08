import {useEffect, useState} from "react";



export default function MenuDest(){
    //state
    const valeurTest = ["Angleterre","Allemagne","Suisse","Finlande","Etats-Unis","Corée du Sud","Japon"];
    const [data,setData] = useState("");
    //Behavior
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch("https://cymobility.go.yo.fr/api/data");
                const result = await response.json();
                setData(result);
            }
            catch(error){
                console.log("error")
            }

        }
        fetchData();
    }, []);
    //Printing
    return(
            <>
                <table>
                    <tbody>
                    {data ? (

                        <tr>
                            <td><p>{data[0]._id}</p></td>
                        </tr>

                    ) : (
                        <tr>
                            <td><p>Chargement...</p></td>
                        </tr>
                    )}
                    {valeurTest.map((pays) => <tr>
                        <td>
                            <button>{pays}</button>
                        </td>
                    </tr>)}

                    </tbody>
                </table>
            </>
        )


}