import React from 'react';
import Main from '../../layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import {  Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Button } from 'antd';
import { Carousel } from 'antd';
// import { Document } from 'react-pdf'

const Index = () => {
  const {state} = useLocation();
  const navigate = useNavigate()

  const contentStyle = {
    minHeight: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };



  return (
    <Main pageName="Dashboard">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', gap: 20, marginBottom: 50}}>
            <AiOutlineArrowLeft size={30} style={{marginBottom: 5, color: 'gray'}} />
            <h2 className={styles.pageTitle}>{state.providerName}</h2>
          </Link>
       </div>

       <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
              {state.logo ? <img style={{height: 100, width: 100, borderRadius: 50}} src={state.logo} alt="" /> : <div
                style={{ height: 100, width: 100, backgroundColor: 'cornsilk', borderRadius: 50 }}
              />}
              <div>
                <h3 style={{ marginBottom: 5 }}>{state.providerName}</h3>
                <p style={{ marginBottom: 0 }}>Type: {state.providerType}</p>
                <p style={{ marginBottom: 0 }}>Branches: {state.branch ? state.branch?.length : 0}</p>
              </div>
            </div>
            
              <p style={{marginBottom: 5}}>Status: {state.status}</p>
              <p style={{marginBottom: 5}}>Contact Number: {state.providerContactNumber}</p>
              <p style={{marginBottom: 5}}>Services: <a  href={state.document}>{state.document}</a> </p>

              <div>
              <h4>Admin</h4>
              <p style={{marginBottom: 5}}>Name: {state.superAdminName}</p>
              <p >Email: {state.superAdminEmail}</p> 
            </div>
             
            <h4>Address</h4>
            <p>{state.providerAddress}</p>

           

            {/* {state.branch.length > 0 && 
            
             <>
             <h4>Branches</h4>
             <div style={{maxWidth: 500, margin: 'auto', marginBottom: 20, marginTop: 20}}>
             <Carousel afterChange={onChange}>
                {state.branch.map((item, index) => (
                  <div key={index}>
                   <div style={contentStyle}>
                    <p style={{marginBottom: 0}}>Branche Name: {item.branchName && item.branchName}</p>
                    <p style={{marginBottom: 0}}>Branche Address: {item.branchAddress}</p>
                    <p style={{marginBottom: 0}}>Branch Admin Name: {item.branchAdminName}</p>
                    <p style={{marginBottom: 0}}>Branch Admin Email: {item.branchAdminEmail}</p>
                    <p style={{marginBottom: 0}}>Branch Contact Number: {item.branchContactNumber}</p>
                    <p style={{marginBottom: 0}}>Name Of Beneficiary: {item.nameOfBeneficiary}</p>
                    <p style={{marginBottom: 0}}>Name Of AccountNumber: {item.accountNumber}</p>
                    <p style={{marginBottom: 0}}>User Email One: {item['userEmail 1']}</p>
                    <p style={{marginBottom: 0}}>User Type One: {item['userType 1']}</p>
                   </div>
                 </div>
                ))}
               </Carousel>
             </div>
             </>
             } */}

           
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
              <Button disabled onClick={() => navigate(`/${state.id}`, {state: state})} size="large" type="" style={{ width: '90%' }}>
                Edit
              </Button>
              <Button type="primary" onClick={() => navigate(`/addbranch/${state.id}`)} size="large" style={{ width: '90%' }}>
                Add branch
              </Button>
            </div>
          </div>
      </div>
    </Main>
  );
};

export default Index;
