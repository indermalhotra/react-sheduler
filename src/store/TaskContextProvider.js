import TaskContext from "./TaskContext";
import { useState } from "react";

const TaskContextProvider = (props) =>{
    
    const [dataUpdated, setDataUpdate] = useState([]);
    
    const updateDataHandler = (data)=>{
        console.log(data);
        setDataUpdate(data);
    }
    
    let updatedData = {
        allData:dataUpdated,
        updateData:updateDataHandler,
    }
    return(
        <TaskContext.Provider value={updatedData}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;