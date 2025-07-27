import React from 'react'

const ProjectCard = ({id, title, description }) => {

  return (
    <div>
      <div className='cal-span-1 bg-white p-2 m-2 rounded-lg shadow-md h-[150px]'>
        <div className='text-blue-600 font-bold text-justify'>{title}</div>
        <div className='text-left '>{description}</div>
      </div>

    </div>
  )
}

export default ProjectCard