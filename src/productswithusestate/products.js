import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}