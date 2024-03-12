import React, {useEffect, useState} from 'react'
import {Container, From, Wrapper, TextDiv, InputData} from "./UpdateuserStyle"
import Axios from "axios"
import Swal from 'sweetalert2'


const UpdateWallet = ({Display}) => {
  const [data, setData] = useState()
  const [last, setLast] = useState("")
  console.log(setLast);

    const url = `https://badboibackend.onrender.com/api/alluserdata`
  
    useEffect(()=>{
      Axios.get(url)
      .then(res => setData(res.data.data))
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  
  /* onst mydata = {...data} */
  console.log("this is the datas i what to use",data)
    useEffect(()=>{
        /* eslint-disable-next-line no-unused-expressions */
        return Display
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
      },[])
  
      const upddatebtn = async(id, e) => {

       
        const { value: totalDeposit } = await Swal.fire(
          {
          title: e.target.title,
          input: 'text',
          inputLabel: e.target.title,
          inputValue: last,
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        } 
        )
        
        if (totalDeposit) {
          Swal.fire(`Your LastDeposit is ${totalDeposit}`)
          
          let UpdateValues = e.target.title
          let finalData = {UpdateValues, totalDeposit}
          const sentApi = Object.values(finalData)
          const myObject = {};
          myObject[sentApi[0]] = sentApi[1];
          console.log(myObject)
          
          
         const lastDepositupdate = `https://badboibackend.onrender.com/api/${UpdateValues}/${id}`
         Axios.patch(lastDepositupdate, myObject)
          .then(res => console.log(res))
           console.log("this is the id", id) 
          console.log(totalDeposit) 
        }
        // window.location.reload();
      }

      const deleteprofile = (id) => {
        const url = `https://badboibackend.onrender.com/api/userdata/${id}`
        Axios.delete(url)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch((Err)=>{
          console.log(Err)
        })
      }

  return (
    <Container>
        <h1>
          Update User Data: 
        </h1>


        {data? <From>
         {
          data?.map((props)=>(
            <Wrapper>
              <div style={{width:"100%", display:'flex', justifyContent:'flex-end',}}>
                <button style={{background:'red', color:'white', border:'none'}} onClick={()=>deleteprofile(props._id)}>Delete</button></div>
            <TextDiv>
            <label>Name:</label>
             <p>{props.fullName}</p>
            </TextDiv>

          <TextDiv>
          <label>Email:</label>
            <p> {props.email}</p>
          </TextDiv>
          <TextDiv>
          <label>Phone Number:</label>
            <p> {props.phoneNumber}</p>
          </TextDiv>
         
          {/* <InputData>
            <label>last deposit: </label>
            <input type="text" value={last} onChange ={(e)=>{setLast(e.target.value)}}/>
              <button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</button> 
              <span>${props.lastDeposit}</span>
          </InputData> */}

          <InputData>
            <label>Last Deposit: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</button>
            <span>${props.lastDeposit}</span>
          </InputData>

          <InputData>
            <label>Last Withdrawal: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"lastWithdrawal"}>update</button>
            <span>${props.lastWithdrawal}</span>
          </InputData>

          <InputData>
            <label>Deposit Wallet Balance: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"depositWalletbalance"}>update</button>
            <span>${props.depositWalletbalance}</span>
          </InputData>

          <InputData>
            <label>Total Earned: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"interestWalletbalance"}>update</button>
            <span>${props.interestWalletbalance}</span>
          </InputData>

          {/* <InputData>
            <label>Current Balance: </label>
            <input/>
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"currentBalance"}>update</button>
            <span>${props.currentBalance}</span>
          </InputData> */}

          <InputData>
            <label>Total Deposit: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button>
            <span>${props.totalDeposit}</span>
          </InputData>

          <InputData>
            <label>Total Invest: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalInvest"}>update</button>
            <span>${props.totalInvest}</span>
          </InputData>

          <InputData>
            <label>Total Withdraw: </label>
           {/*  <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalWithdraw"}>update</button>
            <span>${props.totalWithdraw}</span>
          </InputData>

          <InputData>
            <label>Current balance: </label>
            {/* <input/> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"currentBalance"}>Update</button>
            <span>${props.currentBalance}</span>
          </InputData>

          <InputData>
            <label>Referral earnings: </label>
            {/* <input /> */}
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"ref"}>Update</button>
            <span>${props.ref}</span>
          </InputData>

          {/* <InputData>
              <label>Total earned: </label>
              <input />
              <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalEarned"}>Update</button>
              <span>${props.totalEarned}</span>
          </InputData> */}

          </Wrapper>
          ))
         }
        </From> : <span>Loading data....</span>}
    </Container>
  )
}

export default UpdateWallet;
