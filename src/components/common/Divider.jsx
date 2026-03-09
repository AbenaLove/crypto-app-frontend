function Divider({ text = "OR"}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-gray-700"></div>
      <span className="text-white">{text}</span>
      <div className="flex-1 h-px bg-gray-700"></div>
    </div>
  )
}
export default Divider;