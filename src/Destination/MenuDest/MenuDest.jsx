





export default function MenuDest(){
    //state
    const valeurTest = ["Angleterre","Allemagne","Suisse","Finlande","Etats-Unis","Corée du Sud","Japon"];
    //Behavior

    //Printing
    return(
        <>
            <table>
                <tbody>
                    {valeurTest.map((pays) => <tr><td><button>{pays}</button></td></tr>)}
                </tbody>
            </table>
        </>
    )
}