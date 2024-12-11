const Card = ({ item }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-2xl p-2 rounded-xl shadow-gray-300 hover:shadow-slate-700 ease-in duration-300 max-lg:w-80">
        <figure className="">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-80 aspect-square rounded-xl"
          />
        </figure>
        <div className="card-body items-center pt-4 text-center">
          <h2 className="card-title font-semibold text-xl mb-2">
            {item.title}
          </h2>
          <p>{item.text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
