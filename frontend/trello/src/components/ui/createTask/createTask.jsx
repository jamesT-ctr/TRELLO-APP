import { useState } from 'react'
import './createTask.css'

export const CreateTask = () => {
    const projectId = localStorage.getItem('project_id')
    const userId = localStorage.getItem('Id')
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        due_date: '',
        status: '',
    })
    const [error, setError] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;   
        setFormData({ ...formData, [name]: value });
      };

   

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/tasks', {
                title: formData.title,
                description: formData.description,
                due_date: formData.due_date,
                project_id: projectId,
                assigned_user_id: userId,
                status: 'Pending',
            });

            console.log('Tarea creada:', response);

        }
        catch(error){
            // especificar el error
            setError('Error al crear la tarea')
  
      }
      };




    return (
        <section className='create-task'>
            <h2>Create Task</h2>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />

                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />

                 <input
                    type="date"
                    placeholder="due_date"
                    name="due_date"
                    value={formData.due_date}
                    onChange={handleInputChange}
                    required
                />

                <select name="status" value={formData.status} onChange={handleInputChange}>
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                
                {error && <p>{error}</p>}

                <button type='submit'>create Task</button>
                
         
            </form>
        </section>
    )
}