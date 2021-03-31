import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./components/Header";
import './App.css'
import {HomePage} from "./components/HomePage";
import {BlogPage} from "./components/BlogPage";
import {ContactPage} from "./components/ContactsPage";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
              <Route path="/blog">
                <BlogPage />
              </Route>
              <Route path="/contacts">
                <ContactPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
        </Router>
    );
}

export default App;
