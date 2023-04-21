import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../Redux/Actions/action_profile';

const AllNews = () => {
    const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q'
    const key=useSelector((state)=>state.user.key)
    const dispatch = useDispatch()
    const news = useSelector((state) => state.user.news)
    useEffect(() => {
        dispatch(getNews(key))
    }, [])
    let count = 0
    return (
        <>
            {
                news?.map((i) => {
                    count++
                    i = Math.floor(Math.random() * news.length)
                    if (count < 2) {
                        console.log(news)
                        return (
                            <div className="newsCard mb-3 rounded-3 bg-dark">
                                <div className='p-3 pb-0'>
                                    <div className="initialNews d-flex justify-content-between" >
                                        <div className='d-flex align-items-center '>
                                            <div className='me-2'>
                                                <div> <img src={news[news.length - 1]?.user?.image} alt="" style={{ aspectRatio: '1 / 1', borderRadius: "50%" }} /></div>
                                            </div>
                                            <div className='descriptionText mx-2'>
                                                <div>{news[news.length - 1]?.user?.username}</div>
                                                <div>{news[news.length - 1]?.user?.createdAt}</div>
                                                <div>{news[news.length - 1]?.user?.area}</div>
                                            </div>
                                        </div>

                                        <div className='d-flex controlIcon'>
                                            <div className='mx-3'><AiOutlinePlus className='mx-1' />Segui</div>
                                            <div><BsThreeDots className='threeIcon' /></div>
                                        </div>
                                    </div>

                                    <div className="contentNews my-3">
                                        <div>
                                            <p>{news[news.length - 1]?.text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="imgNews">
                                    <div><img src={news[news.length - 1]?.image} alt="" /></div>
                                </div>

                                <hr className='text-secondary mb-0 mx-4' />

                                <div className="commentIcons d-flex justify-content-between px-4 py-2">
                                    <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                        <div><FiThumbsUp /></div>
                                        <div>Consiglia</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                        <div><AiOutlineMessage /></div>
                                        <div>Commenta</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                        <div><BsArrowLeftRight /></div>
                                        <div>Diffondi il post</div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                        <div><FaTelegramPlane /></div>
                                        <div>Invia</div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        if (count < 49) {
                            return (
                                <div className="newsCard mb-3 rounded-3 bg-dark">
                                    <div className='p-3 pb-0'>
                                        <div className="initialNews d-flex justify-content-between" >
                                            <div className='d-flex align-items-center '>
                                                <div className='me-2'>
                                                    <div> <img src={news[i]?.user?.image} alt="" style={{ aspectRatio: '1 / 1', borderRadius: "50%" }} /></div>
                                                </div>
                                                <div className='descriptionText mx-2'>
                                                    <div>{news[i]?.user?.username}</div>
                                                    <div>{news[i]?.user?.createdAt}</div>
                                                    <div>{news[i]?.user?.area}</div>
                                                </div>
                                            </div>

                                            <div className='d-flex controlIcon'>
                                                <div className='mx-3'><AiOutlinePlus className='mx-1' />Segui</div>
                                                <div><BsThreeDots className='threeIcon' /></div>
                                            </div>
                                        </div>

                                        <div className="contentNews my-3">
                                            <div>
                                                <p>{news[i]?.user?.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="imgNews">
                                        <div><img src={news[i]?.image} alt="" /></div>
                                    </div>

                                    <hr className='text-secondary mb-0 mx-4' />

                                    <div className="commentIcons d-flex justify-content-between px-4 py-2">
                                        <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                            <div><FiThumbsUp /></div>
                                            <div>Consiglia</div>
                                        </div>
                                        <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                            <div><AiOutlineMessage /></div>
                                            <div>Commenta</div>
                                        </div>
                                        <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                            <div><BsArrowLeftRight /></div>
                                            <div>Diffondi il post</div>
                                        </div>
                                        <div className='d-flex flex-column align-items-center commentIcon p-1'>
                                            <div><FaTelegramPlane /></div>
                                            <div>Invia</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }


                })
            }


        </>


    )
}
export default AllNews