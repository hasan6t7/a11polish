import React, { useEffect, useState } from "react";

export default function DashboardHome() {
  const [stats, setStats] = useState({
    totalServices: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://e-services-server.vercel.app/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mx-auto min-h-screen">
        <span className=" loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const cards = [
    { title: "Total Services", value: stats.totalServices },
    { title: "Total Bookings", value: stats.totalBookings },
    { title: "Pending Bookings", value: stats.pendingBookings },
    { title: "Completed Bookings", value: stats.completedBookings },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center"
        >
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-4xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
