/* eslint-disable react/prop-types */

const Cart = ({ selectedActors, remaining, totalCost }) => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <h2 className="text-white text-2xl text-center">
        Total Actors: {selectedActors.length}
      </h2>
      <div className="mt-4">
        <h5 className="text-white"> Remaining: {remaining}</h5>
        <h5 className="text-white">Total Cost: {totalCost}</h5>
      </div>
      <div className="mt-4 list-decimal">
        {selectedActors.map((actor) => (
          <li key={actor.id} className="text-white leading-10 ">
            <span className="bg-slate-500 p-1 rounded-lg">
                {actor.name}
            </span>
          </li>
        ))}
        ;
      </div>
    </div>
  );
};

export default Cart;
