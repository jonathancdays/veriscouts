import React from "react";
import "./blog.css";
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1>We're making big news!</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article imgUrl={blog01} date=" Jan 3, 2021" title="Warned about negative of client from the reviews here!"/>
        </div>
        <div className="blog-container_groupB">
        <Article imgUrl={blog02} date=" Mar 20, 2021" title="Now I know who to do business with and who to avoid."/>
        <Article imgUrl={blog03} date=" May 13, 2021" title="This has really happened my eyes to unsavory parts of the industry."/>
        <Article imgUrl={blog04} date=" July 15, 2021" title="My pre-contract research has become so easy now!"/>
        <Article imgUrl={blog05} date=" Sep 26, 2021"  title="Gives me a sense of helping others my giving my experience."/> 
        </div>
      </div>
    </div>
  );
};

export default Blog;
