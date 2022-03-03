import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className = "widgetSm">
        <span className="widgetSmTitle">
          New Join Doctors
        </span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="https://media.istockphoto.com/photos/confident-doctor-wearing-lab-coat-and-stethoscope-sitting-on-sofa-at-picture-id1309517709?k=20&m=1309517709&s=612x612&w=0&h=lMyx6Wsx-hhh2pjBmC-jtmkAR3X-YocMSPTcXGeuj5A=" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                Dr Nickolas
              </span>
              <span className="widgetSmUserTitle">
                Dermatologist
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className = "widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.istockphoto.com/photos/dentist-picture-id642434836?k=20&m=642434836&s=612x612&w=0&h=dx2nuEKf5397G4IMb2eYN9lu9qVCQIf6nEy8NcZN6Sg=" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                Dr Hermione
              </span>
              <span className="widgetSmUserTitle">
                Dentist
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className = "widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.istockphoto.com/photos/female-doctor-at-the-hospitalcheerful-happy-doctor-with-crossed-hands-picture-id1170862743?k=20&m=1170862743&s=612x612&w=0&h=SQ9OJHRWoEBoYiyuJP0_WvCe1lyERMlXz93DUMHIdww=" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                Dr Daphne
              </span>
              <span className="widgetSmUserTitle">
                Plastic Surgeon
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className = "widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.istockphoto.com/photos/portrait-of-confident-female-doctor-picture-id1134045143?k=20&m=1134045143&s=612x612&w=0&h=yi51Dva96cRimdU5ctHtQOtvnESlwm1SmapDOxN6S_0=" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                Dr Gloria
              </span>
              <span className="widgetSmUserTitle">
                Psychosurgeon
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className = "widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                Dr Daniel
              </span>
              <span className="widgetSmUserTitle">
                Dermatologist
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className = "widgetSmIcon"/>
              Display
            </button>
          </li>
        </ul>
    </div>
  )
}

export default WidgetSm