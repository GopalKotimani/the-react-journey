import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setShowList(false);
    navigate(`/projects/${path}`);
  };

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4">Projects List</div>
      {showList && (
        <ul className="space-y-2">
          <li
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => handleClick('modalcomponent')}
          >
            Modal Component
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => handleClick('todoapp')}
          >
            Todo App
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => handleClick('tabformbuild')}
          >
            Tab Form Build
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProjectDetails;
