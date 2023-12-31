import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../lisitem/ListItem"
import "./list.scss"
import { useRef, useState } from "react"
export default function List() {
  const[isMoved,setIsMoved]=useState(false);
  const[slideNumber,setSlideNumber]=useState(0);
  const listRef = useRef();
  const handClick= (direction)=>{
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x-50
    if(direction==="left" && slideNumber>0){
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform=`translateX(${230+ distance}px)`
    }
    if(direction==="right" && slideNumber<5){
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform=`translateX(${-230+ distance}px)`
  }
}
  return (
    <div className="list">
    <div className="listTitle">continue to watch</div>
    <div className="wrapper">
      <ArrowBackIosOutlined className="sliderArrow left" 
      onClick={()=>handClick("left")}
      />
      <div className="container" ref={listRef}>
        <ListItem index={0}/>
        <ListItem index={1}/>
        <ListItem index={2}/>
        <ListItem index={3}/>
        <ListItem index={4}/>
        <ListItem index={5}/>
        <ListItem index={6}/>
        <ListItem index={7}/>
        <ListItem index={8}/>
        <ListItem index={9}/>
      
      </div>
      <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handClick("right")}/>
    </div>
    </div> 
  );
};

