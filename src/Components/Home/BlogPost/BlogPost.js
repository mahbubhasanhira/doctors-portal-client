import React from 'react';
import './BlogPost.css'

const BlogPost = ({blogPostData}) => {
    return (
    <div className='col-md-4 text-start'>
        <div className='blog-container'>
            <div className="row d-flex align-items-center">
                <div className='col-3'>
                    <img style={{width:'50px', height:'50px' ,marginLeft:'20px'}} src={blogPostData.img} alt=""/>
                </div>
                <div className='col-7 '>
                    <h5>{blogPostData.authorName}</h5>
                    <h6>{blogPostData.date}</h6>
                </div>
            </div>
            <h5 className='mt-3 mb-3'>{blogPostData.blogTitle}</h5>
            <p>{blogPostData.postDetail}</p>
        </div>
    </div>
    );
};

export default BlogPost;