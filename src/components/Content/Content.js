import React, { useState, useEffect } from "react";
import "./Content.css";
import { Card } from "../Card/Card";
import { db } from "../../index";

function Content() {
  const [snapshots, setSnapshots] = useState();

  useEffect(() => {
    db.collection("shots")
      .get()
      .then(querySnapshot => {
        const tempArray = [];
        querySnapshot.forEach(doc => {
          const newData = {
            id: doc.id,
            ...doc.data()
          };

          return tempArray.push(newData);
        });

        setSnapshots(tempArray);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <section className="cards">
        {snapshots &&
          snapshots.map(snapshot => <Card data={snapshot} key={snapshot.id} />)}
      </section>
    </main>
  );
}

export default Content;
