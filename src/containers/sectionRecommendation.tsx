import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel';

import {Quote} from 'lucide-react';
import {useEffect} from 'react';

export const SectionRecommendation = () => {
    useEffect(() => {}, []);

    const recommendation = [
        {
            id: 1,
            name: 'Abdelkader Kiari',
            desc: `Gustavo has consistently demonstrated exceptional productivity and efficiency. He approaches every task with a serious and dedicated mindset, ensuring that everything is completed to the highest standard.\n\nOne of Gustavo's standout qualities is his proactive approach to problem-solving. He is always striving to understand the finer details of a project to plan better and identify potential issues before they arise. This foresight has been invaluable to our team, often preventing problems and ensuring smooth project execution.`,
            role: 'Blockcerts - Smart Contract Developer',
        },
        {
            id: 2,
            name: 'Zekarias Negash Demma',
            desc: `Gustavo's technical abilities are matched by his collaborative spirit and problem-solving mindset. He was always willing to share his knowledge and assist team members, making him an outstanding colleague and a true asset to any team. I highly recommend Gustavo for any role that requires a skilled and innovative Full-stack engineer.`,
            role: 'Senior Software Engineer - Blockcerts',
        },
        {
            id: 3,
            name: 'Willipan Patrick dos Santos',
            desc: 'Gustavo is an excellent professional with great skills in web developer and has very programming logic knowledge. has a great capacity to develop works on team. I consider him an important person in my professional career.',
            role: 'Racco - Project Manager',
        },
        {
            id: 4,
            name: 'Rafael Amarantes',
            desc: 'Professional with excellent technical knowledge, creative and innovative always seeking technological solutions to provide better efficiency agility in the products developed.',
            role: 'Racco - Full-Stack Developer',
        },
        {
            id: 5,
            name: 'Weverton Raimundo',
            desc: 'Excellent professional, very agile and competent. He enjoys learning and strives to master new technologies that emerge. Strongly recommend their work.',
            role: 'WFR Sistemas - Co-Funder/Manager',
        },
    ];

    return (
        <section className="section-recomendation bg-zinc-900 ">
            <div className="container mx-auto py-16">
                <div>
                    <div className="flex justify-center space-y-6">
                        <Quote className="size-12 text-gray-400" strokeWidth={1} />
                    </div>
                </div>

                <div className="">
                    <Carousel>
                        <CarouselContent>
                            {recommendation.map((item, index) => {
                                return (
                                    <CarouselItem key={index}>
                                        <div className="w-3/4 mx-auto my-10">
                                            <div
                                                className="text-lg experience-block text-center leading-relaxed"
                                                key={index}>
                                                <div className="whitespace-pre-line text-white">{item.desc}</div>
                                                <h5 className="text-xl mt-8 leading-4 text-gray-200">{item.name}</h5>
                                                <p className="text-base mt-2 leading-4 text-gray-400">{item.role}</p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <CarouselPrevious className=" text-black" />
                        <CarouselNext className=" text-black" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
