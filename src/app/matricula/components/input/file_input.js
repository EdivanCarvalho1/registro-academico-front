"use client"

export default function FileInput(props) {
    return (
        <div className="mb-4 mr-5">
            <label 
                htmlFor={props.id} 
                className="block text-sm font-medium text-gray-700"
            >
                {props.label}
            </label>
            <input 
                type="file" 
                id={props.id} 
                required={props.not_required ? false : true} 
                className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-purple-600 hover:file:bg-purple-700"
            />
        </div>
    )
}
