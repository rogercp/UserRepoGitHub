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


const onAnimate1 = () => {

    const rect = revealsRef.current[0].getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left)

    const rect2 = revealsRef.current[10].getBoundingClientRect();
    console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)


    let tl = gsap.timeline(); 


    tl.to(revealsRef.current[0], 0.9, {y: 400,delay: 0.5,backgroundColor:"red"})
    .to(revealsRef.current[10], 0.9, {y: 400,delay: 0.5,backgroundColor:"red"})

    .to(revealsRef.current[0], 0.9, {x:  (rect2.right-rect.right),delay: 0.5})
    .to(revealsRef.current[10], 0.9, {x: -(rect2.right-rect.right) ,delay: 0.5})
    
    .to(revealsRef.current[0], 0.9, {y: -(rect2.bottom-rect2.top+ revealsRef.current[10]),delay: 0.5,backgroundColor:"white"})
    .to(revealsRef.current[10], 0.9, {y: -(rect.bottom-rect.top +revealsRef.current[0]),delay: 0.5,backgroundColor:"white"});






}



const onAnimate = () => {


    let tl = gsap.timeline(); 
  

    for(let i = 0 ;i<revealsRef.current.length;i++)
    {
        
    
        tl.to(revealsRef.current[i], 0.1, {y: 100,backgroundColor:"red",duration:2})
        .to(revealsRef.current[i], 0.1, {y: -10,backgroundColor:"white",duration:2});


    }

    
    for(let i = 0 ;i<revealsRef.current.length;i++)
    {
        
    
        tl.to(revealsRef.current[i], 0.01, {y: 100,backgroundColor:"red",duration:2})
        .to(revealsRef.current[i], 0.01, {y: -10,backgroundColor:"white",duration:2});



    }

}





const onAnimateMobile = () => {


    let tl = gsap.timeline(); 
  

    for(let i = 0 ;i<revealsRef.current.length;i++)
    {
        
    
        tl.to(revealsRef.current[i], 0.1, {x: 100,backgroundColor:"red",duration:2})
        .to(revealsRef.current[i], 0.1, {x: -10,backgroundColor:"white",duration:2});


    }

    
    for(let i = 0 ;i<revealsRef.current.length;i++)
    {
        
    
        tl.to(revealsRef.current[i], 0.01, {x: 100,backgroundColor:"red",duration:2})
        .to(revealsRef.current[i], 0.01, {x: -10,backgroundColor:"white",duration:2});



    }

}



   
  return (
    <div className="insertion" >

           <p>Insertion Sort</p>

    <button onClick={onAnimate1}>Run</button>

        <section className="blocksNumberWeb" style={{display:"flex", flexDirection:"row",width:"1200px"}}>

         {values.map((num,index)=>{

            return (
                <div className="blocksNumber"  style={{display:"flex", flexDirection:"column",width:"100%"}}>
                <p>{num}</p>

                <div 
                key={num}
                ref={addToRefs}
                className="block"
                style={{height:`${num*10}px`, backgroundColor:"ivory",margin:"5px",width:"80%"}}
                onClick={onAnimate}
                >
                    
                  
                </div>
                </div>
            )

         })}

        </section>

        <section className="blocksNumberMobile" style={{display:"flex", flexDirection:"column",width:"80vw",justifyContent:"flex-start" }}>

            {values.map((num,index)=>{

            return (
                <div className="blocksNumber"  style={{display:"flex", flexDirection:"row",width:"100%", alignItems:"center",margin:"0",padding:"0"}}>

                <p>{num}</p>

                <div 
                key={num}
                ref={addToRefs}
                className="block"
                style={{width:`${num*6}px`, backgroundColor:"ivory",marginLeft:"5px",padding:"0",height:"10px"}}
                onClick={onAnimateMobile}
                >
                    
                    
                </div>
                </div>
            )

            })}

</section>

    </div>
  );
}

export default Insertion;
