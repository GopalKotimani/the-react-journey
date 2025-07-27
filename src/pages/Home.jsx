import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const boxData = [
    { id: 1, title: 'Chips Input', description: "A Chips Input component in React is a common frontend interview question that assesses a candidate's understanding of state management, event handling, and component design in React " },
    { id: 2, title: 'Box 2', description: 'This is box 2' },
    { id: 3, title: 'Box 3', description: 'This is box 3' },
    { id: 4, title: 'Box 4', description: 'This is box 4' },
    { id: 5, title: 'Box 5', description: 'This is box 5' },
    { id: 6, title: 'Box 6', description: 'This is box 6' },
  ];

  return (
    <div className='m-2'>
      <div className='bg-gray-200 p-60 py-2 px-2 rounded-lg shadow-md'>
        <div className='font-bold text-center text-2xl my-2 '>React Mini Projects</div>
        <div className="grid grid-cols-2 gap-2">
          {boxData.map((box) => (
            <ProjectCard key={box.id} id={box.id} title={box.title} description={box.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home