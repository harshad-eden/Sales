/* eslint-disable react/jsx-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { BsBuilding } from 'react-icons/bs';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <img src="icons/logo.png" className={styles.logo} />
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
          to={'/'}
        >
          <MdOutlineDashboard
            size={22}
            className={({ isActive }) => (isActive ? styles.iconsActive : styles.icons)}
          />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={'/onboard'}
          className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
        >
          <BsBuilding
            size={22}
            className={({ isActive }) => (isActive ? styles.iconsActive : styles.icons)}
          />
          <p>Onboard</p>
        </NavLink>
        <NavLink
          to={'/providers'}
          className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
        >
          <BsBuilding
            size={22}
            className={({ isActive }) => (isActive ? styles.iconsActive : styles.icons)}
          />
          <p>providers</p>
        </NavLink>
        <NavLink
          to={'/logout'}
          className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
        >
          <AiOutlineLogout
            size={22}
            className={({ isActive }) => (isActive ? styles.iconsActive : styles.icons)}
          />
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
