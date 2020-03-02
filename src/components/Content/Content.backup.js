import React, { useState, useEffect } from "react";
import "./Content.css";
import { Card } from "../Card/Card";
import { db } from "../../index";

function Content() {
  /* Inside Content component we declare a new state variable by calling the useState hook.
  It returns a pair of values, to which we give names. Im calling my variable snapshots. State variables are preserved by React. The second returned item is itself a function. It lets us update the "snapshots", we can call setSnapshots */
  const [snapshots, setSnapshots] = useState();

  useEffect(() => {
    /*Using useEffect, you're telling React that your component needs to do something after rendering. */
    db.collection("shots")
      .get()
      .then(querySnapshot => {
        const tempArray = []; /* To get all of the docs in the firebase collection into the snapshots component state */
        querySnapshot.forEach((
          doc //iterate over each item in database
        ) =>
          tempArray.push({
            //push it into temp array
            id: doc.id,
            ...doc.data()
          })
        );
        console.log(tempArray);
        setSnapshots(tempArray); //& assign to snapshots component state.
      })
      .catch(error => {
        console.error(error);
      });
  }, []); /* Run an effect & clean it up only once, pass empty array [] as second argument. It tells React that your effect doesnt depend on any values from props or state, so it never needs to re-run.*/

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
