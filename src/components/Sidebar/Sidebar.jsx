import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';

import Logo from './Logo';
import ControlBoard from './ControlBoard';
import NeedHelp from './NeedHelp';
import Logout from './Logout';
import { ContainerSidebar, WrapperBottom } from './Sidebar.styled';

const logoStyles = {
  marginLeft: 14,
  marginLeftTab: 24,   
  width: 32,
  height: 32,  
};

const Sidebar = ({ menuActive }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
      await dispatch(logOut());
      window.location.reload();
  };

  return (
    <ContainerSidebar menuActive={menuActive}>
      <Logo styles={logoStyles} />
      <ControlBoard />
      <WrapperBottom>
        <NeedHelp />
        <Logout logOut={handleLogout} />
      </WrapperBottom>
    </ContainerSidebar>
  );
};

export default Sidebar;
