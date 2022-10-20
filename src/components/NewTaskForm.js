import classes from './Layout.module.css';
import {useRef} from 'react';
import { useContext } from 'react';
import TaskContext from '../store/TaskContext';

const taskArr = [];
const NewTaskFrom = (props) => {
    
    const ctx = useContext(TaskContext);

    const dateRef = useRef();
    const taskRef = useRef();

    const submitHandler = async(e) =>{
        e.preventDefault();
        let date = dateRef.current.value;
        
        let task = taskRef.current.value;
        taskArr.push({date,task});
        ctx.updateData(taskArr);

        props.removeNewTask();
    }
    return(
        <div className={classes.newTaskForm}>
            <form onSubmit={submitHandler}>
                <div className={classes.ntfFields}>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' ref={dateRef}/>
                </div>
                <div className={classes.ntfFields}>
                    <label htmlFor="task">New Task</label>
                    <input type="input" id='task' ref={taskRef}/>
                </div>
                <div className='textCenter'><button>Submit</button></div>
            </form>
        </div>
    );
}

export default NewTaskFrom;