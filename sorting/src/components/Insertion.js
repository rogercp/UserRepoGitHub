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

    // const headerRef = React.useRef(null);

    const revealsRef = React.useRef([]);

    revealsRef.current = [];

    const useEffect=(()=>
    {

        gsap.from(revealsRef.current,{
                duration:1,
                autoAlpha:0,
                ease:'none',
                delay:1
        });


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


    gsap.to(revealsRef.current,{
        color:"#8c0",duration:2


})
}

   
  return (
    <div className="insertion" >

           <p >insertion</p>

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
