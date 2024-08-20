import LifeCycleMethods from "./Components/LifeCycleMethods"
import RootComponent from "./Components/RootComponent"
import TodoComponent from './TodoApp/TodoComponent'
import data from './TodoApp/datafile'
import TestComponent from "./Components/TestComponent"
import LCMAPICall from "./Components/LCMAPICalls"
import ParentChat from "./Components/ParentChat"
import SimpleState from "./Components/SimpleState"
import Chat from "./Components/ScrollComponent"
import FormComponent from "./Components/FormComponents"
import PureComponentEg from "./Components/PureComponentEg"
import clothing from "./WOHOC/clothing"
import productDetails from "./WOHOC/electronic"
import FilterClothingProducts from "./WOHOC/FilterClothingProducts"
import FilterElectronicProducts from "./WOHOC/FilterElectronicProducts"
import ClothingCategory from "./WHOC/ClothingCategory"
import StylingComponent from "./Components/StylingComponent"
import PlainComponent from "./WHOC/PlainComponent"
import SimpleAPICall from "./APICalls/SimpleAPICall"
import APICallAxios from "./APICalls/APICallAxios"
import ImageSearchAPI from "./APICalls/ImageSearchAPI"
import ContactManager from "./ContactManager.js/ContactManager"
import SignInComponent from "./FormExamples/SignInComponent"
import AfterSubmit from "./FormExamples/AfterSubmit"
import FormElements from "./FormExamples/FormElements"
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import LeaderBoard from "./ScoreBoard/LeaderBoard"
import SortRank from "./ScoreBoard/SortRank"
import SortAge from "./ScoreBoard/SortAge"
import SortPoints from "./ScoreBoard/SortPoints"
import './App.css'
import SortName from "./ScoreBoard/SortName"
import NavBarComponent from "./ScoreBoard/NavBarComponent"
import UserPage from "./NestedRoutes/UserPage"
import LoginPage from "./NestedRoutes/LoginPage"
import DashBoardComponent from "./NestedRoutes/DashBoardComponent"
import PageNotFound from "./NestedRoutes/PageNotFound"

function App(){
  return(
    <>
    {/* <h1>home page</h1>
<BrowserRouter>
<Link to="/imagesearch">Image search App</Link>
<Link to="/todoapp">Todo App</Link>
<Routes>
  <Route path="/imagesearch" element={<ImageSearchAPI></ImageSearchAPI>}></Route>
  <Route path='/todoapp' element={<TodoComponent></TodoComponent>}></Route>
</Routes>
</BrowserRouter> */
<BrowserRouter>

<Routes>
  <Route path='/user'  element={<UserPage></UserPage>}>
      <Route path='login' element={<LoginPage></LoginPage>}>
      </Route>
      <Route path='dashboard' element={<DashBoardComponent userdata={{
        username:"john",
        role:"admin"
      } }></DashBoardComponent>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
  </Route>
  <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

</Routes>

</BrowserRouter>}


    </>
  )
}
export default App
