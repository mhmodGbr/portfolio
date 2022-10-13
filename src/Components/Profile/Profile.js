import React from "react";
import './Profile.css';
import prideimg from '../../images/portfolio-img1.jpg';
import prideim from '../../images/portfolio-img2.jpg';
import pridei from '../../images/portfolio-img3.jpg';
import pride from '../../images/portfolio-img4.jpg';
import prid from '../../images/portfolio-img5.jpg';
import pri from '../../images/portfolio-img6.jpg';

const Profile = () => {
    return (
        
            
        <section class="Profile" id="Profile">
        <div class="title">
            <h2>Profile</h2>
        </div>
        <div class="Profile-content">
            <div class="Profile-card">
                
                <div class="Profile-info">
                    <img src={prideimg} title='img'></img>
                    <h3>Web design</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
            <div class="Profile-card">
                
                <div class="Profile-info">
                <img src={prideim} title='img'></img>
                    <h3>Mobile Skills</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
            <div class="Profile-card">
                
                <div class="Profile-info">
                <img src={pridei} title='img'></img>
                    <h3>Applications</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
            <div class="Profile-card">
                
                <div class="Profile-info">
                <img src={pride} title='img'></img>
                    <h3>Photoshop</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
            <div class="Profile-card">
                
                <div class="Profile-info">
                <img src={prid} title='img'></img>
                    <h3>My Sites</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
            <div class="Profile-card">
                
                <div class="Profile-info">
                <img src={pri} title='img'></img>
                    <h3>Life Style</h3>
                    <p>The Profile Daenerys herself planned to ride, Profile was an immense black Profile who some described as a reincarnation of Balerion the Black Dread.</p>
                </div>
            </div>
        </div>
    </section>                            

    )
}

export default Profile ;