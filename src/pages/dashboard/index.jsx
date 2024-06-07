import React, { useEffect } from 'react'

import Layout from "../../components/layout";

const Dashboard = () => {
  useEffect(() => {
   const token = localStorage.getItem("token")
      if(!token) {
        navigate("/") 
        return
      }
  }, []);
  
  return (
    <Layout>
    
    </Layout>
  )
}

export default Dashboard;