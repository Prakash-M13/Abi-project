import "./Admin.css";

function Admin() {
  return (
    <div className="admin">

      <h1>Admin Dashboard</h1>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>120</h2>
          <p>Total Bookings</p>
        </div>

        <div className="stat-card">
          <h2>25</h2>
          <p>Tours</p>
        </div>

        <div className="stat-card">
          <h2>18</h2>
          <p>Resorts</p>
        </div>

        <div className="stat-card">
          <h2>12</h2>
          <p>Cabs</p>
        </div>

      </div>

      <div className="recent-bookings">

        <h2>Recent Bookings</h2>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul</td>
              <td>9876543210</td>
              <td>Tour</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>9876543211</td>
              <td>Resort</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;