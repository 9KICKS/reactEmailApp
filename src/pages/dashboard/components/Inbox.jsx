import React, { useState, useEffect } from "react";
import InboxMail from "./InboxMail";
import "../styles/Inbox.css";

import { ReactComponent as SearchIcon } from "../../../assets/images/Search-Icon.svg";
import { ReactComponent as SortIcon } from "../../../assets/images/Sort-Icon.svg";
import { ReactComponent as DividerIcon } from "../../../assets/images/Divider-Icon.svg";

function Inbox() {
    const [emails, setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => setEmails(data.slice(0, 50)));
    }, []);

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    return (
        <div className="inbox">
            <nav>
                <h1 className="inbox-header">Inbox</h1>
                <h3 className="message-summary">2445 messages, 2 Unread</h3>
            </nav>
            <div className="search-sort-section">
                <div className="search-bar">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <div><SortIcon className="sort-icon" /></div>
            </div>
            <div className="inbox-divider">
                <DividerIcon/>
            </div>
            <div className="email-list">
                {emails.map((email) => (
                    <div key={email.id} className="email-item" onClick={() => handleEmailClick(email)}>
                        <h4 className="email-sender">{email.name}</h4>
                        <p className="email-subject">{email.email}</p>
                        <p className="email-body">{email.body}</p>
                    </div>
                ))}
            </div>
            {selectedEmail && <InboxMail email={selectedEmail} />}
        </div>
    );
}

export default Inbox;