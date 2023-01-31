import React from 'react'
import MinimalFooter from "../../../components/footer/minimal-footer";
import AdminNavigationBar from "../../../components/navigation-bar/admin-navigation-bar";

function AdminPage() {
    return(
        <div>
            <AdminNavigationBar/>
            <MinimalFooter/>
        </div>
    );
}

export default AdminPage;