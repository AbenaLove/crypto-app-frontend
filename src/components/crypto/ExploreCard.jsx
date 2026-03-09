function  ExploreCard({ image, description, title, subtitle }) {
  return (
    <div className="min-w-65 bg-gray-100 rounded-xl p-6">

      <img src={image}
      />

      <div>
        <p className="text-gray-500">{description}</p>
        <p className="text-lg font-semibold">{title}</p>
        <p>{subtitle}</p>
      </div>
      
    </div>
  );
}

export default ExploreCard;