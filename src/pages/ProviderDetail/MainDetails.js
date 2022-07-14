import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';

const MainDetails = ({ data }) => {
  return (
    <div>
      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Download documents
      </p>

      <div style={{ display: 'flex', gap: 10, marginBottom: 15 }}>
        {data?.contractFile?.length > 0 &&
          data.contractFile.map((item, index) => (
            <a key={index} target="_blank" href={item} rel="noreferrer">
              <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                Contract- {index + 1}
              </Button>
            </a>
          ))}
        {data?.document?.length > 0 &&
          data.document.map((item, index) => (
            <a key={index} target="_blank" href={item} rel="noreferrer">
              <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                Services- {index + 1}
              </Button>
            </a>
          ))}
      </div>
      <div>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Super Admin Details
        </p>

        <div style={{ marginBottom: 0 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Name:
          </span>
          {data.superAdminName}
        </div>

        <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Email:
          </span>
          {data.superAdminEmail}
        </div>
      </div>
      <div>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Admin Details
        </p>

        <div style={{ marginBottom: 0 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Name:
          </span>
          {data.adminName}
        </div>

        <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Email:
          </span>
          {data.adminEmail}
        </div>
      </div>
      <div>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Office user details
        </p>

        <div style={{ marginBottom: 0 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Name:
          </span>
          {data.userName}
        </div>

        <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 5 }} className="strongLabell">
            Email:
          </span>
          {data.userEmail}
        </div>
      </div>
      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Address Details
      </p>
      <div style={{ marginBottom: 0 }}>
        <span style={{ marginRight: 5 }} className="strongLabell">
          Country:
        </span>
        {data.country}
      </div>
      <div style={{ marginBottom: 0 }}>
        <span style={{ marginRight: 5 }} className="strongLabell">
          city:
        </span>
        {data.city}
      </div>
      <div style={{ marginBottom: 0 }}>
        <span style={{ marginRight: 5 }} className="strongLabell">
          Zip:
        </span>
        {data.zip}
      </div>
      <div style={{ marginBottom: 10, width: 400 }}>
        <span style={{ marginRight: 5 }} className="strongLabell">
          Address line :
        </span>
        {data.providerAddress}
      </div>
      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 10 }}>Comment</p>
      <p>{data.comment}</p>
    </div>
  );
};

export default MainDetails;
