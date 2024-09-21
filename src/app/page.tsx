import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/Page";
import Image from "next/image";
export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <div className="h-[250px]  flex justify-between items-center bg-blue-900"> 
        <div className="h-[200px] w-[600px] text-emerald-300 font-bold text-[20px] pl-[10px] nl-[20px]">
            Hi, <br />
            I am  <div className="box">Shumaila Aijaz</div> <br />
            <h1 className="h1">I want to Become a Cloud Native Applied Generative AI Engineer</h1>
            <h3>Quater 2 Student</h3>
        </div>
      
        <div className="relative h-[200px] w-[150px] rounded-full overflow-hidden py-5 max-sm:7 items-center mr-9 ">
            
            <img className="rouded-[50%] " src="https://static.vecteezy.com/system/resources/previews/022/587/498/non_2x/technology-ai-artificial-intelligence-ship-in-brain-hi-tech-smart-brain-free-png.png" alt="profile pic" />
        </div>  

      </div>
      <Footer/>
    </div>
   
    );
}