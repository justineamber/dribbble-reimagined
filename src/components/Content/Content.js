import React, { useState, useEffect } from "react";
import "./Content.css";
import { Card } from "../Card/Card";
import { db } from "../../index";

const Content = () => {
  const [snapshots, setSnapshots] = useState();
  const [authors, setAuthors] = useState();

  const getData = () => {
    db.collection("shots")
      .get()
      .then(querySnapshot => {
        const tempArray = [];
        querySnapshot.forEach(doc =>
          tempArray.push({
            id: doc.id,
            ...doc.data()
          })
        );
        setSnapshots(tempArray);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
    db.collection("shot_author")
      .get()
      .then(querySnapshot => {
        const tempArray = [];
        querySnapshot.forEach(doc =>
          tempArray.push({
            id: doc.id,
            ...doc.data()
          })
        );
        setAuthors(tempArray);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <section className="cards">
        {snapshots &&
          authors &&
          snapshots.map(snapshot => (
            <Card
              getData={getData}
              data={snapshot}
              author={authors.find(author => {
                return author.id === snapshot.author;
              })}
              key={snapshot.id}
            />
          ))}
      </section>
    </main>
  );
};

export default Content;
