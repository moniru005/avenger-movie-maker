/* eslint-disable react/jsx-key */

import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Home = () => {
  const [selectedActors, setSelectedActors] = useState([]);
  const [allActors, setAllActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (isExist) {
      //   return alert("Already Booked");
      Swal.fire({
        title: "Already Booked",
        icon: "error",
      });
    } else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
        8;
      });
      const totalRemaining = 50000 - count;

      if (count > 50000) {
        // return alert("Taka Sesh Aar Hobe na");
        Swal.fire({
          title: "Your Budget Almost Finish",
          icon: "error",
        });
      } else {
        setTotalCost(count);
        setRemaining(totalRemaining);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };
  console.log(selectedActors);
  return (
    <div className="container">
      <div className="home-container flex justify-center gap-2 my-4">
        <div className="card-container w-2/3 flex flex-wrap ml-4 gap-6 my-4">
          {allActors.map((actor) => (
            <div
              key={actor.id}
              className="card h-80 w-64 border-2 border-gray-400 mx-auto text-white text-center"
            >
              <div className="card-img">
                <img
                  className="mx-auto rounded-full w-32 mt-5"
                  src={actor.image}
                  alt=""
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{actor.name}</h2>
              <p>Age: {actor.age}</p>
              <p className="">
                <small>{actor.fbUrl}</small>
              </p>
              <div className="info flex justify-around mt-4">
                <p className="text-lg">
                  Salary: <span className="font-bold">${actor.salary}</span>
                </p>
                <p className="text-lg">{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="border-1 bg-orange-400 rounded-md px-4 py-1 mt-4 "
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart w-1/3 flex justify-center">
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
