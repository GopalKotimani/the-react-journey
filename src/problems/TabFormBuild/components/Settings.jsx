import React from 'react'

const Settings = ({ data, setData }) => {
  const { settings } = data;
  const handleChange = (e) => {
    setData(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        theme: e.target.value
      }
    }));
  }
  return (
    <div>
      <h1 className='font-bold'>Settings</h1>
      <div>
        <label>
          <input type='radio' name="theme" value="dark" checked={settings.theme === "dark"} onChange={handleChange} />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input type='radio' name="theme" value="light" checked={settings.theme === 'light'} onChange={handleChange} />
          Light
        </label>
      </div>
    </div>
  )
}

export default Settings