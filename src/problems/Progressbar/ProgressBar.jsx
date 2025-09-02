import React, { useState } from 'react'
import './styles.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (value) => {
        setProgress((prev) => Math.max(0, Math.min(100, prev +value)))
    }
    return (
        <div className='container'>
            <h2 className='text-2xl m-6'>Progress Bar</h2>
            <div className='outer'>
                <div className='inner'
                    style={{
                        width: `${progress}%`
                    }}
                >
                    <span className='text-white'>{progress}%</span>
                </div>
            </div>
            <div className='m-5 space-x-3 text-white'>
                <button
                    className='bg-gray-500 border w-20 rounded-sm cursor-pointer'
                    onClick={() => updateProgress(-10)}
                >
                    -10%
                </button>
                <button
                    className='bg-gray-500 border w-20 rounded-sm cursor-pointer'
                    onClick={() => updateProgress(+10)}
                >
                    +10%
                </button>
            </div>

        </div>
    )
}

export default ProgressBar