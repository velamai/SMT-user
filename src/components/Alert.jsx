import { LuAlertTriangle } from "react-icons/lu";
const Alert = () => {
  return (  
    <div className="flex bg-red-300 py-2 items-center pl-24">
        <LuAlertTriangle  className="text-xl"/>
        <p className="ml-3">Still need to fill? An expert can help or do taxes for you with 100% accuracy. <span className="underline">Get Started</span> </p>
    </div>
  )
}

export default Alert