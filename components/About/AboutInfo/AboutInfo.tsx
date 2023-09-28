import React from 'react';

const AboutInfo: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] h-[562px] px-[84px] py-16 flex-col justify-start items-center gap-8 inline-flex">
                <div className="self-stretch text-center text-white text-2xl font-semibold font-['Montserrat']">Our Vision</div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">IEEE SRM is committed to empowering students by offering valuable opportunities to acquire and apply new skills and cutting-edge technologies through interactive workshops and webinars. They provide a diverse range of experiences across multiple fields, including application and website development, robotics and automation, electronics, engineering, media, corporate engagement, content writing, and research.<br /><br />Within IEEE SRM, students have the chance to publish their research papers, build a robust professional profile, connect with accomplished IEEE alumni, and undertake projects aimed at advancing the betterment of humanity.</div>
                <div className="self-stretch text-center text-white text-2xl font-semibold font-['Montserrat']">Where are we based?</div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">SRM Institute of Science and Technology is a prestigious higher education institution situated in Kattankulathur, Chengalpattu, Tamil Nadu, India, in close proximity to Chennai. The institution achieved the status of a deemed university in the academic year 2003-2004 and was subsequently rebranded as SRM Institute of Science and Technology. In 2006, it transitioned to SRM University after receiving authorization from the University Grants Commission (UGC) for deemed universities to adopt the title of 'Universities.' However, in response to a UGC request in 2017, the institution reverted to its former name, SRM Institute of Science and Technology.<br /><br />The campus occupies a sprawling 250-acre area, strategically positioned approximately 35 kilometers from Chennai, along the Grand Southern Trunk Road (GST Road), also known as NH-32.</div>
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden w-full px-4">
                <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Our Vision</div>
                <div className="text-center text-white text-base font-normal font-['Montserrat'] tracking-tight mb-8">IEEE SRM is committed to empowering students by offering valuable opportunities to acquire and apply new skills and cutting-edge technologies through interactive workshops and webinars. They provide a diverse range of experiences across multiple fields, including application and website development, robotics and automation, electronics, engineering, media, corporate engagement, content writing, and research.<br /><br />Within IEEE SRM, students have the chance to publish their research papers, build a robust professional profile, connect with accomplished IEEE alumni, and undertake projects aimed at advancing the betterment of humanity.</div>
                <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Where are we based?</div>
                <div className="text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">SRM Institute of Science and Technology is a prestigious higher education institution situated in Kattankulathur, Chengalpattu, Tamil Nadu, India, in close proximity to Chennai. The institution achieved the status of a deemed university in the academic year 2003-2004 and was subsequently rebranded as SRM Institute of Science and Technology. In 2006, it transitioned to SRM University after receiving authorization from the University Grants Commission (UGC) for deemed universities to adopt the title of 'Universities.' However, in response to a UGC request in 2017, the institution reverted to its former name, SRM Institute of Science and Technology.<br /><br />The campus occupies a sprawling 250-acre area, strategically positioned approximately 35 kilometers from Chennai, along the Grand Southern Trunk Road (GST Road), also known as NH-32.</div>
            </div>
        </section>
    );
};

export default AboutInfo;
