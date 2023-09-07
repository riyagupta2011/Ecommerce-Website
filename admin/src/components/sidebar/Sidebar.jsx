import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, MailOutline, Report, WorkOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon"/>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
             <TrendingUpIcon className="sidebarIcon"/>
              Sales
            </li>
            
          </ul>


       
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentityIcon className="sidebarIcon"/>
              Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon"/>
             Products
            </li>
            </Link>
            <li className="sidebarListItem">
             <AttachMoney className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>
            Reports
            </li>
            
          </ul>


       
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
           
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"/>
             Mail
            </li>
            <li className="sidebarListItem">
             <DynamicFeed className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
             Messages
            </li>
          </ul>


       
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
             <Report className="sidebarIcon"/>
             Reports
            </li>
            
            
          </ul>


       
        </div>
      </div>
    </div>
  );
}