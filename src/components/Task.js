import React from "react"


export const Task = ({id, name, status, author, dT,chT}) =>{
    return(
        <div className="task">
            <div className="taskItem">Номер задачи {id}</div>
            <div className="taskItem">Название: {name}</div>
            <div className="taskItem" style={{color: status === 0 ? "green" : "red"}}>
                статус {status === 0 ? "Выполнено" : "Не выполнено"}
            </div>
            <div className="taskItem">Создатель: {author}</div>
            <div>
                <div onClick={() => dT(id)} className="taskItem">Удалить</div>
                <div onClick={() => chT(id)} className="taskItem">Поменять статус</div>
            </div>
            
        </div>
    )
}