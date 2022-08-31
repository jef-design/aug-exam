import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./Loader";

const Card = lazy(() => import("./Card"));

function App() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("https://api.spacexdata.com/v4/launches/").then(
            res => res.json()
        );
        setData(res);
        console.log(res);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <main className="main">
                <header>SpaceX</header>
                {data.map((space, i) => {
                    const { flight_number, name, date_utc, details } = space;

                    const year = new Date(date_utc).getFullYear();
                    return (
                        <>
                            <Suspense fallback={<Loader />}>
                                <Card
                                    key={i}
                                    flight_number={flight_number}
                                    name={name}
                                    year={year}
                                    details={details}
                                />
                            </Suspense>
                        </>
                    );
                })}
                <div>
                    {data <= 0 ? (
                        <div> <Loader/> Loading Data...</div>
                    ) : (
                        <div> No more data available</div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
