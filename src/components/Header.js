import { React, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material//ShoppingCart";
import MailIcon from "@mui/icons-material//Mail";
import MenuIconRounded from "@mui/icons-material//MenuRounded";

export default function Header() {
  const [isNavExpand, setIsNavExpand] = useState(false);

  return (
    <div className="header">
      <div className="header__left">
        <Link
          className="header__menu--icon"
          onClick={() => setIsNavExpand(!isNavExpand)}
        >
          <MenuIconRounded />
        </Link>
        <h2 className="header__logo">Health care</h2>
      </div>
      
      <div className="header__nav">
        <Link className="header__nav--link" to=".">
          <span className="header__nav--icon">
            <HomeIcon />
          </span>
          <h4>Home</h4>
        </Link>

        <Link className="header__nav--link" to='cart'>
          <span className="header__nav--icon">
            <ShoppingCartIcon />
          </span>
          <h4>Cart</h4>
        </Link>

        <Link className="header__nav--link">
          <span className="header__nav--icon">
            <MailIcon />
          </span>
          <h4>Contact</h4>
        </Link>
      </div>

      <div className={`header__sidebar ${isNavExpand && "expand"}`}>
        <Link className="header__sidebar--link" to=".">
            <span>
              <HomeIcon />
            </span>
            <h4>Home</h4>
          </Link>

          <Link className="header__sidebar--link" to='cart'>
            <span>
              <ShoppingCartIcon />
            </span>
            <h4>Cart</h4>
          </Link>

          <Link className="header__sidebar--link">
            <span>
              <MailIcon />
            </span>
            <h4>Contact</h4>
          </Link>

          <Link className="header__sidebar--link">
            <h4>Sign in</h4>
          </Link>
      </div>
    </div>
  );
}
