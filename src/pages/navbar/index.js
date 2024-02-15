import React, { useState } from 'react';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { styles } from '../../styles/navbar.js';



const Index = () => {
  const [hovered, setHovered] = useState(null);


  
  return (
    <>
      <Head>
        <title>GROUP 12</title>
      </Head>
      
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolBar}>
          
          <Link href="/" passHref>
            <div style={styles.forIcons}>
              <LooksOneIcon style={styles.iconSize} />
              <LooksTwoIcon style={styles.iconSize} />
            </div>
          </Link>

          <nav>
            <Link href="/dashboard" passHref>
              <Typography variant="button"
                style={{ ...styles.typography, fontWeight: hovered === 'dashboard' ? 'bold' : '500',
                textDecoration: hovered === 'dashboard' ? 'underline' : 'none'}}
                onMouseEnter={() => setHovered('dashboard')}
                onMouseLeave={() => setHovered(null)}
              >
                Dashboard
              </Typography>
            </Link>

            <Link href="/users" passHref>
              <Typography variant="button"
                style={{...styles.typography, fontWeight: hovered === 'users' ? 'bold' : '500',
                textDecoration: hovered === 'users' ? 'underline' : 'none'}}
                onMouseEnter={() => setHovered('users')}
                onMouseLeave={() => setHovered(null)}
              >
                Users
              </Typography>
            </Link>

            <Link href="/posts" passHref>
            <Typography variant="button"
                style={{ ...styles.typography, fontWeight: hovered === 'posts' ? 'bold' : '500',
                textDecoration: hovered === 'posts' ? 'underline' : 'none'}}
                onMouseEnter={() => setHovered('posts')}
                onMouseLeave={() => setHovered(null)}
              >
                Posts
              </Typography>
            </Link>
          </nav>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
