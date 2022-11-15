import './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

function App(){
  return(
    
    <div className='App'>
      <Stack direction='row' spacing={5} paddingTop={10} paddingLeft={75}>
        <Button variant='text'>Click me</Button>
        <Button variant='contained'>Submit</Button>
        <Button varian='outline'>Sign In</Button>
        <Button disabled>DISABLED</Button>
        <Button variant='outlined' startIcon={<DeleteIcon />}>
          Delete</Button>
        <Button variant='outlined' startIcon={<SendIcon />}>
          Send</Button>
      </Stack>
   
  </div>
  )
  
}

export default App 