import React from 'react';
import { BiLike, BiShare } from 'react-icons/bi'
import { BlogAuthorName, Blogcontainer, BlogWrap, BlogName, BlogCard, BlogDetails, BlogH1, Icons  } from './BlogElements';


const Blog = () => {
    return (
        <>
        <Blogcontainer id="blog">
        <BlogH1>All Posts</BlogH1>
            <BlogWrap>
                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>

                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>

                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>

                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>

                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>

                <BlogCard>
                    <BlogName>Motivational</BlogName>
                    <BlogAuthorName>Bhakti Manani 16 June,2021</BlogAuthorName>
                    <BlogDetails>Be successfull: Level up your mental game</BlogDetails>
                    <Icons>
                    <BiLike />  <BiShare />
                    </Icons>
                </BlogCard>
            </BlogWrap>
        </Blogcontainer>
        </>
    )
}

export default Blog
