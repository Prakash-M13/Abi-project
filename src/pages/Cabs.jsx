import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Cabs() {
  const [cabs, setCabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = async () => {
    try {
      const res = await API.get("/cabs");
      setCabs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <h1>Cab Services</h1>

      <div className="tour-grid">
        {cabs.map((cab) => (
          <div className="tour-card" key={cab._id}>
            <img src={cab.image} alt={cab.vehicleName} />

            <h2>{cab.vehicleName}</h2>

            <p>{cab.vehicleType}</p>

            <h3>₹{cab.pricePerKm} / KM</h3>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    packageName: cab.vehicleName + " - " + cab.vehicleType + " Cab",
                    serviceType: "Cab",
                  },
                })
              }
            >
              Book Cab
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cabs;