"use client"
import { useState } from 'react';

export default function DisabledInput(props) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchChange = (e) => {
        setIsSwitchOn(e.target.checked);
    };

    return (
        <div className="mb-4 pr-4 w-full">
            <div className="flex justify-between items-center mb-1">
                <label htmlFor={props.id} className="text-sm font-medium text-gray-700">
                    {props.label}
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        id={`${props.id}-switch`}
                        checked={isSwitchOn}
                        onChange={handleSwitchChange}
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all duration-300"></div>
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-5"></div>
                </label>
            </div>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder || "insira"}
                disabled={!isSwitchOn}
                className={`w-full px-3 py-2 rounded-md border text-sm focus:outline-none ${
                    isSwitchOn
                        ? "bg-white text-black border-gray-300"
                        : "bg-gray-400 text-black border-gray-400 cursor-not-allowed"
                }`}
            />
        </div>
    );
}
