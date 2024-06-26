import React from 'react'

export default function SlideShow({flowCard,isAutomatic, buttons }) {

  return (
    <div>
        <div className='Cards'>
            {flowCard}
        
        {isAutomatic? (
            <div>
                {buttons}
            </div>
        ) : null }
        </div>

    </div>
    
)}
