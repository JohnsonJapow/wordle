import { useContext } from "react";
import { AppContext } from "../App";
function Key({keyVal, bigKey, disabled}){
    const{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onEnter,onDelete}=useContext(AppContext);
    const seletLetter =()=>{
        if (keyVal==="ENTER") {
            onEnter();
        }
        else if(keyVal==="DELETE"){
            onDelete();
        }
        else{
            onSelectLetter(keyVal);
        }
    }
    return <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={seletLetter}>
                {keyVal}
            </div>
}
export default Key;