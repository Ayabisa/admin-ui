import React, { useEffect, useState } from "react";
import Postcard from "./Postcard";
import { getUsers } from "./Services";

function Exercise(){
const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {users.map((user, index) => (
            <Postcard key={index} {...user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;