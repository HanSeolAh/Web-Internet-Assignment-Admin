import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className = "user">
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>
            <Link to = "/newUser">
            <button className="userAddButton">
                Create
            </button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://media.istockphoto.com/photos/your-health-is-my-happiness-picture-id489339030?k=20&m=489339030&s=612x612&w=0&h=JF5T9Sww_28Kdy5sRP0KGZZUdKdRk574NHz090bTMl4=" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">
                            Dr Peter
                        </span>
                        <span className="userShowUserTitle">
                            Professional Surgeon  
                        </span>
                    </div>
                </div>
                <div className="userShowButton">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className = "userShowInfo">
                        <PermIdentity className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            Peter Richard
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <CalendarToday className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            13.08.1977
                        </span>
                    </div>
                    <span className="userShowTitle">
                        Contact Details
                    </span>
                    <div className = "userShowInfo">
                        <PhoneAndroid className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            010 1234 1234
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <MailOutline className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            qwer1234@gmail.com
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <LocationSearching className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            Shah Alam | Malaysia
                        </span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">
                    Edit
                </span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>
                                Username
                            </label>
                            <input type = "text" placeholder = "Dr Peter" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Full Name
                            </label>
                            <input type = "text" placeholder = "Peter Richard" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Email
                            </label>
                            <input type = "text" placeholder = "qwer1234@gmail.com" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Specialty Field
                            </label>
                            <input type = "text" placeholder = "Surgeon" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Phone
                            </label>
                            <input type = "text" placeholder = "010 1234 1234" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Address
                            </label>
                            <input type = "text" placeholder = "Shah Alam | Malaysia" className = "userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://media.istockphoto.com/photos/your-health-is-my-happiness-picture-id489339030?k=20&m=489339030&s=612x612&w=0&h=JF5T9Sww_28Kdy5sRP0KGZZUdKdRk574NHz090bTMl4=" alt="" className="userUpdateImg" />
                            <label for = "file">
                                <Publish className = "userUpdateIcon" />
                            </label>
                            <input type = "file" id = "file" style = {{display: "none"}} />
                        </div>
                        <button className = "userUpdateButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User