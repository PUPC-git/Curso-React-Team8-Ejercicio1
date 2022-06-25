import React, { useState } from 'react';
import RegisterLogin from '../../components/RegisterLogin/RegisterLogin.component';
import './WebLogin.view.scss';


export default function WebLogin() {
      
    let logged = localStorage.getItem('credential');
    
    return (
        <div>
            <RegisterLogin/>
        </div>
        
    )

}