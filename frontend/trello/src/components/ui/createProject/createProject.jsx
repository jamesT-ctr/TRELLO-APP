import { useState } from 'react'
import './createProject.css'
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'
import { Axios } from 'axios'




export const CreateProject = ()=>{
    const [name, setname] = useState('')
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    
    
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response = await Axios.post('http://localhost:3000/api/login', {
                email: formData.name,
                description: formData.description
              });
        } catch(err){

        }
    }
    




    return (
        <section>
            <div className='create-proyect'>
                <Link className='Link'>
                    <h2>New Project</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </Link>
            </div>
            <div className='window-create'>
                <h2>Creat project</h2>
                <form action=""onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                />
                                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <p>{error}</p>
                    <button type="submit">Iniciar sesión</button>
                </form>
                
            </div>
        </section>
        
    )
}

