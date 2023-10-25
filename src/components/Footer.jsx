import React from "react";

export default function footer() {

    return(


<div className=" bg-black">

    <div className="container mx-auto  px-[158px] flex justify-between">


        <div className="py-[128px]  ">

            <img src="assests/images/QuickFunds.png"  alt="img"/>
            <p className="font-normal text-lg text-white">
            Our mission is to empower individuals and <br/>
businesses by providing them with the<br/>
financial resources they <br/>
need to achieve their goals.
            </p>
        </div>


        <div  className="py-[128px] ">
            <h2 className="text-22px font-bold text-white border-b-2 border-white">OUR SERVICES</h2>
            <ul>
                <li className="text-white text-lg py-2">Personal loan</li>
                <li className="text-white text-lg py-2">Business loan</li>
                <li className="text-white text-lg py-2">Education loan</li>
                <li className="text-white text-lg py-2">Auto loan</li>
            </ul>
        </div>

        <div  className="py-[128px] ">
            <h2 className="text-22px font-bold text-white border-b-2 border-white">CONTACT US</h2>
            <ul>
                <li className="text-white text-lg py-2">+91 99999 99999</li>
                <li className="text-white text-lg py-2">xyzfh5@gmail.com</li>
                <li className="text-white text-lg py-2">Education loan</li>
                <li className="text-white text-lg py-2">Address line-1 <br/> Address line-2, <br/> city, state-pin code.</li>
            </ul>
        </div>
       



    </div>




</div>

    )
}