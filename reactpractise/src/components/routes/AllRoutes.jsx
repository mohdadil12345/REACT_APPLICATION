import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import SignupPage from '../SignupPage'
import FetchingData from '../FetchingData'
import CrudForm from '../CrudForm'
import Todolist from '../Todolist'
import Counter from '../Counter'
import DebounceSearch from '../DebounceSearch'
import Calculator from '../Calculator'
import Timer from '../Timer'
import CrudApi from '../CrudApi'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='' element =  {<HomePage/>}/>
            <Route path='/login' element =  {<LoginPage/>}/>
            <Route path='/signup' element =  {<SignupPage/>}/>
            <Route path='/fetch' element =  {<FetchingData/>}/>
            <Route path='/crud' element =  {<CrudForm/>}/>
            <Route path='/todolist' element =  {<Todolist/>}/>
            <Route path='/counter' element =  {<Counter/>}/>
            <Route path='/debounce' element =  {<DebounceSearch/>}/>
            <Route path='/timer' element =  {<Timer/>}/>
            <Route path='/calculator' element =  {<Calculator/>}/>
            <Route path='/crudapi' element =  {<CrudApi/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes