import React  from "react";
import "../styles/InboxMail.css";

import { ReactComponent as TopNavIcons } from "../../../assets/images/TopNav-Icons.svg";
import { ReactComponent as DividerIcon } from "../../../assets/images/Divider-Icon.svg";
import { ReactComponent as MailDetailsIcon } from "../../../assets/images/Mail-Details.svg";
import { ReactComponent as MailImageIcon } from "../../../assets/images/Mail-Image.svg";
import { ReactComponent as ReplyIcon } from "../../../assets/images/Reply-Icon.svg";
import { ReactComponent as ForwardIcon } from "../../../assets/images/Forward_Icon.svg";

function InboxMail() {
    return (
        <div className="inbox-mail">
            <nav>
                <div className="inbox-mail-top-nav">
                    <TopNavIcons/>
                </div>
            </nav>
            <div className="inbox-mail-divider">
                <DividerIcon/>
            </div>
            <div className="mail-details">
                <MailDetailsIcon/>
            </div>
            <div className="inbox-mail-header">
                <h1>UI project: Client Dashboard</h1>
            </div>
            <div className="mail-message">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error quisquam tenetur totam. Aut
                    dolorum ducimus eos eveniet ex ipsa omnis placeat, quis ratione suscipit. Consequuntur ratione
                    repellendus sed veritatis?<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem ea error excepturi ipsa ipsum sapiente sequi! Corporis earum excepturi explicabo facere ipsa, magnam mollitia.
                    At dolore eos inventore non omnis.
                </p>
            </div>
            <div className="mail-image">
                <MailImageIcon/>
            </div>
            <div className="mail-message">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error quisquam tenetur totam. Aut
                    dolorum ducimus eos eveniet ex ipsa omnis placeat, quis ratione suscipit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div className="inbox-mail-buttons-section">
                <button className="reply-icon"><ReplyIcon /> Reply</button>
                <button className="forward-icon"><ForwardIcon /> Forward</button>
            </div>
        </div>
    );
}

export default InboxMail;