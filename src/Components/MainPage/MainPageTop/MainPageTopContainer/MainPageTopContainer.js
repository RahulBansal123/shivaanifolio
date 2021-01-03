import React from 'react';
import './MainPageTopContainer.css';
const MainPageTopContainer = ({ src, title, data, left }) => {
    return (
        <div className='MainPageTop__data_container'>
            <div className='MainPageTop__data_container_left'>
                <object type="image/svg+xml" data={ src } width={ left ? '50' : '60' } height={ left ? '50' : '60' }>
                    Upgrade Your browser to see this.
        </object>
            </div>
            <div className='MainPageTop__data_container_right'>

                <h3>{ title }</h3>
                <p>{ data }</p>
            </div>
        </div>
    );
};

export default MainPageTopContainer;
