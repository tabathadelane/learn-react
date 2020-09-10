import React from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Project(){
    const { id } = useParams()
    const url = `https://5f5956348040620016ab9095.mockapi.io/Projects/${id}`
    let project = useAxiosGet(url)

    let content= null


    if(project.error){
        content = <p>There was an error. Please try again later. </p>
    }
    if(project.loading){
        content = <Loader></Loader>
    }

    if(project.data){
        content =
            <div className="">
                <h1 className="font-bold text-2xl">{project.data.name}</h1>
                <div><img src={project.data.pic} alt={project.data.name} /></div>
                <div>{project.data.date}</div>
                <div>{project.data.desc}</div>

            </div>
    }
    return (
        <div>{content}</div>
    )
}

export default Project;