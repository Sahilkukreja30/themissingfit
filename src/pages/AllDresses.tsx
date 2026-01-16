import { useEffect, useState } from "react";
import axios from "axios";

const AllDresses = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/dress")
      .then((res) => setDresses(res.data.data));
  }, []);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl mb-8">
          All Dresses
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dresses.map((dress) => (
            <div
              key={dress._id}
              className="rounded-xl overflow-hidden bg-secondary/30"
            >
              <img
                src={dress.images[0]?.url}
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{dress.dressTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  ₹{dress.withJewelryPrice} with jewelry
                </p>
                <p className="text-xs mt-1">
                  Status:{" "}
                  <span
                    className={
                      dress.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {dress.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDresses;
