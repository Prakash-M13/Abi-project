import { useEffect, useState } from "react";
import API from "../services/api";
import "./Admin.css";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (
    id,
    status
  ) => {
    try {
      await API.put(
        `/bookings/${id}/status`,
        { status }
      );

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  const total = bookings.length;

  const tours = bookings.filter(
    (b) => b.serviceType === "Tour"
  ).length;

  const camps = bookings.filter(
    (b) => b.serviceType === "Camping"
  ).length;

  const cabs = bookings.filter(
    (b) => b.serviceType === "Cab"
  ).length;

  const resorts = bookings.filter(
    (b) => b.serviceType === "Resort"
  ).length;

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter(
        (booking) =>
          booking.serviceType === filter
      );

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{total}</h2>
          <p>Total Bookings</p>
        </div>

        <div
          className="stat-card"
          onClick={() => setFilter("Tour")}
        >
          <h2>{tours}</h2>
          <p>Tour Bookings</p>
        </div>

        <div
          className="stat-card"
          onClick={() => setFilter("Camping")}
        >
          <h2>{camps}</h2>
          <p>Camping Bookings</p>
        </div>

        <div
          className="stat-card"
          onClick={() => setFilter("Cab")}
        >
          <h2>{cabs}</h2>
          <p>Cab Bookings</p>
        </div>

        <div
          className="stat-card"
          onClick={() => setFilter("Resort")}
        >
          <h2>{resorts}</h2>
          <p>Resort Bookings</p>
        </div>
      </div>

      <h2 className="booking-title">
        {filter} Bookings
      </h2>

      {filteredBookings.map((booking) => (
        <div
          className="booking-card"
          key={booking._id}
        >
          <h3>
            {booking.customerName}
          </h3>

          <p>
            <strong>Phone:</strong>{" "}
            {booking.phone}
          </p>

          <p>
            <strong>Service:</strong>{" "}
            {booking.serviceType}
          </p>

          <p>
            <strong>
              Booking Date:
            </strong>{" "}
            {new Date(
              booking.bookingDate
            ).toLocaleDateString()}
          </p>

          <p>
            <strong>Status:</strong>
          </p>

          <select
            value={booking.status}
            onChange={(e) =>
              updateStatus(
                booking._id,
                e.target.value
              )
            }
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Confirmed">
              Confirmed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Admin;