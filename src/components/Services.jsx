import React from 'react';
import style from "./Services.module.css"
function Services(props) {
    return (
        <div>
            <div className='container-fluid' id={style.container}>
                <div className='row'>
                    <h1>My Services</h1>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>Web Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>UI/UX</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>App Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                   
                    
                    </div>
            </div>
            <div className='container-fluid' id={style.container}>
                <div className='row'>
                    <h1>My Work</h1>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>Web Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>UI/UX</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col' id={style.col}>
                        <label className={style.label}>
                            <img src="" alt="" />
                            <h6>App Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                   
                    
                    </div>
            </div>
        </div>
    );
}

export default Services;