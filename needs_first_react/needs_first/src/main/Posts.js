import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './posts.css'

function PostsHome(){
    const [posts, setPosts] = useState([]);
    const [isForm, setIsForm] = useState(false);
    const [selectedPost, setSelectedPost] = useState(0);
    const [thisPost, setThisPost] = useState(null);

    useEffect(() => {
        axios.get(`http://209.23.8.250:8000/posts/access/`)
        .then(result => {
            // console.log(result.data)
            setPosts(result.data)
        })
    }, [])

    function Heading(){
        return (
            <div id="heading">
                <img src={require('./NFfinalicons-11.png')} height='80px'/>
                <img src={require('./NFfinalicons-12.png')} height='80px'/>
            </div>
        )
    }

    function filterCategory(category) {
        console.log('filter by', category)
        axios.get(`http://209.23.8.250:8000/posts/access/?category=${category}`)
        .then(result => {
            // console.log(resuacdlt.data)
            setPosts(result.data)
        })
    }

    function Categories(){
        let iconWidth = '60px';
        return (
            <div id="categories-container">
            <div id="categories">
                <div className="category" onClick={e=>filterCategory('Wheelchair')}>
                    <img src={require('./wheelchair-icon.png')} width={iconWidth} />
                    <span>Wheel Chair</span>
                </div>
                <div className="category" onClick={e=>filterCategory('Hospital bed')}>
                    <img src={require('./bed-icon.png')} width={iconWidth} />
                    <span>Medical Funiture</span>
                </div>
                <div className="category" onClick={e=>filterCategory('CPAP Machine')}>
                    <img src={require('./cpap-icon.png')} width={iconWidth} />
                    <span>CPAP/ O2</span>
                </div>
                <div className="category" onClick={e=>filterCategory('Crutches')}>
                    <img src={require('./crutch-icon.png')} width={iconWidth} />
                    <span>Crutches</span>
                </div>
                <div className="category" onClick={e=>filterCategory('Walker')}>
                    <img src={require('./walker-icon.png')} width={iconWidth} />
                    <span>Walker</span>
                </div>
                <div className="category" onClick={e=>filterCategory('Wheelchair')}>
                    <img src={require('./electric-wheelchair-icon.png')} width={iconWidth} />
                    <span>Electric Wheel Chair</span>
                </div>
                <div className="category" onClick={e=>filterCategory('Scooter')}>
                    <img src={require('./scooter-icon.png')} width={iconWidth} />
                    <span>Knee Scooter</span>
                </div>
            </div>
            </div>
        )
    }

    function toMenu(post_id){
        setSelectedPost(post_id)
        try{
            axios.get(`http://209.23.8.250:8000/posts/access/?id=${post_id}`)
            .then(result => {
                console.log(result.data[0])
                setThisPost(result.data[0])
                setIsForm(true);
            })
        } catch {
            console.log('error')
        }

        
    }

    function PostDetail(){
        return (
            <div>
                <div id='back' style={{padding:'40px', position:'fixed', cursor:'pointer'}} onClick={e=>setIsForm(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(80, 125, 247)" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                    </svg>
                    <strong style={{color:'rgb(80, 125, 247)', paddingLeft:'10px'}}>Back</strong>
                </div>
            
            <div id="selected-post">
                
                <div>
                <img className='post-img-main' src={thisPost ? thisPost.image : ""} height='400px' />
                <div className='post-detail'>
                    <strong>{thisPost ? thisPost.title : ""}</strong>
                    <span>${thisPost ? thisPost.rent_price_six : ""} Rent 6 weeks</span>
                    <span>${thisPost ? thisPost.rent_price_twelve : ""} Rent 12 weeks</span>
                    <span>Buy ${thisPost ? thisPost.buy_price : ""}</span>
                    <br />
                    <span>Pickup in <strong>{thisPost ? thisPost.city : ""}</strong></span>
                </div>
                </div>
                <div id="side-detail">
                    <h2>Rent 6 Weeks</h2>
                    <div className="price">
                        ${thisPost ? thisPost.rent_price_six : ""}
                    </div>
                    <h2>Rent 12 Weeks</h2>
                    <div className="price">
                        ${thisPost ? thisPost.rent_price_twelve : ""}
                    </div>
                    <h2>Buy Price</h2>
                    <div className="price-blue">
                        ${thisPost ? thisPost.buy_price : ""}
                    </div>
                    <br />
                    <br />
                    <div id='person-detail'>
                        <span>Seller: </span>
                        <h3>{thisPost ? thisPost.owner_name : ""}</h3>
                        <span>Phone: {thisPost ? thisPost.owner_number : ""}</span>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    return(
        <div>
            <Heading />
            { !isForm ?
                <Categories />
                : <></>
                            }
            { !isForm ?
                <div id='post-grid'>
                    {posts.map(post => {
                        return (
                            <div className='post' onClick={e=>toMenu(post.id)}>
                                <img className='post-img' src={post.image} />
                                <div className='post-detail'>
                                    <strong>{post.title}</strong>
                                    <span>${post.rent_price_six} Rent 6 weeks</span>
                                    <span>${post.rent_price_twelve} Rent 12 weeks</span>
                                    <span>Buy ${post.buy_price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            : <PostDetail />}
        </div>
    )
}

export default PostsHome;