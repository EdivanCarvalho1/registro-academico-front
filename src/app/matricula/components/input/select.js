"use client"

export default function Select(props) {
    return (
        <div className="mb-4 pr-4 w-full">
            <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
                {props.label}
            </label>
            <select
                id={props.id}
                required={!props.not_required}
                defaultValue=""
                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                <option value="" disabled>
                    {props.default_value ? props.default_value : 'Selecione'}
                </option>
                {props.children}
            </select>
        </div>
    );
}
