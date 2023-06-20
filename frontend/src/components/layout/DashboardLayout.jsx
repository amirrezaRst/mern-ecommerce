import React from 'react';
import DashboardSidebar from '../common/DashboardSidebar';
import DashboardNav from '../common/DashboardSidebar';



const DashboardLayout = ({ userData, children }) => {
    return (
        <React.Fragment>

            {children}

        </React.Fragment>
    );
}

export default DashboardLayout;