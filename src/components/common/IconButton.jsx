function IconButton({ icon: Icon, children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-10 w-full py-5 px-4 rounded-full font-semibold ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-xl" />}
      {children}
    </button>
  )
}

export default IconButton