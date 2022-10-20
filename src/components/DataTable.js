import { Fragment, useContext, useState } from 'react';
import classes from './Layout.module.css';
import NewTaskFrom from './NewTaskForm';
import TaskContext from '../store/TaskContext';
let classAdded;

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DataTable = () => {
    const [newTaskClicked, setNewTaskClicked] = useState(false);
    const ctx = useContext(TaskContext);
    console.log(ctx.allData);
    let sortedData = ctx.allData.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
    })
    
    console.log(sortedData);
    let dataList = sortedData.map((data, indx) => {
        if(new Date(data.date)>new Date()){
            classAdded = classes.green;
        }else{
            classAdded = classes.red;
        }
        let tempDate = new Date(data.date);
        let formatDate = `${tempDate.getDate()} ${days[tempDate.getDay()]}, ${months[tempDate.getMonth()]} ${tempDate.getFullYear()}`
        return (
            <Fragment key={indx}>
                <li className={`${classes.dtDate} ${classAdded}`}>{formatDate}</li>
                <li className={`${classes.dtTask} ${classAdded}`} >{data.task}</li>
            </Fragment>
        )
    });

    const newTaskHandler = () => {
        setNewTaskClicked(previousState => !previousState);
    }

    return (
        <Fragment>
            <div className={classes.dataTable}>
                <ul>
                    <li className={classes.dtDateH}>Date</li>
                    <li className={classes.dtTaskH}>Task</li>
                </ul>

                <ul>
                    {dataList}
                </ul>
            </div>
            <div className={classes.newTask}><button onClick={newTaskHandler}>+ Add New Task</button></div>
            {newTaskClicked && <NewTaskFrom removeNewTask={newTaskHandler} />}
        </Fragment>
    )
}
export default DataTable;