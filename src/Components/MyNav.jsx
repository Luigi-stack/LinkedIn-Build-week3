import { Dropdown } from "bootstrap"
import { AiFillHome } from 'react-icons/ai';

const MyNav = function () {
    return (
        <>
            <nav>
                <div className="searchBar">
                    <div><img src="http://placekitten.com/g/20" alt="" /></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div className="icons">
                    <div>
                        <div><AiFillHome/></div>
                        <div>Home</div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="sideBar">

                </div>
            </nav>
        </>
    )
}
export default MyNav