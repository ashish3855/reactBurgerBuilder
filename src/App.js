import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </header>
    </div>
  );
}

export default App;
