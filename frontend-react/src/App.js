//we r returning one element in app

// import User from './User';
import Header from './Header';
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
import {user} from './ModuleDemo';
// import {user as u,sayHi} from './ModuleDemo'
import sayHello, {add as sum} from './ModuleDemo'
import User from './Components/User'
import Article from './Components/Article';
import Counter from './Components/Counter'
import Parent from './Components/Parent';
import ParentData from './Components/ParentData';
import CounterF from './Components/FunctionalComponents/CounterF';
import EmpForm from './Components/FunctionalComponents/EmpForm';
import AllHook from './Hooks/AllHook';


function App() {//passing a array
  // const scores=[1,2,3,4,5]

  // const add=()=>{//passing as a fun
  //   console.log("iam add inside app")
  // }
  //console.log(user)

  // console.log(u);
  // sayHi()

  // console.log(sayHello())
  // console.log(sum())
  //Template or str literals
  // let msg = "hello gd mrng"
  // let result = `hi ${msg}`
  // console.log(result)

  // //obj destructuring 
  // let address = {
  //   state:"telangana",
  //   city:"Nalgonda",
  //   pin:1234
  // }
  
  // let {state,city,pin} = address
  // console.log(state,city,pin)
  

  // //array destructuring
  // let ages=[20,40]
  // console.log(ages[0])//ES5
  // console.log(ages[1])//ES5
  // const[first,second] = ages
  // console.log(first,second)//ES6

  //spread operator-spread the elements of array into individual values.
  //Rest parameter-it takes care of rest of the parameters.
  //     .../


  // function add(a,b,c){
  //    console.log(a+b+c)
  // }
  // let numbers=[1,2,3]
  // add(...numbers)//spreading individual elemts



  // let [a,b,c] = [...numbers]
  // console.log(a,b,c)




  // var array1=[1,2,3,4,5]
  // var array2=[6,7,8,9,10]
  // var result = [...array1,...array2]
  // console.log(result)


  // function showRest(a,b,...c){//as rest-taking care of all remaining parameters.
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)
  // }
  // showRest(2,3,4,5,6,7,8,9)

  return (//jsx code
    <div className="App">
      {/* <h1>My first react app</h1> */}
      {/* <User name="thulsi" type="text"/>
      passed data as a props
      <Header/> */}

      {/* <Employee company="amazon" scores={scores} add={add}/> */}

      {/* <EmployeeWithFunction company="amazon"/>
      <Company company="Infosys"/>  */}

      {/* <User/> */}
      {/* <Article/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <ParentData/> */}
      {/* <CounterF name="thulsi"/> */}
      {/* <EmpForm/> */}
      {/* <AllHook/> */}

    </div>
  );
}

export default App;
