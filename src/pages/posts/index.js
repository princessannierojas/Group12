import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Navigation from "../navbar";
import { Card, CardContent, Typography, Grid, Container, Link, Box } from "@mui/material";
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';
import { styles } from '../../styles/posts.js';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const ViewPostsComments = (postId) => {
    router.push(`posts/comments?postId=${postId}`);
  };
  




  
  return (
    <>
      <Navigation />
      
      <Box style={styles.forBox}>
        <Typography variant="h4" style={styles.typography1}>
          POSTS
        </Typography>
      </Box>

      <Container style={styles.container}>
        <div style={styles.div}>
          <PostsGrid posts={posts} ViewPostsComments={ViewPostsComments} />
        </div>
      </Container>
    </>
  );
}; 

const PostsGrid = ({ posts, ViewPostsComments }) => {
  return (
    <Grid container spacing={2} style={styles.grid}> 
      {posts !== null && posts.map(post => ( 
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card style={styles.card}>

            <CardContent style={styles.cardContent}>
              <Typography style={styles.typography3}>
                {post.id}. {post.title}
              </Typography>

              <Typography gutterBottom style={styles.typography2}>
                <a style={styles.aa}>Posted by User ID:</a> {post.userId}
              </Typography>

              <Typography style={styles.typography4}>
                <a style={styles.a}></a> &quot;{post.body}&quot;
              </Typography>

              <br></br>
              <Divider style={styles.forDivider}/>

              <br></br>
              <Link href="#" style={styles.forLink} 
                onMouseEnter={(e) => {e.target.style.transform = "scale(1.09)", e.target.style.color = "white";}}
                onMouseLeave={(e) => {e.target.style.transform = "scale(1)", e.target.style.color = "rgba(236, 237, 238, 0.8)";}}   
                onClick={() => ViewPostsComments(post.id)}
              >
              <CommentIcon style={styles.commentIcon}
                onMouseEnter={(e) => {e.target.style.transform = "scale(1.09)", e.target.style.color = "white";}}
                onMouseLeave={(e) => {e.target.style.transform = "scale(1)", e.target.style.color = "rgba(236, 237, 238, 0.8)";}}
                onClick={() => ViewPostsComments(post.id)}
              />
                VIEW COMMENTS
              </Link>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
