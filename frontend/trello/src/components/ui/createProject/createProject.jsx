import { useState } from 'react'
import './createProject.css'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import  axios  from 'axios'
import { CreateTask } from '../createTask/createTask'




export const CreateProject = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        user_id: '',  
    })
    const [error, setError] = useState(null);
    const [ isWindowOpen, setIsWindowOpen] = useState(false)
    const [ data, setData] = useState(null)
    const [isTaskWindowOpen, setIsTaskWindowOpen] = useState(false);
    

    const handleOpenWindow = () => {
        setIsWindowOpen(!isWindowOpen);
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    // traer ususario logueado
    const user = localStorage.getItem('Id')

    if (!user) {
        navigate('/login')
        return null
    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/projects', {
                name: formData.name,
                description: formData.description,
                user_id: user,
            });
            console.log('Proyecto creado:', response.data);
            setIsWindowOpen(false)
            setData(response.data)
            setIsTaskWindowOpen(true)
            localStorage.setItem('project_id', response.data.id)

        } catch(err){
            setError('Error al crear el proyecto')
        }
    }


    return (
        <section>
            <div className='create-proyect'>
                <Link className='Link' onClick={handleOpenWindow} >
                    <h2>New Project</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </Link>
            </div>
            {isWindowOpen && (
                            <div className='window-create'>
                            <h2>Create project</h2>
                            <form action=""onSubmit={handleSubmit} >
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                                            <input
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                            <p>{error}</p>
                            <button type="submit">Create Project</button>
                            </form>
                            
                        </div>
                        
            )}
            {isTaskWindowOpen && (
                <div>
                    
                </div>
            )}
            <div>
                {data && <div>Proyecto creado: {data.name}</div>}
            </div>
        </section>
        
    )
}

