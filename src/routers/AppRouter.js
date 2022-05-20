import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Sent_email from '../Sent_email';
import Main_page from '../Main_page';

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main_page/>} />
                <Route path="sent_email" element={<Sent_email/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
