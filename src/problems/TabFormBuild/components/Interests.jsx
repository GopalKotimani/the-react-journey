import React from 'react'

const Interests = ({ data, setData, error }) => {
  console.log(error);
  const { interests } = data;
  const handleChange = (e) => {
    setData(prevState => ({
      ...prevState,
      interests: e.target.checked 
      ? [...prevState.interests, e.target.name]
      : prevState.interests.filter(
        (i) => i!== e.target.name),
    }))
  }
  return (
    <div>
      <h1 className='font-bold'>Interests</h1>
      <div>
        <label>
          <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleChange}/>
          Coding
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="sports" checked={interests.includes("sports")} onChange={handleChange}/>
          Sports
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="music" checked={interests.includes("music")} onChange={handleChange}/>
          Music
        </label>
      </div>
      {error.interests && <span className="error">{error.interests}</span>}

    </div>
  )
}

export default Interests