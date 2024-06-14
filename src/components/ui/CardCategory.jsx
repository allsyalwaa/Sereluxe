/* eslint-disable react/prop-types */
export default function CardCategory({ image, name }) {
  return (
    <div className="mt-4 flex items-center gap-6">
      <img className="h-16" src={image} alt="" />
      <p className="text-block text-lg font-semibold uppercase">{name}</p>
    </div>
  );
}
