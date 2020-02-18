import React, { useState, useEffect } from "react";
import "./Content.css";
import { Card } from "../Card/Card";
import { db } from "../../index";

function Content() {
  const [shots, setShots] = useState();

  useEffect(() => {
    db.collection("shots")
      .get()
      .then(querySnapshot => {
        const allData = [];

        querySnapshot.forEach(doc => {
          const dataWithId = {
            id: doc.id,
            ...doc.data()
          };
          allData.push(dataWithId);
        });

        setShots(allData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <section className="cards">
        {shots &&
          shots.map(shot => {
            return <Card data={shot} key={shot.id} />;
          })}
      </section>
    </main>
  );
}

export default Content;
