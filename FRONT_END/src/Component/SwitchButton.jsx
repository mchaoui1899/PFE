import { useState } from "react";

function SwitchButton({isOn , toogle ,reset }) {



return (
    <div>
        <button onClick={toogle}>ON/OFF</button>
        <button onClick={reset} >RESET</button>
    </div>



);


}

export default SwitchButton

