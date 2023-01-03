import React from "react";
import './Home.css';
import { FaBars } from 'react-icons/fa';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { GrRotateRight } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { RxGear } from 'react-icons/rx';
import { IoEllipsisVerticalCircle } from 'react-icons/io5';
import { BiUserCircle } from 'react-icons/bi';


class HomeHeader extends React.Component {
   render() {
      return (
         <div className="cover-header cover">
            <div className="header-content flex-row flex-bet align-center max-width99">
               <div className="flex-row header-left align-center">
                  <div className="flex-row flex-around align-center">
                     <button id="header_menu_icon" className="header-icon cursor btn-bg"><FaBars className="font-sz20" /></button>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/768px-Google_Keep_icon_%282020%29.svg.png" alt="Fail" className="cursor bg-trans" />
                     <p className="cursor bg-trans">Keep</p>
                  </div>
               </div>
               <div className="header-mid flex-row align-center flex-bet">
                  <div className="search flex-row align-center flex-around">
                     <div className="search-icon">
                        <button className=" input bg-trans marg10 cursor btn-bg">< HiMagnifyingGlass className="font-sz20" /></button>
                     </div>
                     <div className="input-search-wrap flex-row">
                        <input className="input-search input bg-trans font-sz20" type="text" placeholder="Search..." />
                        <button className="btn-bg cursor"><HiXMark className="font-sz20" /></button>
                     </div>
                  </div>
                  <div className="header-tool flex-row">
                     <button className="cursor btn-bg margin5"><GrRotateRight className="font-sz20" /></button>
                     <button className="cursor btn-bg margin5"><BsCardChecklist className="font-sz20" /></button>
                     <button className="cursor btn-bg margin5"><RxGear className="font-sz20" /></button>
                  </div>
               </div>
               <div>
                  <div className="header-gg flex-row">
                     <button className="cursor btn-bg margin5"><IoEllipsisVerticalCircle className="font-sz20" /></button>
                     <button className="cursor btn-bg margin5"><BiUserCircle className="font-sz20" /></button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default HomeHeader;