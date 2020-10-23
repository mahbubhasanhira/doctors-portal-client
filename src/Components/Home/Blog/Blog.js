import React from 'react';
import img3 from '../../../doctor-portal-resource/images/Ellipse 3.png';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {

    const blogPostData = [
        {
            authorName:'Rashid Kabir',
            date:'23 April 2020',
            img:img3,
            blogTitle:'Lorem ipsum dolor sit amet consectetur.',
            postDetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
        {
            authorName:'Dr. Caudi',
            date:'23 April 2020',
            img:img3,
            blogTitle:'Lorem ipsum dolor sit amet consectetur.',
            postDetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
        {
            authorName:'Dr. John Mitchel',
            date:'23 April 2020',
            img:img3,
            blogTitle:'Lorem ipsum dolor sit amet consectetur.',
            postDetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet hic nam atque a quasi.',
        },
    ]

    return (
       <section className='mb-5 pb-5'>
            <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}>Our Blog</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className='container d-flex justify-content-center'>
                    <div className='row pt-5'>
                        {
                            blogPostData.map(blogPostData=> <BlogPost blogPostData={blogPostData}/>)
                        }
                    </div>
                </div>
       </section>
    );
};

export default Blog;