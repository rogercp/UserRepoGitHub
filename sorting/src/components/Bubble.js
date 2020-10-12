import React,{useEffect,useRef,useState}  from 'react';
import {gsap} from 'gsap';
import '../App.css';


const randomListOfNums =(n)=>
{
    const nums = [];

    for( let i =0; i<n; i++)
    {
        let randomNum = Math.floor(Math.random() * 25) + 1;

        nums.push(randomNum);

    }

    return nums;   

}

function Bubble() {

  const [values, setValues] = useState(randomListOfNums(20))
    const [mobileValues, setMobileValues] = useState(randomListOfNums(20))


    const revealsRef = React.useRef([]);
    revealsRef.current = [];

    const revealsRefMobile= React.useRef([]);
    revealsRefMobile.current = [];



    const useEffect=(()=>
    {

    


    },[]);





  
      
const  bubbleSort = (arr) =>
{

let masterTimeLine = gsap.timeline()

  var swapped = true;

	while (swapped){

    swapped = false;
    
		for(var i=0 ; i<arr.length-1; i++){

     
      masterTimeLine.add(iterationanimation(i))


			// if(arr[i]>arr[i+1]){

			// 	var temp = arr[i];
			// 	arr[i] = arr[i+1];
			// 	arr[i+1] = temp;
      //   swapped = true;
        
      // }
      
		}

	}


}


const iterationanimation=(current)=>{

  console.log("hitting red" );

  // const rect= revealsRef.current[current].getBoundingClientRect();

  return gsap.timeline().to(revealsRef.current[current],1,{backgroundColor:"red", duration:2}).to(revealsRef.current[current],{backgroundColor:"cadetblue"})

}

// const iterationanimationEnd=(current)=>{

//   console.log("hitting blue" );

//   // const rect= revealsRef.current[current].getBoundingClientRect();

//   return gsap.timeline().to(revealsRef.current[current],{backgroundColor:"cadetblue"})

// }




const initialize  = ()=>{

bubbleSort(values);


}



const addToRefs = (el) =>
{

    if(el && !revealsRef.current.includes(el))
    {
        revealsRef.current.push(el);
    }

}

const addToRefsMobile = (el) =>
{

    if(el && !revealsRefMobile.current.includes(el))
    {
        revealsRefMobile.current.push(el);
    }
}


const onAnimate1 = () => {


        const rect = revealsRef.current[0].getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left)

        const rect2 = revealsRef.current[10].getBoundingClientRect();
        console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)

        let tl = gsap.timeline(); 

        let another = gsap.timeline();

        tl.to(revealsRef.current[0], {backgroundColor:"blue"})
        .to(revealsRef.current[10], 1, {backgroundColor:"blue"})
        
        .to(revealsRef.current[0], 0.9, {backgroundColor:"blue",y: 400,delay: 0.5})
        .to(revealsRef.current[10], 0.9, {backgroundColor:"blue",y: 400,delay: 0.5})
    
        .to(revealsRef.current[0], 0.9, {x:  (rect2.right-rect.right),delay: 0.5},"-=.5")
        .to(revealsRef.current[10], 0.9, {x: -(rect2.right-rect.right) ,delay: 0.5},"-=.5")
        
        .to(revealsRef.current[0], 0.9, {y: -(rect2.bottom-rect2.top+ revealsRef.current[10]),delay: 0.5,backgroundColor:"cadetblue"})
        .to(revealsRef.current[10], 0.9, {y: -(rect.bottom-rect.top +revealsRef.current[0]),delay: 0.5,backgroundColor:"cadetblue"});
    
        



}



const onAnimate2 = () => {



    const rect = revealsRefMobile.current[0].getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left)

    const rect2 = revealsRefMobile.current[10].getBoundingClientRect();
    console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)


    let tl = gsap.timeline(); 


    tl.to(revealsRef.current[0], {backgroundColor:"blue"})
    .to(revealsRef.current[10], 1, {backgroundColor:"blue"})
    
    
    .to(revealsRefMobile.current[0], 0.9, {x: 200,delay: 0.5,backgroundColor:"blue"})
    .to(revealsRefMobile.current[10], 0.9, {x: 200,delay: 0.5,backgroundColor:"blue"})

    .to(revealsRefMobile.current[0],  0.9,{y:  (rect2.bottom-rect.bottom),delay: 0.5},"-=.5")
    .to(revealsRefMobile.current[10],  0.9,{y: -(rect2.bottom-rect.bottom) ,delay: 0.5},"-=.5")
    
    .to(revealsRefMobile.current[0], 0.9, {x: -(rect2.bottom-rect2.top+ revealsRefMobile.current[10]),delay: 0.5,backgroundColor:"cadetblue"})
    .to(revealsRefMobile.current[10], 0.9, {x: -(rect.bottom-rect.top +revealsRef.current[0]),delay: 0.5,backgroundColor:"cadetblue"});





}



const onAnimateFloopfy = () => {


  let tl = gsap.timeline(); 


  for(let i = 0 ;i<revealsRef.current.length;i++)
  {
      
      tl.to(revealsRef.current[i], 0.1, {y: 100,duration:2})
      .to(revealsRef.current[i], 0.1, {y: -10,duration:2});
  }

  
  for(let i = 0 ;i<revealsRef.current.length;i++)
  {
      
      tl.to(revealsRef.current[i], 0.01, {y: 100,duration:2})
      .to(revealsRef.current[i], 0.01, {y: -10,duration:2});

  }

}







  return (
    <div className="insertion" >

    <p >Insertion Sort</p>

    <button onClick={initialize}>Run1</button>

<button onClick={onAnimate2}>Run2</button>

 <section className="blocksNumberWeb" style={{display:"flex", flexDirection:"row",width:"1200px"}}>

  {values.map((num,index)=>{

     return (
         <div className="blocksNumber"  key={num} ref={addToRefs}  style={{display:"flex", flexDirection:"column",width:"100%",alignItems:"center",height:"100vh"}}>

         
         <div>

         <p style={{margin:"1px",padding:"1px",color:"white"}} >{num}</p>

         </div>

         <div 
        
         className="block"
         style={{height:`${num*10}px`, backgroundColor:"ivory",margin:"5px",width:"80%"}}
     
         onClick={onAnimateFloopfy}
         >

         </div>
         </div>
     )

  })}

 </section>

 <section className="blocksNumberMobile" style={{display:"flex", flexDirection:"column",width:"100vw",justifyContent:"center",alignItems:"center" }}>

     {values.map((num,index)=>{

     return (
         <div className="blocksNumber"   key={num} ref={addToRefsMobile} style={{display:"flex", flexDirection:"row",width:"100%", alignItems:"center",margin:"0",padding:"0"}}>

         <div >

         <p style={{margin:"2px",padding:"2px",fontSize:"11px",color:"white"}} >{num}</p>

         </div>

         <div 

         className="block"
         style={{width:`${num*6}px`, backgroundColor:"ivory",marginLeft:"5px",padding:"0",height:"10px"}}
         
         >
             
         </div>
         </div>
     )

     })}

</section>

</div>
  );
}

export default Bubble;
