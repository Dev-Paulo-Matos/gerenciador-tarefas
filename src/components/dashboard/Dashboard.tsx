import React, { cloneElement, createElement, useRef, useState,  } from 'react'
import { JsxElement } from 'typescript'
import { ColumnPlaceHolder } from "../column/ColumnPlaceHolder"

export const DashBoard = () => {

    const [data, setData] = useState<any[]>([null]) 

    return (
        <div className='h-96'>
            <div className="conteiner  wx-auto h-24"></div>
            <div className="px-4 flex flex-1 overflow-x-scroll ">
                    {data.map((objeto,index) => {
                        if (objeto) {
                            return <ColumnPlaceHolder index={index}/>
                        }
                    })}
                <div className={"px-2 pl-6 py-1 w-36 bg-slate-100 border-slate-400 border-dashed border-2 flex cursor-pointer hover:bg-slate-200 ease-in duration-100"} onClick={() => { setData([...data, { name: 'a' }]) }}>
                    <h3 className="text-gray-500">Criar Coluna</h3>
                </div>
            </div>
        </div>
    )
}