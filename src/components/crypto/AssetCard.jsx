function  AssetCard({ title, description, graph }) {
  return (
    <div className="min-w-65 bg-gray-100 rounded-xl p-6">

      <p className="text-gray-500">{title}</p>

      <p className="text-lg font-semibold">
        {description}
      </p>

      <img
        src={graph}
        className="mt-4 w-full"
      />

    </div>
  );
}

export default AssetCard;