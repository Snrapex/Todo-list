export default function Example (){
    return (
        <>
        <img
            src="/images/image.jpg"
        />
            
        <div className=" bg-gray-300 mr-10 mb-20 h-screen w-screen  ">
        <div className="flex justify-between">
        <h1 className="justify-start mt-4 ml-4  text-black text-2xl font-serif font-bold">ANSELEM.</h1>  
         <button className="bg-indigo-500 mr-40 ml-20 mt-4 px-4 rounded-lg text-white">Articles</button>
         <button className="bg-green-500 mr-40 mt-4 px-3 text-white rounded-md  ">Options</button>
         <button className="bg-red-700 mr-0  mt-4 px-3 text-white rounded-md">Contact</button>
         <h2 className=" ml-40 mt-4 cursor-pointer order-last mr-4 ">FAQ</h2>
        </div> 
         <p className=" text-2xl mt-20 text-orange-500 text-center font-bold"> This is the official web page of Anselem Ug. </p>
         <p className="inline-block text-lg mt-5 ml-4"> I offer a wide range of services which includes: </p>
         <p className=" inline-block ml-2 text-blue-500 cursor-pointer">Cryptocurrency</p>
         <p className="inline text-red-500 mr-8 ml-4 cursor-pointer">Health conselling</p>
         <p className=" inline text-green-500 cursor-pointer">Football dicussions</p>
         
         <div className="flex ml-4">
             <ul >fa</ul>
             <ul className="ml-4">companu</ul>
             <ul className="ml-4">SFS</ul>
          </div>
              
         </div>
        </>
    );
}


function sum (a:number,b:number){
    return a+b;
}


const add = (a:number, b:number)=>{
 return a+b
}