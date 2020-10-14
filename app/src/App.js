import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import { Alert } from 'reactstrap';
import "./App.css";


const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <div className="heady">

      <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
          {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;

            if (!initialized) {
              return (<h1>Loading ....</h1>)
            }

            return (
              <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
            )
          }}
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
    </div>
  );
}

export default App;
