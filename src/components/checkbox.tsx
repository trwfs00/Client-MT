import React, { useState } from 'react';

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className=''>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className='ml-2'>Remember me</span> 
            </label>
        </div>
    );
}

export default CheckboxExample;
