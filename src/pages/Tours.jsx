import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Tours() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await API.get("/tours");
      setTours(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tours);
  return (
    <div className="page">
      <h1>Tour Packages</h1>

      <div className="cards">
        {tours.map((tour) => (
          <div className="tour-card" key={tour._id}>
            <img src={tour.image} alt={tour.title} />

            <h2>{tour.title}</h2>

            <p>{tour.location}</p>

            <h3>₹{tour.price}</h3>

            <p>{tour.description}</p>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    packageName: tour.title,
                    serviceType: "Tour",
                  },
                })
              }
            >
              Book Now
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;