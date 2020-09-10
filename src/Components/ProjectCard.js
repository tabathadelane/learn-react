import React from 'react'
import { Link } from "react-router-dom";
  

function ProjectCard(props){
    return (
        <div className ="border mb-4 rounded overflow-hidden">
            <Link to={`/projects/${props.project.id}`}>
                <div 
                style={{'backgroundImage': `url('${props.project.pic}')`}} className="w-full h-64 bg-blue bg-cover"></div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb=3"><Link to={`/projects/${props.project.id}`}>{ props.project.name}</Link></h3>
            </div>
            <div className="p-3">
                <div className="font-bold mb=3">{ props.project.desc}</div>
                <div className="mb=3">{ props.project.createdAt}</div>
            </div>
            <Link
                to={`/projects/${props.project.id}`}
                className="bg-blue-500 text-white p-2 flex justify-center">
                    Learn More
                </Link>
        </div>
    )
}

export default ProjectCard