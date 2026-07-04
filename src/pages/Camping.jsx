import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Camping() {
  const [campings, setCampings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCampings();
  }, []);

  const fetchCampings = async () => {
    try {
      const res = await API.get("/campings");
  console.log(res.data);

      setCampings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(campings);

  return (
    <div className="page">
      <h1>Adventure Camping</h1>

      <div className="tour-grid">
        {campings.map((camp) => (
          <div className="tour-card" key={camp._id}>
            <img src={camp.image} alt={camp.title} />

            <h2>{camp.title}</h2>

            <p>{camp.location}</p>

            <h3>₹{camp.price}</h3>

            <p>{camp.description}</p>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    packageName: camp.title,
                    serviceType: "Camping",
                  },
                })
              }
            >
              Book Camping
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Camping;