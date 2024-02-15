import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation from "../navbar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography} from "@mui/material";
import { styles } from '../../styles/todos.js';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.error("Error fetching todos:", error));
    }
  }, [userId]);




  
  return (
    <>
      <Navigation />

      <Box style={styles.forBox}>
        <Typography style={styles.typography}>
          TODOS
        </Typography>

      <TableContainer component={Paper} style={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableHeader}>Title</TableCell>
              <TableCell style={styles.tableHeader}>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell style={styles.tableRows}>{todo.title}</TableCell>
                <TableCell style={styles.tableRows}>{todo.completed ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </Box>
    </>
  );
};

export default Todos;
