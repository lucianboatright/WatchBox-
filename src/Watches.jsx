import "./App.css";
import React, { Component }  from 'react';
import { useState } from "react";
import firebase, { auth, firestore, functions } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Watches = () => {
    const [watch, setWatch] = useState("");
    const watchRef = firestore.collection(`user/${auth.currentUser.uid}/watches`);
    const [watches] = useCollectionData(watchRef, { idField: "id" });

    const signOut = () => auth.signOut();

    const onSubmitWatch = (event) => {
        event.preventDefault();

        setWatch("");
        watchRef.add({
            text: watch,
            complete: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
    };

    return (
        <>
        <header>
            <button onClick={signOut}>Sign Out</button>
        </header>
        <main>
            <form onSubmit={onSubmitWatch}>
                <input
                    required
                    value={watch}
                    onChange={(e) => setWatch(e.target.value)}
                    placeholder="What's Next"
                />
                <button type="submit">Add</button>
            </form>
            {watches && watches.map((watch) => <Watch key={watch.id} {...watch} /> )}
        </main>
        </>
    );
};

const Watch = ({id, complete, text }) => {
    const watchRef = firestore.collection(`users/${auth.currentUser.uid}/watches`);
    const onCompleteWatch = (id, complete) => 
        watchRef.doc(id).set({ complete: !complete }, {merge: true});

    const onDeleteWatch = (id) => watchRef.doc(id).delete();

    return (
        <div key={id} className="watch">
            <button 
                className={`watch-item ${complete ? "complete" : ""}`} 
                tabIndex="0"
                onClick={() => onCompleteWatch(id, complete)}
            >
                {text}
            </button>
            <button onClick={() => onDeleteWatch(id)}>X</button>
        </div>
    );
};

export default Watches;