import React from 'react'
import './visualProject.css'
import { Link } from 'react-router-dom'
import { TasksCompleted } from '../proyects/TasksCompleted/TasksCompleted'
import { PendingTasks } from '../proyects/PendingTasks/pendingTasks'
import { TasksProgress } from '../proyects/TasksProgress/TasksProgress'
import { AllTask } from '../proyects/allTask/allTask'

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
            case 'AllTasks':
                return <AllTask /> 
            default:
                return <TasksCompleted />;
        }
        
    }


    return (
        <section className='section-visual'>
            <div className="visual-tasks">
                <div className='menu'>
                <Link className='menu-item ' onClick={() => setComponentSelect('AllTasks')}>
                All tasks
                </Link>

                
                <Link  className='menu-item ' onClick={() => setComponentSelect('TasksCompleted')}>
                Tasks completed
                </Link>
            
                <Link className='menu-item ' onClick={() => setComponentSelect('TasksProgress')}>
                Tasks in progress
                </Link>

                <Link className='menu-item ' onClick={() => setComponentSelect('PendingTasks')}>
                Pending tasks
                </Link>
                
                </div>
                <div className='container-task'>
                    {showComponentTask()}
                 </div>
            </div>
            <div>
                
            </div>
  
        </section>
    )
}