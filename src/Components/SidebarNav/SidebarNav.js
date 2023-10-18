import { TbHexagonLetterD, TbUserSquare, TbHelpSquare, TbWallet, TbCube, TbSquareKey } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import Classes from './SidebarNav.module.scss';
import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import userImage from '../../Assets/user.jpg';
import '../../App.css';

const SidebarNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    {
      id: 1,
      logo: <TbSquareKey/>,
      name: "Dashboard",
      url: '/dashboard'
    },
    {
      id: 2,
      logo: <TbCube/>,
      name: "Product",
      url: '/product'
    },
    {
      id: 3,
      logo: <TbUserSquare/>,
      name: "Customers",
      url: '/customers'
    },
    {
      id: 4,
      logo: <TbWallet/>,
      name: "Income",
      url: '/income'
    },
    {
      id: 5,
      logo: <LuBadgePercent/>,
      name: "Promote",
      url: '/promote'
    },
    {
      id: 6,
      logo: <TbHelpSquare/>,
      name: "Help",
      url: '/help'
    }
  ];

  const sidebarToggleHandler = () => {
    setIsOpen(prevState=>{return !prevState});
  }

  return (
    <Fragment>
      <div className={isOpen ? `${Classes['sidebar-container']}` : `${Classes['closedSidebarWidth']} ${Classes['sidebar-container']}`}>
        <div className={`${Classes['inner-sidebar-container']}`}>
          <div onClick={sidebarToggleHandler} className={isOpen ? `${Classes['sidebar-heading']}` : `${Classes['closedNavWidth']} ${Classes['sidebar-heading']}`}>
            <TbHexagonLetterD/>
            { isOpen && <h3 className={`${Classes['heading']}`}>Dashboard</h3>}
          </div>
          <div className={`${Classes['nav-list']}`}>
            {NavItems.map(item=>{
              return (                  
                <NavLink key={item.id} className={isOpen ? `${Classes['link-control']}` : `${Classes['closedNavWidth']} ${Classes['link-control']}`} to={item.url}>
                  <span>{item.logo}</span>
                  {isOpen && <span>{item.name}</span>}
                </NavLink>                             
              );
            })        
            }
          </div>
        </div>

        <div className={isOpen ? `${Classes['user-container']}` : `${Classes['closedUserWidth']} ${Classes['user-container']}`}>
          <div className={`${Classes['user-data']}`}>
            <div className={`${Classes['user-image']}`}>
              <img src={userImage} alt="User Profile"/>
            </div>
            {isOpen && <div className={`${Classes['user-about']}`}>
                <p>Evano</p>
                <p className={`${Classes['muted-text']}`}>Project Manager</p>
              </div>
            }            
          </div>
          <div className={`${Classes['user-drop-icon']}`}>
            <IoIosArrowDown/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SidebarNav;
