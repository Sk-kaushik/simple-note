import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Layout from "./Layout/Layout";

import { AllNotes, Category, Note, NotFound, Search } from "./Pages";

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
            <Route exact path="/category">
              <Redirect to="/category/pink" />
            </Route>

            <Route exact path="/category/:color">
              <Category />
            </Route>

            <Route path="/note" exact>
              <Note />
            </Route>
            <Route path="/note/:id">
              <Note />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
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
