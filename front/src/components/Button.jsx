export default function Button({ children, className, button, ...props }) {
  const tipoDoBotao = {
    'primary': 'bg-blue-500 hover:bg-blue-600 text-white',
    'secondary': 'bg-gray-500 hover:bg-gray-600 text-white',
    'danger': 'bg-red-500 hover:bg-red-600 text-white',
    'success': 'bg-green-500 hover:bg-green-600 text-white',
    'warning': 'bg-yellow-500 hover:bg-yellow-600 text-white',
    'info': 'bg-blue-500 hover:bg-blue-600 text-white',
    'none': 'bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100',
    'outline-primary': 'border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500',
  }
  return (
    <button {...props} className={`px-4 py-2 rounded-md ${tipoDoBotao[button || 'primary']} ${className}`}>
      {children}
    </button>
  )
}
