import React, {useEffect} from 'react'
import AdminNavigationbar from "../../components/navigation-bar/admin-navigation-bar";
import MinimalFooter from "../../components/footer/minimal-footer";
import {useLoginSession} from "../../hooks/login/use-login-session";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

function AdminPage() {
    return(
        <div>
            <AdminNavigationbar/>
            <MinimalFooter/>
        </div>
    );
}

export default AdminPage;