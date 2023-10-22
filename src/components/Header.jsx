import React from "react";

export default function header() {

    return (
        <div>

            <div className=" container mx-auto  px-[98px] h-[72px]   max-w-[1440px] py-[9px] flex  justify-between">

                <div>

                    <img className="w-[175px] " src="assests/images/QuickFunds.png" alt="logo" />

                </div>

                <ul className="flex justify-center gap-x-12">
                    <li className="text-2xl font-normal border-b-2 border-black ">Home</li>
                    <li className="text-2xl font-normal">Services</li>
                    <li className="text-2xl font-normal">How we  Works ?</li>
                    <li className="text-2xl font-normal">About us</li>
                </ul>

                <div>
                    <button className="w-[126px] h-[48px] py-3 px-5 bg-[#2A6877] rounded-[50px] text-white">Contact Us</button>
                </div>

            </div>
            {/* header end  */}

            <div className="container mx-auto py-32 px-[98px] max-w-[1440px]  flex ">

                <div className="max-w-[612px] h-[385px] ">
                    <h1 className="text-[68px] font-bold py-4">
                        Quick and Easy Loans for Your Financial Needs.
                    </h1>

                    <p className=" text-lg font-normal py-6">
                        Our loan services offer a hassle-free and streamlined borrowing <br />
                        experience, providing you with the funds you need in a timely <br />
                        manner to meet your financial requirements.
                    </p>

                    <button className="px-5 py-3 w-[133px] h-12  border-2 border-black rounded-[50px] "> Get started </button>
                </div>


                <div className="w-[642px] h-[420px]">
                    <img src="assests/images/2.png" alt="img"/>

                </div>



            </div>



        </div>

    )

}

