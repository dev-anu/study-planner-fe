import React,{useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  return token ? (
    <div className='flex'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div>{children}</div>
    </div>
  ) : (
    // Redirect to login if not authenticated and store the current location to return after login
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
