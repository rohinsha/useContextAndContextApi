//we cant have usecontext used in the parent component
//only consumer inside the parent component after the provider is allowed
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
const CurrentUser = React.createContext();
const Notifications = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  const [s, setS] = useState("abc");
  const value1 = useContext(NumberContext);
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <>
      The answer is {value1}
      <h1>{s} hello</h1>
      <NumberContext.Consumer>
        {(sd) => <h1>{`${sd} must outside the provider`}</h1>}
      </NumberContext.Consumer>
      <NumberContext.Provider value={s}>
        <div>
          The dddddd is {value1}
          <CurrentUser.Provider value={{ name: "Shannon" }}>
            <NumberContext.Consumer>
              {(sd) => <h1>{`${sd} must inside the provider`}</h1>}
            </NumberContext.Consumer>
            <HeaderBar />
          </CurrentUser.Provider>
          <Display />
        </div>
      </NumberContext.Provider>
    </>
  );
}

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(NumberContext);
  return <div>The answer is {value}</div>;
}

function HeaderBar() {
  const user = useContext(CurrentUser);
  const notifications = useContext(Notifications);

  return <header>Welcome back, {user.name}! You have notifications.</header>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
