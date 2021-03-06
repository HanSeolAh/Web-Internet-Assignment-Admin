import './sidebar.css'
import { LineStyle, Report, WorkOutline, DynamicFeed, MailOutline, PermIdentity, HighlightOff } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className = 'sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to = "/" className = 'link'>
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to = "/users" className = 'link'>
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Doctors
                </li>
              </Link>
              <Link to = "/products" className = 'link'>
                <li className="sidebarListItem">
                  <HighlightOff className="sidebarIcon" />
                  Pending...
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
} 

export default Sidebar