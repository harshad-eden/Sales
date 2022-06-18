import Header from './Header';
// import Footer from './Footer';
import SideBar from './SideBar.js';
import styles from './layout.module.css';

function Main({ children, pageName }) {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <div className={styles.contain}>
          <Header pageName={pageName} />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Main;
