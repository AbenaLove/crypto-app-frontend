function  ExploreCard({ image, description, title, subtitle, isPositive}) {
  return (
    <div className="min-w-65 bg-gray-100 rounded-xl p-6">

      <img src={image || 'assets/Movers1.png'}
      className="w-10 h-10 rounded-full object-contain mb-3"
        onError={(e) => {
    e.target.onerror = null; // prevents infinite loop
    e.target.src = '/assets/Movers1.png';
  }}
      />

      <div>
        <p className="text-gray-500">{description}</p>
        <p className="text-2xl font-bold">{title}</p>
        <p className="font-medium">{subtitle}</p>
      </div>
      
    </div>
  );
}

export default ExploreCard;