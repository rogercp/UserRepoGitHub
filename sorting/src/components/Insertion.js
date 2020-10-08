import React ,{useEffect,useRef,useState} from 'react';
import '../App.css';
import {gsap} from 'gsap';


const randomListOfNums =(n)=>
{
    const nums = [];

    for( let i =0; i<n; i++)
    {
        let randomNum = Math.floor(Math.random() * 30) + 1;

        nums.push(randomNum);

    }

    return nums;   

}


function Insertion() {

    const [values, setValues] = useState(randomListOfNums(20))

    const revealsRef = React.useRef([]);

    revealsRef.current = [];

    const useEffect=(()=>
    {

    


    },[]);


const addToRefs = (el) =>
{

    if(el && !revealsRef.current.includes(el))
    {
        revealsRef.current.push(el);
    }

    console.log(revealsRef.current)
}


const onAnimate = () => {

    let tl = gsap.timeline(); 

    tl.to(revealsRef.current[0], 0.9, {y: 100,delay: 0.5})
    .to(revealsRef.current[6], 0.9, {y: 100,delay: 0.5})


    .to(revealsRef.current[0], 0.9, {x: 400,delay: 0.5})
    .to(revealsRef.current[6], 0.9, {x: -400,delay: 0.5})
    
    .to(revealsRef.current[0], 0.9, {y: -50,delay: 0.5})
    .to(revealsRef.current[6], 0.9, {y: -50,delay: 0.5});


}



   
  return (
    <div className="insertion" >

           <p>insertion</p>

        <section style={{display:"flex", flexDirection:"row",width:"1200px"}}>

         {values.map((num,index)=>{

            return (
                <div 
                key={num}
                ref={addToRefs}
                style={{height:`${num}px`, backgroundColor:"red",margin:"5px",width:"80%"}}
                onClick={onAnimate}
                >
                    
                   <p>{num}</p>

                </div>
            )

         })}

        </section>

    </div>
  );
}

export default Insertion;
