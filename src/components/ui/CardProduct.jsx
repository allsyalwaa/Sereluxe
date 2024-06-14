export default function CardProduct({ image, name, price }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow">
      <img src={image} alt="" />
      <h1 className="text-xl font-semibold text-black">{name}</h1>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium text-primary">${price}</p>
        <div className="rounded-full bg-primary p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="currentColor"
              d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
