"use client"

export default function Input(props) {
    return (
        <div className="mb-4">
            <label 
                htmlFor={props.id} 
                className="block text-sm font-medium text-gray-700"
            >
                {props.label}
            </label>
            <input 
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder ? props.placeholder : "insira"} 
                required={props.not_required ? false : true} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
        </div>
    );
}
