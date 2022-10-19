import { Fragment, useContext } from 'react';
import classes from './Layout.module.css';
import NewTaskFrom from './NewTaskForm';
import TaskContext from '../store/TaskContext';

const DataTable = () => {
    const ctx = useContext(TaskContext);
    console.log(ctx);
    let dataList = ctx.allData.map(data => {
        return (
            <Fragment>
                <li className={classes.dtDate}>{data.date}</li>
                <li className={classes.dtTask}>{data.task}</li>
            </Fragment>
        )
    })
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
            <div className={classes.newTask}><button>+ Add New Task</button></div>
            <NewTaskFrom />
        </Fragment>
    )
}
export default DataTable;