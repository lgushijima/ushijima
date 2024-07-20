import {useEffect} from 'react';

export const SectionExperience = () => {
    useEffect(() => {}, []);

    const experience = [
        {
            id: 0,
            role: 'Full-Stack Developer',
            start: 'Sep 2019',
            end: 'Current',
            name: 'Blockcerts, Victoria-BC, Canada',
            desc: [
                "Spearheaded the development of a new distributed wallet application using Electron.js and Ethers.js, enhancing users' ability to manage wallets, transactions, and balances seamlessly.",
                'Revamped the internal messaging feature of the web platform to streamline team communication and boost productivity.',
                'Collaborated effectively with back-end developers and web designers to elevate usability, troubleshoot issues, and deliver high-quality solutions.',
            ],
        },
        {
            id: 1,
            role: 'Full-Stack Developer',
            start: 'Mar 2019',
            end: 'Sep 2019',
            name: 'SEGFY, Curitiba-PR, Brazil',
            desc: [
                'Launched a cutting-edge SAAS web platform for insurance management, leveraging Vue.js for the front end and .NET Core for the API.',
                'Drove continuous improvement of the main system through maintenance and feature enhancements.',
                'Partnered closely with the UI/UX and design teams to craft intuitive interfaces that delivered increased value to clients.',
            ],
        },
        {
            id: 2,
            role: 'Full-Stack Developer',
            start: 'Nov 2015',
            end: 'Mar 2019',
            name: 'RACCO COSMÉTICOS, Curitiba-PR, Brazil',
            desc: [
                'Led the refactoring and upgrade of the main client back-office system, focusing on maintainable, responsive, and cross-browser code.',
                'Oversaw the development and maintenance of ERP satellite systems, including payment gateways, document management, and B2B/B2C web applications.',
            ],
        },
        {
            id: 3,
            role: 'Co-Founder',
            start: 'Jan 2012',
            end: '2024',
            name: 'INNO TECH, Curitiba-PR, Brazil',
            desc: [
                'Innovated tools, UI plugins, and coding patterns to accelerate web development processes.',
                'Developed and maintained an after-sales system for machinery dealers and a comprehensive construction management system using the WPF framework.',
            ],
        },
        {
            id: 4,
            role: 'Full-Stack Developer',
            start: 'Mar 2013',
            end: 'Nov 2015',
            name: 'WFR SISTEMAS, Curitiba-PR, Brazil',
            desc: [
                'Created and maintained tools, UI plugins, and code patterns that streamlined web development workflows.',
                'Developed and enhanced an after-sales system for machinery dealers and a full-featured construction management system based on the WPF framework.',
            ],
        },
        {
            id: 5,
            role: 'Full-Stack Developer',
            start: 'Aug 2009',
            end: 'Dec 2011',
            name: 'RACCO COSMÉTICOS, Curitiba-PR, Brazil',
            desc: [
                'Initiated and led the migration of desktop applications to an online sales platform using ASP.NET MVC.',
                'Developed a document management system (DMS) to optimize document storage, reduce paper use, and expedite business validation processes.',
                'Managed and updated desktop software for international B2B channels.',
            ],
        },
        {
            id: 6,
            role: 'ASP.NET Developer',
            start: 'Aug 2009',
            end: 'Aug 2011',
            name: 'E-Sat, Curitiba-PR, Brazil',
            desc: [
                'Contributed as an outsourced developer for Racco Cosméticos, creating solutions with ASP.NET.',
                'Performed maintenance and updates on VB.NET desktop applications.',
            ],
        },
        {
            id: 7,
            role: 'ASP.NET Developer',
            start: 'Oct 2007',
            end: 'Aug 2008',
            name: 'MEDALHÃO PERSA, Curitiba-PR, Brazil',
            desc: [
                'Provided support and maintenance for a C# ASP.NET e-commerce platform, ensuring its smooth operation and functionality.',
            ],
        },
    ];

    return (
        <section className="section-experience ">
            <div className="container mx-auto py-16">
                <div>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-semibold text-gray-700">
                            My <span className="text-primary">Experience</span>
                        </h2>
                        <p className="w-8/12 mx-auto text-lg font-semibold text-gray-400">
                            Combinations of skills and experiences can be helpful for any developer. Indeed, lota of
                            experience is a <b className="text-gray-900">good sign for solving any problems</b>!
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex gap-32 ">
                    <div className="flex flex-wrap ">
                        {experience.map((item, index) => {
                            return (
                                <div className={index % 2 === 0 ? 'w-2/4 pb-10 pr-6' : 'w-2/4 pb-10 pl-6'}>
                                    <div className="experience-block text-gray-700" key={index}>
                                        <div className="flex justify-between ">
                                            <h3 className="text-xl font-bold">{item.role}</h3>

                                            <div className="">
                                                <span className="font-semibold">{item.start}</span> to{' '}
                                                <span className="font-semibold">{item.end}</span>
                                            </div>
                                        </div>

                                        <h5 className="text-lg pb-2 ">{item.name}</h5>
                                        <ul>
                                            {item.desc.map(desc => {
                                                return (
                                                    <li className="text-justify text-gray-400 list-disc ml-5">
                                                        {desc}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
