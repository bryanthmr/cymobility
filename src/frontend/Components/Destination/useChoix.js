import {useState} from "react";


export  const useChoix = () => {

    const [choixSpe, setChoixSpe] = useState("");

    const [choixDest, setChoixDest] = useState("");

    return {choixSpe, setChoixSpe, choixDest, setChoixDest};

}