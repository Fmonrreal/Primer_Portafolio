import {useContext} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Sent_email from '../Sent_email';
import Main_page from '../Main_page';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import portfolioContext from '../context/portfolio/portfolioContext';

export const AppRouter = () => {
  const PortfolioContext = useContext(portfolioContext);
  const {email_send} = PortfolioContext;
  return (
    <div>
        <BrowserRouter>
            <Routes>
              {/* <PublicRoute 
                exact 
                path='/' 
                component={Main_page}
                isAuthenticated={email_send}
                // isAuthenticated={!!uid}
              />
              <PrivateRoute 
                  exact 
                  path='sent_email' 
                  component={Sent_email}
                  isAuthenticated={email_send}
                  // isAuthenticated={!!uid}
                  />
              <Navigate to='/'/> */}
                <Route path="/" element={<Main_page/>} />
                <Route path="sent_email" element={<Sent_email/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
