import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (params) => {
  return (
    <div className={styles.BusinessList}>
      {
        params.businesses.map((business) => {
          return <Business business={business} />;
        })
      }
    </div>

  );
};

export default BusinessList;
