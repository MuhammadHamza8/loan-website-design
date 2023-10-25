import React from "react";

export default function about() {

    return (

        <div className="bg-[#c1edf8]">

            <div className="container mx-auto px-[125px] py-[90px]  ">

                <h1 className="text-[40px] font-bold">About us</h1>


                <div className="flex justify-between ">

                    <div>

                        <img className="py-[34px]" src="assests/images/10.png" alt="img"/>

                        <p className="text-20px font-normal">
                            QuickFunds- Your trusted financial partner for <br />loans. Quick approvals, competitive rates, and <br />personalized solutions to meet your unique <br /> needs.
                            Empowering you to achieve your financial <br /> goals. Apply online today!
                        </p>


                    </div>


                    <div className="bg-white rounded-[21px]">

                        <form >

                            <div className="py-[45px] px-12">

                                <label className="">Your Name</label>
                                <br />
                                <input className=" border-2 border-[#756E6E] rounded-[20px] h-[46px] w-[395px]" type="text" id="name" name="name" />
                            </div>

                            <div className="px-12 py-7">

                                <label className="">Phone number</label>
                                <br />
                                <input className=" border-2 border-[#756E6E] rounded-[20px] h-[46px] w-[395px]" type="text" id="name" name="name" />
                            </div>

                            <div className="px-12 py-7">

                                <label className="">Email address</label>
                                <br />
                                <input className=" border-2 border-[#756E6E] rounded-[20px] h-[46px] w-[395px]" type="text" id="name" name="name" />
                            </div>



                            <div className="px-[47px] text-center">
                                <button className="px-9 py-3 bg-[#2A6877] rounded-[50px] text-white" type="submit">Submit</button>
                            </div>




                        </form>

                    </div>

                </div>



            </div>


        </div>

    )



}