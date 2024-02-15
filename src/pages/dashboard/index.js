import React, { useState } from 'react';
import Navigation from '../navbar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DashboardChart from './chart';
import DashboardChart2 from './chart2';
import { styles } from '../../styles/dashboard.js';


const ForDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalPosts, setTotalPosts] = useState(null);
  const [totalComments, setTotalComments] = useState(null);
  const [totalTODOS, setTotalTODOS] = useState(null);

  const GetTotalNums = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setTotalUsers(users.length));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setTotalPosts(posts.length));

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => setTotalComments(comments.length));

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => setTotalTODOS(todos.length));
  };

  // get the total nums
  GetTotalNums();



  
  
  return (
    <>
      <Navigation />

      <Container style={styles.container}>
        <div style={styles.mydiv}>
          <DashboardTiles
            totalUsers_={totalUsers}
            totalPosts_={totalPosts}
            totalComments_={totalComments}
            totalTODOS_={totalTODOS}
          />
        </div>
        
        <div style={styles.mydiv2}>
          <div style={styles.dashboardChart}>
            <DashboardChart data={[totalUsers, totalPosts, totalComments, totalTODOS]} />
          </div>
          <div style={styles.dashboardChart2}>
            <DashboardChart2/> 
          </div>
        </div>
      </Container>
    </>
  );
}

const DashboardTiles = ({ totalUsers_, totalPosts_, totalComments_, totalTODOS_ }) => {
  return (
    <>
      {totalUsers_ !== null && (
      <Card style={styles.myCard}>
        <CardContent style={styles.myCardContent}>
          <Typography style={styles.typography1}>
            USERS
          </Typography>
          <Typography variant="h3" style={styles.typography2}>
            {totalUsers_}
          </Typography>
        </CardContent>
      </Card>
      )}

      {totalPosts_ !== null && (
      <Card style={styles.myCard}>
        <CardContent style={styles.myCardContent}>
          <Typography style={styles.typography1}>
            POSTS
          </Typography>
          <Typography variant="h3" style={styles.typography2}>
            {totalPosts_}
          </Typography>
        </CardContent>
      </Card>
      )}

      {totalComments_ !== null && (
      <Card style={styles.myCard}>
        <CardContent style={styles.myCardContent}>
          <Typography style={styles.typography1}>
            COMMENTS
          </Typography>
          <Typography variant="h3" style={styles.typography2}>
            {totalComments_}
          </Typography>
        </CardContent>
      </Card>
      )}

      {totalTODOS_ !== null && (
      <Card style={styles.myCard}>
        <CardContent style={styles.myCardContent}>
          <Typography style={styles.typography1}>
            TODOS
          </Typography>
          <Typography variant="h3" style={styles.typography2}>
            {totalTODOS_}
          </Typography>
        </CardContent>
      </Card>
      )} 

      <br/><br/>
    </>
  );
}


export default ForDashboard;
