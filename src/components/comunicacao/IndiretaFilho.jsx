import React from "react";

export default props=>{
    const callback = props.callInfo
    const gerarIdade = ()=> parseInt(Math.random() * (20) + 50)
    return(
        <div>
            <div>Filho</div>
            <button onClick={e =>props.callInfo('João', gerarIdade(), true)}>fornecer Info</button>
        </div>
    )
}
