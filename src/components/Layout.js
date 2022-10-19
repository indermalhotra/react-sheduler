import DataTable from './DataTable';
import classes from './Layout.module.css';
const Layout = ()=> {
    return(
        <div className={classes.layout}>
            <h2>Sheduler/Reminder</h2>
            <DataTable/>
        </div>
    )
}

export default Layout;