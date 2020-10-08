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

    const rect = revealsRef.current[0].getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left)

    const rect2 = revealsRef.current[10].getBoundingClientRect();
    console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)


    let tl = gsap.timeline(); 

    tl.to(revealsRef.current[0], 0.9, {y: 100,delay: 0.5})
    .to(revealsRef.current[10], 0.9, {y: 100,delay: 0.5})

    .to(revealsRef.current[0], 0.9, {x:  (rect2.right-rect.right),delay: 0.5})
    .to(revealsRef.current[10], 0.9, {x: -(rect2.right-rect.right) ,delay: 0.5})
    
    .to(revealsRef.current[0], 0.9, {y: -(rect2.bottom-rect2.top+ revealsRef.current[10]),delay: 0.5})
    .to(revealsRef.current[10], 0.9, {y: -(rect.bottom-rect.top +revealsRef.current[0]),delay: 0.5});


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
