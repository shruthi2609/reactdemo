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

function App(){
  return(
    <>
<ContactManager></ContactManager>

    </>
  )
}
export default App