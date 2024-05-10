import React, { useReducer } from 'react'

const initial = {
    username : "",
    email : "",
    password : "",
}

const reducer = (state, {type, payload}) => {
     switch (type) {
        case "username":{
            return {
              ...state,
              username :  payload
            }
        }
        case "email":{
            return {
                ...state, 
                email : payload
            }
        }
        case "password":{
            return {
                ...state, 
                password : payload
            }
        }
            
     
        default:
           return {
            ...state
           }
     }
}

function FormReducer() {
    const [state, dispatch] = useReducer(reducer,initial )


    const handle_change = (e) => {

       const {name, value} = e.target
        dispatch({
            type : name,
            payload : value
        })

    }

const handle_form = (e) => {
    e.preventDefault()
    console.log("state", state)
}


const {username, email, password} = state

  return (
    <div className="crud_form">
        <form onSubmit={(e) => handle_form(e)} >
            <input name='username' value={username} onChange={(e)=> handle_change(e)} type="username"  placeholder='username'/>
            <input name='email' value={email} onChange={(e)=> handle_change(e)} type="email"  placeholder='email'/>
            <input name='password' value={password} onChange={(e)=> handle_change(e)} type="password"  placeholder='password' />
            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default FormReducer