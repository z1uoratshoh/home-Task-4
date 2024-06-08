import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser , checkCard , sarchCard , allSelects , activeSelects , inactiveSelects} from '../../reducer/cardSlice/cardSlice';
import AddDialog from '../../components/addDialog';


const Action = () => {

    const data = useSelector((state) => state.card.data)
    const sarch = useSelector((state) => state.card.sarch)
    const dispatch = useDispatch()
  return (
    <div>

        <div>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 355 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={sarch}
        onChange={(event) => dispatch(sarchCard(event.target.value))}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
        </div>

        <div className='f_l w-[95%] m-auto my-[5%]'>
        <Button onClick={() => dispatch(allSelects())} variant="contained">All</Button>
        <Button onClick={() => dispatch(activeSelects())} variant="outlined">Active</Button>
        <Button onClick={() => dispatch(inactiveSelects())} variant="outlined">Inactive</Button>
        </div>

        <AddDialog/>

    <div className='w-[95%] m-auto mt-[5%] flex-wrap gap-[20px] f_l'>
      {data.filter((el) =>{
        if(el.title.toLowerCase().trim().includes(sarch.toLowerCase().trim()))
        return el
      }).map((elem,id) =>{
        return (
            <div key={id} className='w-[150px]'>
                <img src={elem.img} alt="" />
                <h1 className='text-[15px]'>{elem.title}</h1>
                <h1 className='text-[10px]'>{elem.desc}</h1>
                <h1 className={` text-[${elem.status == "active" ? "green" : "red"}]`}>{elem.status}</h1>
                <div className='f_l'>
                <Button  onClick={() => dispatch(deleteUser(elem.id))} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <input type="checkbox"  checked={elem.status == "active" ? true :false} onChange={() => dispatch(checkCard(elem.id))}/>
                </div>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Action
