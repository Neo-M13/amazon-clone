import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import  AuthContext  from "../../context/authContext"



const Header = ({ isAuthenticated, onLogout }) => {

  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return  (
        <header className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="'Amazon logo"
          />
        </Link>
  
        <div className="header_search">
          <input className="header_input" type="text" />
          <SearchIcon className="search_icon" />
        </div>
        <div className="header_nav">
          {isAuthenticated.isLoggedIn ? (
            <Link to="/">
              <div className="header_option" onClick={onLogout}>
                <span className="header_optionOne">Hello User</span>
                <span className="header_optionTwo">Sign out</span>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="header_option">
                <span className="header_optionOne">Hello Guest</span>
                <span className="header_optionTwo">Sign In</span>
              </div>
            </Link>
          )}
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
          </div>
  
          <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_optionTwo">Prime</span>
          </div>
  
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">0</span>
          </div>
        </div>
      </header>
        );
      }};
      
    </AuthContext.Consumer>
   
  );
};

export default Header;
