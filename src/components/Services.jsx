import React from 'react';
import style from "./Services.module.css"
function Services(props) {
    return (
        <div id="section3">
            <div className='container-fluid' id={style.container}>
                <div className='row'>
                    <h1>My Services</h1>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label}>
                            <img src="/images/2801091.png" alt="" className={style.image}/>
                            <h6>Web Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label}>
                            <img src="/images/3476582.png" alt="" className={style.image}/>
                            <h6>UI/UX</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label}>
                            <img src="/images/5376895-200.png" alt="" className={style.image} />
                            <h6>App Design</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                        </label>
                    </div>
                   
                    
                    </div>
            </div>
            <div className='container-fluid' id={style.container}>
                <div className='row' id="section4">
                    <h1>My Work</h1>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label1}>
                            <label className={style.label_1} >
                            <img src="" alt="" />
                            <h6>Ecommerce Websites</h6>
                            <p>Agricultural and Commodities in General trading online ,the buying and selling of products. Developed a number of them with great user experience</p>
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label2}>
                            <label className={style.label_1} >
                            <img src="" alt="" />
                            <h6>Social Media</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label3}>
                            <label className={style.label_1} >
                            <img src="" alt="" />
                            <h6>Learning Platforms</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta possimus facere voluptatem rem, libero earum. Aliquid quas corporis perferendis.</p>
                            </label>
                        </label>
                    </div>
                   
                    
                    </div>
            </div>
            <div className='container-fluid' id={style.container}>
                <div className='row' id="section6">
                    <h1>My Certifications</h1>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label1}>
                            <label className={style.label_1} >
                            <img src="images/Web capture_20-11-2023_153543_.jpeg" alt="" width="100%"/>
                           
                           
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label2}>
                            <label className={style.label_1} >
                            <img src="/images/Web capture_20-11-2023_154041_.jpeg" alt="" width="100%" />
                           
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label3}>
                            <label className={style.label_1} >
                            <img src="images/Web capture_20-11-2023_154137_.jpeg" alt="" width="100%" />
        
                            </label>
                        </label>
                    </div>
                   
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label1}>
                            <label className={style.label_1} >
                                
                            <img src="/images/Web capture_20-11-2023_154422_2.jpeg" alt="" width="100%" />
                           
                           
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label2}>
                            <label className={style.label_1} >
                            <img src="images/Web capture_20-11-2023_155019_.jpeg" alt=""  width="100%"/>
                           
                            </label>
                        </label>
                    </div>
                    <div className='col-sm-12  col-md-4 col-lg-4 col-xl-4' id={style.col}>
                        <label className={style.label3}>
                            <label className={style.label_1} >
                            <img src="images/Web capture_20-11-2023_154840_.jpeg" alt="" width="100%"/>
        
                            </label>
                        </label>
                    </div>
                   
                    
                    </div>
            </div>
        </div>
    );
}

export default Services;