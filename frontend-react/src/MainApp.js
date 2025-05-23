import {BrowserRouter,Routes,Route} from "react-router-dom";

import EmployeePage from "./Pages/EmployeePage";
import StudentPage from "./Pages/StudentPage";
import CoursePage from "./Pages/CoursePage";
import Header from "./Pages/Header";
import StudentList from "./Pages/StudentList";
import CourseList from "./Pages/CourseListPage";
import ClassBasedComponent from "./react-recap/ClassBasedComponent";
import FunctionBasedComponent from "./react-recap/FunctionBasedComponent";
import StateHook from "./react-recap/recap-hooks/StateHook";
import EffectHookDemo from "./react-recap/recap-hooks/EffectHook";
import UseReducerRecap from "./hooks/UseReducerRecap";
import UserPage from "./Pages/UserPage";
import Article from "./components/Article";
import Employee from "./Employee";
import EmpForm from "./components/functionalcomponents/EmpForm";
import UsersCrud from "./Pages/UsersCrud";
import UsersSearchPage from "./Pages/UsersSearchPage"

function MainApp() {
  return (
    <div className="App">
      {/* <ClassBasedComponent/>
      <FunctionBasedComponent/> */}
      {/* <StateHook/>
      <EffectHookDemo/> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/course" element={<CoursePage/>}></Route>
          <Route path="/student" element={<StudentPage/>}></Route>
          <Route path="/" element={<EmployeePage/>}></Route>
          <Route path="/employee" element={<EmployeePage/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
          <Route path="/courseList" element={<CourseList/>}></Route>
          <Route path="/users" element={<UserPage/>}></Route>
          <Route path="/userscrud" element={<UsersCrud/>}></Route>
          {/* <Route path="/userssearch" element={<UsersSearchPage/>}></Route> */}
        </Routes>
      </BrowserRouter>
     
      {/* <Article/> */}
      {/* <Employee/> */}
      {/* <EmpForm/> *}
      {/* <UseReducerRecap/> */}
        
    </div>
  );
}

export default MainApp;


//////////steps////////

// 1.install npm react-router-dom --save
// 2.load the BrowserRouter,Routes,Route,Link from react-router-dom
// 3.create the pages/components
// 4.import all components which are part of Routes
// 5.configure routes through

//default--/