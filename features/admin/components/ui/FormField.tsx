interface FormFieldProps {
  label: string;
  type?: 'text' | 'textarea' | 'select';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  required?: boolean;
}

export default function FormField({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  options = [],
  required = false 
}: FormFieldProps) {
  const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'text' && (
        <input
          type="text"
          className={baseClasses}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      )}
      
      {type === 'textarea' && (
        <textarea
          className={`${baseClasses} h-32 resize-none`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      )}
      
      {type === 'select' && (
        <div className="relative">
          <select
            className={`${baseClasses} appearance-none bg-white`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          >
            <option value="">Select</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
