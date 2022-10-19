import React from 'react';

const TaskContext = React.createContext(
    {
        allData:[],
        updateData :()=>{}
    }
);

export default TaskContext;