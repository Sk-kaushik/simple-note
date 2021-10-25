import { Route, Switch } from "react-router-dom";

import { AllNotes, Category, Note, NotFound, Search } from "./Pages";

import Layout from "./Layout/Layout";

// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row ">
        <Sidebar />
        <Layout>
          <Switch>
            <Route exact path="/">
              <AllNotes />
            </Route>

            <Route exact path="/category/:color">
              <Category />
            </Route>

            <Route exact path="/note">
              <Note />
            </Route>

            <Route path="/note/:id">
              <Note />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            {/* HANDLE ROUTES WHICH wERE NOT FOUND */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </div>
    </>
  );
}

export default App;
