import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../Redux/Actions/action_profile';

const AllNews = () => {
    const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q'
    
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getNews(AUTH))
    },[])

    return (

        <div className="newsCard m-5">
            <div className='p-4'>
                <div className="initialNews d-flex justify-content-between" >
                    <div className='d-flex align-items-center '>
                        <div>
                            <div> <img src="http://placekitten.com/50" alt="" /></div>
                        </div>
                        <div className='descriptionText mx-2'>
                            <div>Millionaire</div>
                            <div>2525525 follower</div>
                            <div>Post sponsorizzato</div>
                        </div>
                    </div>
                    <div className='d-flex controlIcon'>
                        <div className='mx-3'><AiOutlinePlus className='mx-1' />Segui</div>
                        <div><BsThreeDots className='threeIcon' /></div>
                    </div>

                </div>
                <div className="contentNews my-3">
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eaque quos ducimus ad quisquam aut qui culpa corrupti quaerat nam sint delectus doloribus enim, reprehenderit commodi quam, recusandae illum voluptatem?</p>
                    </div>
                </div>
            </div>


            <div className="imgNews">
                <div><img src="http://placekitten.com/400" alt="" /></div>
            </div>

            <div className="commentIcons d-flex justify-content-between px-4 py-2">
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><FiThumbsUp/></div>
                    <div>Consiglia</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><AiOutlineMessage /></div>
                    <div>Commenta</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><BsArrowLeftRight /></div>
                    <div>Diffonfi il post</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'> 
                    <div><FaTelegramPlane /></div>
                    <div>Invia</div>
                </div>
            </div>
        </div>

    )
}
export default AllNews