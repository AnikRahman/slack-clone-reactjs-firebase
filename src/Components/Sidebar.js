import React from 'react'
import styled from 'styled-components';
import { sidebarItems } from '../data';
import db from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';


const Container=styled.div`
background: #350d36;
color: white;

`

const WorkSpace=styled.div`
 color: white;
 height: 64px;
 display: flex;
 align-items: center;
 padding-left: 19px;
 justify-content: space-between;
 border-bottom: 1px solid  #532753;
`
const Name=styled.div`

`
const NewMessage=styled.div`
width: 36px;
height: 36px;
background: white;
color: #3F0E40;
fill:  #3F0E40 ;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;
:hover{
    background: #350d36;
  }
`
const MainChannels=styled.div`
 padding-top: 20px;
`
const MainChannelItem=styled.div`
 color: gray;

 height: 28px;
 align-items: center;
 padding-left: 19px;
 cursor: pointer;
 :hover{
    background: #350d36;
  }
`
const ChannelContainer=styled.div`
 color: gray;
 margin-top: 10px;
`
const NewChannelContainer=styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 28px;
 padding-left: 19px;
 padding-right: 15px;
`
const ChannelList=styled.div`
 
`
const Channel=styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover{
    background: #350d36;
  }
`

function Sidebar() {
  const [channels] = useCollection(db.collection('rooms'))
  return (
   <Container>
    <WorkSpace>
        <Name>
           ANik
        </Name>
        <NewMessage>
            M
        </NewMessage>
    </WorkSpace>
    <MainChannels>
        {
            sidebarItems.map(item => (
                <MainChannelItem>

         {item.text}
          
         
           </MainChannelItem>
            ))
            
            }
        
        
        
    </MainChannels>
    <ChannelContainer>
        <NewChannelContainer>
            <div>
                Channels
            </div>
            <div>
                Add channels
            </div>
  
        <ChannelList>
         
         {channels?.docs.map((doc) => (
          <Channel key={doc.id} id={doc.id} title={doc.data().name} />
        ))}

                 
          
         
        </ChannelList>
        </NewChannelContainer>
    </ChannelContainer>

   </Container>
  )
}

export default Sidebar