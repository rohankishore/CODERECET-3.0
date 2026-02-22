import React from "react";

export default function Tagline() {
    return (
        <section className="bg-custom-black w-full pt-16 md:pt-24 pb-8 md:pb-16 overflow-visible">
            <div className="w-full mx-auto px-2 sm:px-4 overflow-visible">
                <div className="flex flex-col w-full font-thomeo text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[100px] xl:text-[125px] leading-[0.85] tracking-tight uppercase break-words overflow-visible">

                    {/* Top Line */}
                    <div className="flex items-baseline w-full">
                        <span className="text-[#fffffa]">REFRESH</span>
                        <span className="text-custom-secondary ml-4">IDEAS</span>
                        <span className="text-[#fffffa]">.</span>
                    </div>

                    {/* Bottom Line */}
                    <div className="flex items-baseline w-full mt-2 lg:mt-4">
                        <span className="text-[#fffffa]">REBOOT</span>
                        <span className="text-custom-secondary ml-4">SOLUTIONS</span>
                        <span className="text-[#fffffa]">.</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
