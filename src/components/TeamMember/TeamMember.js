import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import { pickRandomColor } from './colors';

const randomNum = () => {
    return (Math.random() + 8.5).toFixed(1);
};

const TeamMember = ({ name, title, photoUrl, story, favoriteColor = pickRandomColor() }) => {
    return (
        <div className="container">
            <header>
                <div className="avatar-container">
                    <img
                        className="avatar"
                        src={photoUrl}
                        alt={name}
                    />
                </div>
                <h2 className="title">{title}</h2>
                <h1 className="name">{name}</h1>
            </header>
            <div className="body">{story}</div>
            <footer style={{ backgroundColor: favoriteColor }}>
                <div className="full-width-flex-box">
                    <div className="one-third-flex-box stat">{randomNum()}</div>
                    <div className="one-third-flex-box stat bordered">{randomNum()}</div>
                    <div className="one-third-flex-box stat">{randomNum()}</div>
                </div>
                <div className="full-width-flex-box">
                    <div className="one-third-flex-box">HONEST</div>
                    <div className="one-third-flex-box">FUN</div>
                    <div className="one-third-flex-box">AGILE</div>
                </div>
            </footer>
        </div>
    );
};

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string,
};

TeamMember.defaultProps = {
    photoUrl: '/img/avatar.jpeg',
    story: null,
};

export default TeamMember;
