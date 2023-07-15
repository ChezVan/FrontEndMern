import React from "react";
// "as" mean variable
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/place/new" element={<NewPlace />}></Route>
          <Route path="/" element={<Users />}></Route>
          <Route path="/" element={<Users />}></Route>
          <Route path='*' element={<Navigate to="/" replace={true} />} />
        </Routes>
        {/* Navigate is trigger if path is nothing then go back homepage website, Please note: Redirect replace to Naviage after update React-Router v6*/}
     
    </Router>
  );
};

export default App;
