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


  const myVals = randomListOfNums(5)

    const [values, setValues] = useState(myVals)

    const [mobileValues, setMobileValues] = useState(randomListOfNums(5))

    const revealsRef = React.useRef([]);

    let newArrayState =  revealsRef.current = []

    const [revealsRefs,setRevealsRefs] = useState(newArrayState);


    const[trigger,setTrigger] = useState(false);

     console.log(values,"values")


    // revealsRefs = [];



    const revealsRefMobile= React.useRef([]);
    revealsRefMobile.current = [];





    const useEffect=(()=>
    {


    },[]);



      
const  bubbleSort = async () =>
{


// const masterTimeLine = gsap.timeline()

let iterator= 1;
var swapped = true;

  	while (swapped){

    swapped = false;


		for(var i=0 ; i<revealsRefs.length-1; i++){

      let num1 = Number(revealsRefs[i].innerText);

      let num2 = Number(revealsRefs[i+1].innerText);


			if( num1 > num2){

        await iterationanimation(i,i+1,iterator);

        var temp2 = revealsRefs[i];

        revealsRefs[i] = revealsRefs[i+1]

        revealsRefs[i+1] = temp2

        swapped = true;

        iterator++;

      }else
      {
         await iterationanimationNoSwap(i,i+1);
         iterator = 1;
      }
 
      

    }

    iterator = 1;


  }

  // onAnimateFloopfy();


}


const iterationanimationNoSwap= (current,next)=>{



        const rect = newArrayState[current].getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left)

        const rect2 = newArrayState[next].getBoundingClientRect();
        console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)

        let tl = gsap.timeline({autoRemoveChildren: true}); 

         tl.to(newArrayState[current], {backgroundColor:"blue"})
        .to(newArrayState[next], .5, {backgroundColor:"blue"})
        
        .to(newArrayState[current], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
        .to(newArrayState[next], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})

        .to(newArrayState[current], 0.1, {y: -(rect2.bottom-rect2.top+ newArrayState[next]),delay: 0.5,backgroundColor:"cadetblue"})
        .to(newArrayState[next], 0.1, {y: -(rect.bottom-rect.top +newArrayState[current]),delay: 0.5,backgroundColor:"cadetblue"})

        return tl;


        
}

let myObj = {}


const iterationanimation = (current,next,iterator)=>{

  console.log(myObj,"myObj")

    if( myObj[current] || myObj[next])
    {
      console.log("hittingartatertert")

      if(myObj[next] === true)
      {
        console.log("hittingt firs if")

        const rect = revealsRefs[current].getBoundingClientRect();
        const rect2 = revealsRefs[next].getBoundingClientRect();
  
        let tl2 = gsap.timeline({autoRemoveChildren: true}); 
  
        tl2.to(revealsRefs[current], {backgroundColor:"blue"})
        .to(revealsRefs[next], .5, {backgroundColor:"blue"})
        
        .to(revealsRefs[current], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
        .to(revealsRefs[next], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
  
        .to(revealsRefs[current], 0.1, {x:  (rect2.right-rect.right)*iterator,delay: 0.5},"-=.5")
        .to(revealsRefs[next], 0.1, {x: -(rect2.right-rect.right)*iterator*2,delay: 0.5},"-=.5")
        
        .to(revealsRefs[current], 0.1, {y: -(rect2.bottom-rect2.top+ revealsRefs[next]),delay: 0.5,backgroundColor:"cadetblue"})
        .to(revealsRefs[next], 0.1, {y: -(rect.bottom-rect.top +revealsRefs[current]),delay: 0.5,backgroundColor:"cadetblue"})
  
        return tl2;
  
      
      
      }
      
      else if(myObj[current] === true && myObj[next] == false)
      {

        console.log("hitting else if")

        const rect = revealsRefs[current].getBoundingClientRect();
        const rect2 = revealsRefs[next].getBoundingClientRect();
  
        let tl2 = gsap.timeline({autoRemoveChildren: true}); 
  
        tl2.to(revealsRefs[current], {backgroundColor:"blue"})
        .to(revealsRefs[next], .5, {backgroundColor:"blue"})
        
        .to(revealsRefs[current], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
        .to(revealsRefs[next], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
  
        .to(revealsRefs[current], 0.1, {x:  (rect2.right-rect.right)*iterator,delay: 0.5},"-=.5")
        .to(revealsRefs[next], 0.1, {x: -(rect2.right-rect.right)*iterator,delay: 0.5},"-=.5")
        
        .to(revealsRefs[current], 0.1, {y: -(rect2.bottom-rect2.top+ revealsRefs[next]),delay: 0.5,backgroundColor:"cadetblue"})
        .to(revealsRefs[next], 0.1, {y: -(rect.bottom-rect.top +revealsRefs[current]),delay: 0.5,backgroundColor:"cadetblue"})
  
  
        return tl2;
  

      }
      
      else{
        const rect = revealsRefs[current].getBoundingClientRect();
        const rect2 = revealsRefs[next].getBoundingClientRect();
  
        let tl2 = gsap.timeline({autoRemoveChildren: true}); 
  
        tl2.to(revealsRefs[current], {backgroundColor:"blue"})
        .to(revealsRefs[next], .5, {backgroundColor:"blue"})
        
        .to(revealsRefs[current], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
        .to(revealsRefs[next], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
  
        .to(revealsRefs[current], 0.1, {x:  (rect2.right-rect.right)*iterator,delay: 0.5},"-=.5")
        .to(revealsRefs[next], 0.1, {x: -(rect2.right-rect.right),delay: 0.5},"-=.5")
        
        .to(revealsRefs[current], 0.1, {y: -(rect2.bottom-rect2.top+ revealsRefs[next]),delay: 0.5,backgroundColor:"cadetblue"})
        .to(revealsRefs[next], 0.1, {y: -(rect.bottom-rect.top +revealsRefs[current]),delay: 0.5,backgroundColor:"cadetblue"})
  
  
        return tl2;
  

      }


      myObj[current] = false
      myObj[next] = false
      

    }else
    {

      console.log("hitting")
    myObj[current] = true
    myObj[next] = true



    const rect = revealsRefs[current].getBoundingClientRect();
      const rect2 = revealsRefs[next].getBoundingClientRect();

      let tl2 = gsap.timeline({autoRemoveChildren: true}); 

      tl2.to(revealsRefs[current], {backgroundColor:"blue"})
      .to(revealsRefs[next], .5, {backgroundColor:"blue"})
      
      .to(revealsRefs[current], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})
      .to(revealsRefs[next], 0.1, {backgroundColor:"blue",y: 400,delay: 0.5})

      .to(revealsRefs[current], 0.1, {x:  (rect2.right-rect.right)*iterator,delay: 0.5},"-=.5")
      .to(revealsRefs[next], 0.1, {x: -(rect2.right-rect.right),delay: 0.5},"-=.5")
      
      .to(revealsRefs[current], 0.1, {y: -(rect2.bottom-rect2.top+ revealsRefs[next]),delay: 0.5,backgroundColor:"cadetblue"})
      .to(revealsRefs[next], 0.1, {y: -(rect.bottom-rect.top +revealsRefs[current]),delay: 0.5,backgroundColor:"cadetblue"})



      return tl2;



    }

      

}



const initialize  = ()=>{

bubbleSort();

}


const addToRefs = (el) =>
{

    if(el && !newArrayState.includes(el))
    {
      newArrayState.push(el);
    }

}

const addToRefsMobile = (el) =>
{

    if(el && !revealsRefMobile.current.includes(el))
    {
        revealsRefMobile.current.push(el);
    }
}


// const onAnimate1 = () => {


//         const rect = revealsRefs.current[0].getBoundingClientRect();
//         console.log(rect.top, rect.right, rect.bottom, rect.left)

//         const rect2 = revealsRefs.current[10].getBoundingClientRect();
//         console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)

//         let tl = gsap.timeline(); 

//         let another = gsap.timeline();

//         tl.to(revealsRefs.current[0], {backgroundColor:"blue"})
//         .to(revealsRefs.current[10], 1, {backgroundColor:"blue"})
        
//         .to(revealsRefs.current[0], 0.9, {backgroundColor:"blue",y: 400,delay: 0.5})
//         .to(revealsRefs.current[10], 0.9, {backgroundColor:"blue",y: 400,delay: 0.5})
    
//         .to(revealsRefs.current[0], 0.9, {x:  (rect2.right-rect.right),delay: 0.5},"-=.5")
//         .to(revealsRefs.current[10], 0.9, {x: -(rect2.right-rect.right) ,delay: 0.5},"-=.5")
        
//         .to(revealsRefs.current[0], 0.9, {y: -(rect2.bottom-rect2.top+ revealsRefs.current[10]),delay: 0.5,backgroundColor:"cadetblue"})
//         .to(revealsRefs.current[10], 0.9, {y: -(rect.bottom-rect.top +revealsRefs.current[0]),delay: 0.5,backgroundColor:"cadetblue"});
    
        



// }



// const onAnimate2 = () => {



//     const rect = revealsRefMobile.current[0].getBoundingClientRect();
//     console.log(rect.top, rect.right, rect.bottom, rect.left)

//     const rect2 = revealsRefMobile.current[10].getBoundingClientRect();
//     console.log(rect2.top, rect2.right, rect2.bottom, rect2.left)


//     let tl = gsap.timeline(); 


//     tl.to(revealsRefs[0], {backgroundColor:"blue"})
//     .to(revealsRefs[10], 1, {backgroundColor:"blue"})
    
    
//     .to(revealsRefMobile.current[0], 0.9, {x: 200,delay: 0.5,backgroundColor:"blue"})
//     .to(revealsRefMobile.current[10], 0.9, {x: 200,delay: 0.5,backgroundColor:"blue"})

//     .to(revealsRefMobile.current[0],  0.9,{y:  (rect2.bottom-rect.bottom),delay: 0.5},"-=.5")
//     .to(revealsRefMobile.current[10],  0.9,{y: -(rect2.bottom-rect.bottom) ,delay: 0.5},"-=.5")
    
//     .to(revealsRefMobile.current[0], 0.9, {x: -(rect2.bottom-rect2.top+ revealsRefMobile.current[10]),delay: 0.5,backgroundColor:"cadetblue"})
//     .to(revealsRefMobile.current[10], 0.9, {x: -(rect.bottom-rect.top +revealsRefs[0]),delay: 0.5,backgroundColor:"cadetblue"});





// }



// const onAnimateFloopfy = () => {


//   let tl = gsap.timeline(); 


//   for(let i = 0 ;i<revealsRefs.length;i++)
//   {
      
//       tl.to(revealsRefs[i], 0.1, {y: 100,duration:2})
//       .to(revealsRefs[i], 0.1, {y: -10,duration:2});
//   }

  
//   for(let i = 0 ;i<revealsRefs.length;i++)
//   {
      
//       tl.to(revealsRefs[i], 0.01, {y: 100,duration:2})
//       .to(revealsRefs[i], 0.01, {y: -10,duration:2});

//   }

// }







  return (
    <div className="insertion" >

    <p >Insertion Sort</p>

    <button onClick={initialize}>Run1</button>

<button >Run2</button>

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
