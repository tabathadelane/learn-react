import React from 'react'
import { useAxiosGet} from '../Hooks/HttpRequests'
import Loader from '../Components/Loader'
import ProjectCard from '../Components/ProjectCard'

function Home(){
    const url = `https://5f5956348040620016ab9095.mockapi.io/Projects/`

    let projects = useAxiosGet(url)

    let content = null
    if(projects.error){
        content = <p>There was an error. Please try again later. </p>
    }
    if(projects.loading){
        content = <Loader></Loader>
    }

    if(projects.data){
        content =
        projects.data.map((project) =>
            <div key={project.id}>
                <ProjectCard
                    project={project}
                />
            </div>
        )
    }

    return (
        <div >
            <h1 className="font-bold text-2xl">My Portfolio</h1>
            { content }

        </div>
    );
}

export default Home;