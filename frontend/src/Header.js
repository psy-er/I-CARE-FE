import "./Header.css";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Header=({title,setting,profile,profile1,back})=>{
    setting = <SettingsOutlinedIcon />;
    profile = <PermIdentityOutlinedIcon />
    
    return (
        <div className="Header">
            <div className="header_setting">{setting}</div>
            <div className="header_title">{title}</div>
            <div className="header_profile">{profile}</div>
            {/* 뒤로가기 */}
            <div className="header_back">{back}</div>

        </div>
    );
};

export default Header;