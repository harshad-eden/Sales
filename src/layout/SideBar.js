/* eslint-disable react/jsx-key */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { BsBuilding } from 'react-icons/bs';
import Logo from '../icons/logo.png';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Link to={'/'}>
        <img src={Logo} className={styles.logo} />
      </Link>
      <div className={styles.links}>
        <NavLink className={styles.linkItem} to={'/'}>
          <MdOutlineDashboard size={22} className={styles.icons} />
          <p>Dashboard</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
