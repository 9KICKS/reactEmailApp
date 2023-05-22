import React  from "react";
import "../styles/InboxMail.css";

import { ReactComponent as TopNavIcons } from "../../../assets/images/TopNav-Icons.svg";

function InboxMail() {
    return (
        <div className="inbox-mail">
            <nav>
                <div className="inbox-mail-top-nav">
                    <TopNavIcons/>
                </div>
            </nav>
        </div>
    );
}

export default InboxMail;
