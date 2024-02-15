import { useState, useEffect } from "react";
import Navigation from "../navbar";
import { Typography, Box } from "@mui/material";
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import { styles } from '../../styles/comments.js';

const Comments = () => {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = () => {
      const postId = router.query.postId;
      if (postId) {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
          .then((response) => response.json())
          .then((data) => {
            setComments(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching comments:", error));
      }
    };

    fetchComments();
  }, [router.query]);




  
  return (
    <>
      <Navigation />

      <Box style={styles.forBox1}>
        <Typography variant="h4" style={styles.typography1}>
          COMMENTS
        </Typography>
      </Box>

      {loading ? (
        <Box style={styles.forBox2}>
          <Typography style={styles.typography2}>Loading...</Typography>
        </Box>
      ) : (
        <Box style={styles.forBox3}>
          {comments.map((comment) => (
            <Box key={comment.id} style={styles.forBox4}>
              <Image
                src="/images/sample.jpg"
                alt="Sample"
                width={100}
                height={100}
                style={styles.image}
              />
              <Box>
                <Typography style={styles.typography3}>{comment.name}</Typography>
                <Typography style={styles.typography4}>{comment.body}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Comments;
