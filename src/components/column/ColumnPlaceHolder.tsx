import { useState } from 'react';


export const ColumnPlaceHolder = () => {
    const [styleBox, setStyleBox] = useState("px-2 pl-6 py-1 w-36 bg-slate-100 border-slate-400 border-dashed border-2 flex cursor-pointer hover:bg-slate-200 ease-in duration-100")
    const [styleInput, setStyleInput] = useState("hidden")
    
    const changeStyle = () =>{
        styleBox.includes('hidden') ? (setStyleBox("px-2 pl-6 py-1 w-36 bg-slate-100 border-slate-400 border-dashed border-2 flex cursor-pointer hover:bg-slate-200 ease-in duration-100") ): setStyleBox(" hidden")
        styleInput.includes('hidden') ? (setStyleInput("") ): setStyleInput(" hidden")
    }
    return (

        <div className="w-full px-4 mx-auto">
            <div className={styleBox} onClick={() => changeStyle()}>
                <h3 className="text-gray-500">Criar Coluna</h3>
            </div>
            <div className={styleInput}>
                <input type="text" />
            </div>
        </div>
    )
}