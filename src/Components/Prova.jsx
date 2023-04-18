import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUserMe } from "../Redux/Actions/action_profile";



const Prova = () =>{
    const dispatch=useDispatch();
    const auterization="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODE3MzgyMDgsImV4cCI6MTY4Mjk0NzgwOH0.443vSkzyX21q7caKjjQyv2nT4WBXdOYyK9yu1mifDd0";
    useEffect(()=>{dispatch(getUserMe(auterization))},[])
return (
    <>
    </>

)

}

export default Prova