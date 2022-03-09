import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Machine.css'
import List from './List';

const Machine = () => {
    const [cash, setcash] = useState('');
    const price=[5000,1000,500]
    const [recieved, setrecieved] = useState([])
    //const result=[]

    const handleInput=(e)=>{
        setcash(e.target.value)
    }

    const handleSubmit=(e,value)=>{
        e.preventDefault();
        setcash('')
        console.log(cash)
        if(cash === ""){
            //console.log("Please enter some amount")
            alert("Please enter some amount")
        }
        else if(cash % price[0] === 0 || cash % price[1] === 0 || cash % price[2] === 0){
             
            if(cash <= 400 || cash >= 20000){
                //console.log("Please enter some valid amount")
                alert("Please enter some valid amount")
            }
            else{
                //console.log("Thanks ! Recieve your cash")
                alert("Thanks ! Recieve your cash") 
            }
        }
        else{
            //console.log("Invalid ! Enter again")
            alert("Invalid ! Enter again")
        }

        setrecieved((list)=>{
            return[...list,cash]
        })
        
        var resultArray=[]
        var total=value;
        price.map((c)=>{
            resultArray.push(Math.floor(total/c));
            total=total % c
        })
        setrecieved({recieved:resultArray})
    }


    

  return (
    <div className='maindiv'>
    <div className='fontStyleone' >
    ATM Machine
    </div>
    <div className='fontStyletwo'>
    <TextField id="outlined-basic" placeholder='Enter Amount' variant="outlined" value={cash} onChange={handleInput} />
    </div>
    <div className='buttondiv'>
    <Button id='contained-button' variant='contained' onClick={(e)=>handleSubmit(e,cash)} >Enter</Button>
    </div>

    <List  result={recieved} />

    {
        // recieved.map((quantity,index)=>{
        //     return(
        //         <div key={index} id={index}>
        //         <h5>5000</h5> -  {quantity}
        //         <h5>1000</h5> -  {quantity}
        //         <h5>500</h5> -   {quantity}
        //         </div>
        //     )
        // })
    }

    {
        // price.map((list,index)=>{
        //     return(
        //         <div key={index} id={index}>
        //         {list} 
        //         </div>
        //     )
        // })
    }
 
    </div>
  )
}

export default Machine