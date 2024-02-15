import Navbar from './navbar';

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.textContainer}>
        <h1 style={styles.text}>webtech prelim</h1>
      </div>
    </div>
  );
}






















const styles = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh', 
  },
  textContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '9.5%', 
  },
  text: {
    fontSize: '40px', 
    textAlign: 'right',
    fontFamily: 'monospace',
    textDecoration: 'underline',
  },
};

