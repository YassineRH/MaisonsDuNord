import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";

const array = [
  { label: "Réservation", color: "#f57c00" },
  { label: "Gros Oeuvres", color: "#2196f3" },
  { label: "Finition", color: "#9c27b0" },
  { label: "Livraison", color: "#4caf50" },
];

const BuildingButton = ({ destination }) => {
  const data = JSON.parse(localStorage.getItem("data")).filter(
    (apartment) => apartment.building === destination
  );
  const { revenue, remaining } = JSON.parse(localStorage.getItem("sales")).find(
    (item) => item.building === destination
  );

  const pieChartData = array.map((item) => {
    const value =
      (data.reduce((accumulator, apartment) => {
        const payments = apartment.payments.reduce((acc, payment) => {
          if (payment.name === item.label) return acc + Number(payment.amount);
          return acc;
        }, 0);

        return accumulator + payments;
      }, 0) *
        100) /
      revenue;
    return { title: item.label, value, color: item.color };
  });
  pieChartData.push({
    title: "Rest",
    value: (remaining * 100) / revenue,
    color: "#ae8957",
  });

  return (
    <Link to={destination} style={{ textDecoration: "none" }}>
      <div style={{ position: "relative", width: "200px", height: "200px" }}>
        <PieChart
          radius={40}
          lineWidth={20}
          paddingAngle={2}
          data={pieChartData}
          animate
          animationDuration={1000}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
          }}
        >
          {localStorage.getItem(destination)}
        </div>
      </div>
    </Link>
  );
};

export default BuildingButton;
