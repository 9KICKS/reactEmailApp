import React, { useState } from "react";
import Inbox from "./Inbox";
import "../styles/EmailSideBar.css";

import { ReactComponent as RedIcon } from "../../../assets/images/Red-Icon.svg";
import { ReactComponent as YellowIcon } from "../../../assets/images/Yellow-Icon.svg";
import { ReactComponent as GreenIcon } from "../../../assets/images/Green-Icon.svg";
import { ReactComponent as GmailIcon } from "../../../assets/images/Gmail-Icon.svg";
import { ReactComponent as InboxIcon } from "../../../assets/images/Inbox-Icon.svg";
import { ReactComponent as SentIcon } from "../../../assets/images/Sent-Icon.svg";
import { ReactComponent as StarredIcon } from "../../../assets/images/Starred-Icon.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/images/Archive-Icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/Delete-Icon.svg";
import { ReactComponent as DraftIcon } from "../../../assets/images/Draft-Icon.svg";
import { ReactComponent as DividerIcon } from "../../../assets/images/Divider-Icon.svg";
import { ReactComponent as FinanceIcon } from "../../../assets/images/Finance-Icon.svg";
import { ReactComponent as WorkIcon } from "../../../assets/images/Work-Icon.svg";
import { ReactComponent as PersonalIcon } from "../../../assets/images/Personal-Icon.svg";
import { ReactComponent as AccountIcon } from "../../../assets/images/Account-Icon.svg";

function EmailSideBar() {
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [openInbox, setOpenInbox] = useState(false);

    const handleDropDown = () => {
        setDropdownOpen(!dropDownOpen);
    };

    const toggleInbox = () => {
        setOpenInbox(!openInbox);
    };

    return (
        <div>
            {openInbox && <Inbox />}
            <div className="side-bar">
                <div>
                    <nav className="top-nav"><RedIcon /> <YellowIcon /> <GreenIcon /></nav>
                </div>
                <div className="dropdown">
                    <button className="icons-header" onClick={handleDropDown}><GmailIcon /> Gmail</button>
                    {dropDownOpen && (
                        <div className="dropdown-menu">
                            <button className="icons" onClick={toggleInbox}><InboxIcon /> Inbox</button>
                            <button className="icons"><SentIcon /> Sent</button>
                            <button className="icons"><StarredIcon /> Starred</button>
                            <button className="icons"><ArchiveIcon /> Archive</button>
                            <button className="icons"><DeleteIcon /> Delete</button>
                            <button className="icons"><DraftIcon /> Draft</button>
                        </div>
                    )}
                </div>
                <div className="divider">
                    <DividerIcon />
                </div>
                <div className="folder-dropdown">
                    <button className="folder-header" onClick={handleDropDown}>Folder</button>
                    {dropDownOpen && (
                        <div className="dropdown-menu">
                            <button className="folder-icons"><FinanceIcon /> Finance</button>
                            <button className="folder-icons"><WorkIcon /> Work</button>
                            <button className="folder-icons"><PersonalIcon /> Personal</button>
                        </div>
                    )}
                </div>
                <div className="user-account">
                    <div>
                        <AccountIcon className="icon" />
                    </div>
                    <div className="user-details">
                        <span className="user-name">Joshua Omisakin <br/></span>
                        <span className="icloud">omisakinjoshua@icloud.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailSideBar;