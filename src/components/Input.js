import React from 'react'

export default function Input({ label, id, value, placeholder, type }) {
    return (
        <div className="flex flex-col">
            <label className="text-xs">{label}</label>
            <input
                className="border-solid border-b-2 border-light-blue-500"
                onBlur={(e) => e.target.placeholder = placeholder}
                onFocus={(e) => e.target.placeholder = ''}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}

            />
        </div>
    )
}
