import Header from './Header';
// import Footer from './Footer';
import SideBar from './SideBar.js';
import styles from './layout.module.css';

function Main({ children, pageName }) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className={styles.contain}>
          <Header pageName={pageName} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
