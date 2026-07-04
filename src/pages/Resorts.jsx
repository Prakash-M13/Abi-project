import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Resorts() {
  const [resorts, setResorts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResorts();
  }, []);

  const fetchResorts = async () => {
    try {
      const res = await API.get("/resorts");
      setResorts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <h1>Resort Booking</h1>

      <div className="tour-grid">
        {resorts.map((resort) => (
          <div className="tour-card" key={resort._id}>
            <img src={resort.image} alt={resort.name} />

            <h2>{resort.name}</h2>

            <p>{resort.location}</p>

            <p>⭐ {resort.rating}</p>

            <h3>₹{resort.pricePerNight} / Night</h3>

            <p>{resort.description}</p>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    packageName: resort.name,
                    serviceType: "Resort",
                  },
                })
              }
            >
              Book Resort
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;