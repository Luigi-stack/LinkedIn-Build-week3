import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExperience, addPictureExperience, delExperience, getExperience, getExperienceALL, setExperience } from "../Redux/Actions/action_profile";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as Icon from "react-icons/md"
import * as Icon2 from "react-icons/hi"

const Esperienze = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [toggle, setToggle] = useState(false)

    

    const[role,setRole]=useState("");
    const[comapny,setCompany]=useState("");
    const[startDate,setStartDate]=useState("");
    const[endDate,setEndDate]=useState("");
    const[description,setDescritpion]=useState("");
    const[area,setArea]=useState("");

    let state={
        role:role,
        company:comapny,
        startDate:startDate,
        endDate:endDate,
        description:description,
        area:area
    }
   



    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login._id)
    //const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs'
    const key=useSelector((state)=>state.user.key)
    console.log(user)
    const experince=useSelector((state)=>state.user.experience)
    useEffect(() => {
        dispatch(getExperienceALL(key, user)
    )}, [user]);

    const inputRef = useRef(null);
    const handleClick = () => {
      // 👇️ open file input box on click of another element
      inputRef.current.click();
    };
    const handleFileChange = event => {
      const fileObj = event.target.files && event.target.files[0];
      if (!fileObj) {
        return;
      }
      
      event.target.value = null;
      
      console.log('fileObj is', fileObj);
      console.log(event.target.files);

      console.log(fileObj);
      console.log(fileObj.name);
    };

    let [image,setImage]=useState()
    let [id,setId]=useState();

    useEffect(()=>{dispatch(addPictureExperience(key,user,id,image))
      console.log(image)
    
    },[image])

    return (
        <>
        
           

            
                


        <Card className="mt-3 bg-dark text-white">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">
                Esperienze <span> <AiOutlinePlus className='biPencil p-2 fs-1 text-white' onClick={()=>{
                  setRole("")
                  setCompany("")
                  setStartDate("")
                  setEndDate("")
                  setDescritpion("")
                  setArea("")
                   handleShow()
                }
                  } /><BiPencil className='biPencil p-2 fs-1 text-white' onClick={()=>setToggle(!toggle)}/></span>
            </Card.Body>
            { experince?.map((el,i) => (

                
                <>
               
               <input
                style={{ display: 'none' }}
                ref={inputRef}
                type="file"
                onChange={(e) => { 
                  setImage(e.target.files[0])
                  }}  />


                <Card.Body>
                <div className="d-flex">
                <div className="flex-shrink-0">
                <img src={el.image}  alt="" style={{ width: '60px', height: '60px' }} />
               
                <BiPencil className='biPencil p-2 fs-1' onClick={()=>{
                  handleClick()
                  setId(el._id)
                  }} />
           
                </div>
                <div className="flex-grow-1 ms-3">
                <span className="fw-bold">{el.role}</span> <br />
                <span>{el.company}</span> <br />
                <span className="text-secondary">inizio:{el.startDate.split("T",1)} - fine: {el.endDate.split("T",1)} </span> <br />
                <span className="text-secondary">{el.area}</span>
                            </div>
                        {toggle ? 
                        
                        (<>
<Button size="sm" className="border border-0" variant="outline-primary" 
onClick={()=>{
  setRole(el.role)
  setCompany(el.company)
  setStartDate(el.startDate.split("T",1))
  setEndDate(el.endDate.split("T",1))
  setDescritpion(el.description)
  setArea(el.area)
  handleShow2()
  
}
} 


><Icon2.HiPencil /></Button>



<Modal show={show2} onHide={handleClose2}>
<Modal.Header closeButton>
  <Modal.Title>Aggiungi Esperienza</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form onSubmit={(e)=>
      {
        e.preventDefault()
       
     
         state={
            role:role,
            company:comapny,
            startDate:startDate,
            endDate:endDate,
            description:description,
            area:area
        }

        dispatch(setExperience(key,user,el._id,JSON.stringify(state)))

        setRole("");
        setCompany("");
        setStartDate("");
        setEndDate("");
        setDescritpion("");
        setArea("");
        dispatch(getExperienceALL(key, user))
        handleClose()

    }} >

      

        

      <Form.Group className="mb-3" >

     
        <Form.Label>Ruolo</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Ruolo..." value={role} onChange={(e)=>{setRole(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Company..."  value={comapny} onChange={(e)=>{setCompany(e.target.value)}} />
      </Form.Group>
   
      <Form.Group className="mb-3" >
        <Form.Label>Data di inizio</Form.Label>
        <Form.Control type="date"   value={startDate} onChange={(e)=>{setStartDate(e.target.value)?.split("T")}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Data di Fine</Form.Label>
        <Form.Control type="date"   value={endDate} onChange={(e)=>{setEndDate(e.target.value)?.split("T")}} />
      </Form.Group>
   
      <Form.Group className="mb-3" >
        <Form.Label>Descrizione </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descrizione..."   value={description} onChange={(e)=>{setDescritpion(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Area</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Area..."  value={area} onChange={(e)=>{setArea(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        ADD
  </Button>
    </Form>



</Modal.Body>

</Modal>






                        </>) 
                        : 
                        
                        (<>
                         <Button size="sm" className="border border-0" variant="outline-light" onClick={()=>{
                            dispatch(delExperience(key,user,el._id));
                            dispatch(getExperienceALL(key, user));
                            }}><Icon.MdDeleteForever /></Button>
                        </>)
                        
                        
                        }

                           
                        </div>
                        </Card.Body>
                        
                        <hr className="m-0 mx-3" />
                        </>
                        ))
                    } 
            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Teacher Assistant</span> <br />
                        <span>EPICODE • A tempo pieno</span> <br />
                        <span className="text-secondary">nov 2022 - Presente • 6 mesi </span> <br />
                        <span className="text-secondary">Roma</span>
                    </div>
                </div>
            </Card.Body>

            <hr className="m-0 mx-3" />

            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHrvH2AWy0lbg/company-logo_100_100/0/1660057152234?e=1689811200&v=beta&t=UhUhkk7mG3r-5LPmj4wMQ7klAau4rLG4OhStMg2mdQM" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Junior Front-end developer</span> <br />
                        <span>Cloud Company S.r.l • A tempo pieno</span> <br />
                        <span className="text-secondary">nov 2021 - apr 2022 • 5 mesi </span> <br />
                        <span className="text-secondary">Milano</span>
                    </div>
                </div>
            </Card.Body>

            <hr className="m-0 mx-3" />

            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Studente del corso full-stack developer</span> <br />
                        <span>EPICODE • A tempo pieno</span> <br />
                        <span className="text-secondary">apr 2021 - ott 2021 • 6 mesi </span> <br />
                        <span className="text-secondary">Roma</span>
                    </div>
                </div>
            </Card.Body>
        </Card>



        <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Aggiungi Esperienza</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form onSubmit={(e)=>
      {
        e.preventDefault()
      
         state={
            role:role,
            company:comapny,
            startDate:startDate,
            endDate:endDate,
            description:description,
            area:area
        }

        dispatch(addExperience(key,user,JSON.stringify(state)))

        setRole("");
        setCompany("");
        setStartDate("");
        setEndDate("");
        setDescritpion("");
        setArea("");
        dispatch(getExperienceALL(key, user))
        handleClose()

    }} >
      <Form.Group className="mb-3" >
        <Form.Label>Ruolo</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Ruolo..." value={role} onChange={(e)=>{setRole(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Company..."  value={comapny} onChange={(e)=>{setCompany(e.target.value)}} />
      </Form.Group>
   
      <Form.Group className="mb-3" >
        <Form.Label>Data di inizio</Form.Label>
        <Form.Control type="date"   value={startDate} onChange={(e)=>{setStartDate(e.target.value)?.split("T")}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Data di Fine</Form.Label>
        <Form.Control type="date"   value={endDate} onChange={(e)=>{setEndDate(e.target.value)?.split("T")}} />
      </Form.Group>
   
      <Form.Group className="mb-3" >
        <Form.Label>Descrizione </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descrizione..."   value={description} onChange={(e)=>{setDescritpion(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Area</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Area..."  value={area} onChange={(e)=>{setArea(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        ADD
  </Button>
    </Form>



</Modal.Body>

</Modal>


                    </>
    )
}

export default Esperienze