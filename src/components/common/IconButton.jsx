function IconButton({ icon: Icon, children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-10 w-full py-2 px-4 rounded-full font-semibold ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-md" />}
      {children}
    </button>
  )
}

export default IconButton