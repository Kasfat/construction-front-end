import React from "react";
import DashboardSidebar from "../../DashboardSiderbar/DashboardSidebar";

function Dashboard() {
  return (
    <main>
      <div className=" container my-5">
        <div className="row">
          <div className=" col-md-3">
            <DashboardSidebar/>
          </div>
          <div className=" col-md-9 dashboard">
            <div className=" card shadow border-0">
              <div className=" card-body d-flex justify-content-center align-items-center">
                <h4>Welcome to admin Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
