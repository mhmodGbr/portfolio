import React , { Component , Fragment } from "react";
import './Home.css'
import Navigation from "../Navbar/Navbar";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Profile from "../Profile/Profile";
import About from "../About/About";
import Work from "../Work/Work";
import Comments from "../Comments/Comments";
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";



class Home extends Component {
    render() {
        return(
            <Fragment>

                <Navigation />
                <Header />
                <Skills />
                <Profile />
                <About />
                <Work />
                <Comments />
                <Questions />
                <Footer />
                

            </Fragment>
        ) 
    }
}

export default Home ;