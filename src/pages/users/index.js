import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Navigation from "../navbar";
import { Card, CardContent, Typography, Avatar, Button, Box, Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
import { styles } from '../../styles/users.js';

const Users = () => {
  const [users, setUsers] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const ViewUsersTodos = (userId) => {
    router.push(`users/todos?userId=${userId}`);
  };





  return (
    <>
      <Navigation />
      
      <Box style={styles.forBox}>
        <Typography variant="h4" style={styles.typography1}>
          USERS
        </Typography>
        
        <Grid container spacing={2} justifyContent="left">

          {users !== null &&
            users.map((user) => (
              <Grid item key={user.id} xs={12} sm={6} md={4}>
                <Card style={styles.card}>

                  <CardContent style={styles.cardContent1}>
                    <Avatar
                      alt={`User ${user.id}`}
                      src="images/sample.jpg"
                      style={styles.avatar}
                    />
                    <div>
                      <Typography gutterBottom style={styles.typography2}>
                        {user.name}
                      </Typography>
                      <Typography style={styles.typography3}>
                        <AlternateEmailIcon style={styles.iconSize}/>
                        <span>{user.username}</span>
                      </Typography>
                      <Typography style={styles.typography3}>
                        <EmailIcon style={styles.iconSize}/>
                        <span>{user.email}</span>
                      </Typography>
                    </div>
                  </CardContent>

                  <Divider style={styles.forDivider}/>

                  <CardContent style={styles.cardContent2}>
                    <div style={styles.div}>
                      <Button variant="contained"
                        sx={{...styles.button, 
                        '&:hover': {backgroundColor: "lightgray",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}
                        }}
                        onClick={() => ViewUsersTodos(user.id)}>
                          View Todos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  ); 
};

export default Users;