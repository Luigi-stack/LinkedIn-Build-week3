import { useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { getUserALL } from "../Redux/Actions/action_profile"


//const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q'
const PersoneCheConosci = () => {
    const key=useSelector((state)=>state.user.key)
    const allProfile = useSelector((state) => state.user.allprofile)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserALL(key))
    }, [])
    let count = 0
    let count2 = 0
    return (
        <>
            <Card className="text-white bg-dark border-0 fw-bold mt-3">
                <Card.Body className="pb-0">
                    Persone che potresti conoscere
                </Card.Body>
                {
                    allProfile?.map((i) => {
                        count++
                        count2++
                        if (count < 5) {
                            i = Math.floor(Math.random() * allProfile.length)
                            console.log(i)
                        }
                        if (count2 < 5) {
                            return (
                                <>
                                    <Card.Body>
                                        <div className="d-flex align-item-center">
                                            <img src={allProfile[i].image} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                            <p className="ms-3">{allProfile[i].name} {allProfile[i].surname}<br /> <span className="fw-lighter">{allProfile[i].title}<br />{allProfile[i].area}</span> </p>
                                        </div>
                                        <Button variant="outline-light" size="sm" className='altroButton rounded-pill px-3'><BsFillPersonPlusFill /> Collegati</Button>
                                    </Card.Body>
                                    <hr className="m-0 mx-3" />
                                </>
                            )
                        }
                    })
                }

            </Card>

            <Card className="mt-3">
                <Card.Img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Card image" />
            </Card>
        </>
    )
}

export default PersoneCheConosci