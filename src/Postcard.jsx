import React, {useState} from "react";

function Postcard(props){
    const {title, body, ...rest} = props;
    const [clicked, setClicked] = useState(false);

    console.log(Object.entries(rest));

    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md hover:scale-105 hover:border hover:border-red-300 hover:bg-red-100 transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">
            <span className="font-medium">body: </span> {body}
        </p>

        {/* Menampilkan data tambahan dari rest */}
        {Object.entries(rest).map(([key, value]) => (
            <p key={key} className="text-gray-600">
            <span className="font-medium capitalize">{key}:</span> {value}
            </p>
        ))}

        <button 
        className={`${clicked ? "bg-special-red2" : "bg-gray-01"} text-white p-2 rounded-md block mx-auto`}
        onClick={() => setClicked(true)}
        > 
            {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
        </div>
    );
}

export default Postcard