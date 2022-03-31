import React from 'react'
import { Link } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'

function NavBar() {
  return (
    <>
      <div className="header">
        <div className="home-container">
          <Link to="/home">
            <img src={logo} className="logo" alt="a " />
          </Link>

          <div className="sb_nav">
            <form id="Find" className="Find">
              <div className="sb_searchcontainer">
                <input
                  id="form"
                  type="text"
                  placeholder="Busca tu articulo"
                  className="inputSearch"
                />
                <button id="sb_send" type="submit" className="submitBtn">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fsearch-button-png-search-icon-this-icon-is-supposed-to-represent-a-magnifying-glass-it-s-a-large-png-50-px-1600.png&f=1&nofb=1"
                    alt="img not found"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="userbuttons-container">
            <ul className="main-nav">
              <Link to="/login">
                <button className="btnHome">
                  <RiLoginCircleFill />
                </button>
              </Link>

              <Link to="/login">
                <button className="btnHome">
                  <AiFillHeart />
                </button>
              </Link>

              <Link to="/home">
                <button className="btnHome">
                  <BsFillCartFill />
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar