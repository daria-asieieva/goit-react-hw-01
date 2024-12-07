import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.friendCard}>
            <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
            <img src={avatar} alt={`${name}'s avatar`} width="48" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
  
        </div>
    );
};

export default FriendListItem;