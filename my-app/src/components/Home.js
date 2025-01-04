import React from "react";
import CategoryList from "./components/CategoryList";

const categories = [
  { id: 1, name: "Medicines" },
  { id: 2, name: "Personal Care" },
  { id: 3, name: "Supplements" },
  { id: 4, name: "Skin Care" }
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Al-Amal Pharmacy</h1>
      <CategoryList categories={categories} />
    </div>
  );
}

export default Home;