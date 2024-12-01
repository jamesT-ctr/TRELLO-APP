import React from 'react'
import './visualProject.css'
import { Link } from 'react-router-dom'
import { TasksCompleted } from '../proyects/TasksCompleted/TasksCompleted'
import { PendingTasks } from '../proyects/PendingTasks/pendingTasks'
import { TasksProgress } from '../proyects/TasksProgress/TasksProgress'

export const VisualProject = () =>{
    const [componentSelect , setComponentSelect] = React.useState('TasksCompleted')

    const showComponentTask = () => {
        switch(componentSelect){
            case 'TasksCompleted':
                return <TasksCompleted />;
            case 'TasksProgress':
                return <TasksProgress />;
            case 'PendingTasks':
                return <PendingTasks />;
            default:
                return <TasksCompleted />;
        }
        
    }


    return (
        <section>
            <div className="visual-project">
                
                <Link  className='Menu-item ' onClick={() => setComponentSelect('TasksCompleted')}>
                Tasks completed
                </Link>
            
                <Link className='Menu-item ' onClick={() => setComponentSelect('TasksProgress')}>
                Tasks in progress
                </Link>

                <Link className='Menu-item ' onClick={() => setComponentSelect('PendingTasks')}>
                Pending tasks
                </Link>

            </div>
            <div className='container-projects'>
                {showComponentTask()}

            </div>
        </section>
    )
}