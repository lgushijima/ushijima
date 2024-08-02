import {useEffect, useRef} from 'react';

export const SectionSkills = () => {
    const listRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    handleVisibilityChange(entry);
                });
            },
            {threshold: 0.1},
        );

        if (listRef.current) {
            listRef.current.forEach(item => {
                if (item) {
                    observer.observe(item);
                }
            });
        }

        return () => {
            if (listRef.current) {
                listRef.current.forEach(item => {
                    if (item) {
                        observer.unobserve(item);
                    }
                });
            }
        };
    }, []);

    const handleVisibilityChange = (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-line > span') as HTMLSpanElement;
            progressBar.style.width = `${progressBar.getAttribute('data-percent')}%`;
        }
    };

    const skills = [
        {id: 0, side: 'A', name: '"A" Player', value: 100},
        {id: 1, side: 'A', name: 'Problem Solving', value: 85},
        {id: 2, side: 'A', name: 'Proactive', value: 95},
        {id: 3, side: 'A', name: 'Team work', value: 100},
        {id: 4, side: 'A', name: 'C#', value: 95},
        {id: 5, side: 'A', name: '.Net Core', value: 80},
        {id: 6, side: 'A', name: 'ASP.MVC', value: 85},
        {id: 7, side: 'A', name: 'MS SQL', value: 90},
        {id: 8, side: 'A', name: 'Mediator', value: 70},
        {id: 9, side: 'A', name: 'Nethereum', value: 75},
        {id: 10, side: 'A', name: 'Swagger', value: 70},

        {id: 11, side: 'B', name: 'React.js', value: 75},
        {id: 12, side: 'B', name: 'React Native', value: 70},
        {id: 13, side: 'B', name: 'Typescript', value: 80},
        {id: 14, side: 'B', name: 'jQuery', value: 95},
        {id: 15, side: 'B', name: 'Javascript', value: 90},
        {id: 16, side: 'B', name: 'Bootstrap', value: 90},
        {id: 17, side: 'B', name: 'CSS', value: 95},
        {id: 18, side: 'B', name: 'HTML', value: 95},

        {id: 19, side: 'B', name: 'Electron.js', value: 75},
        {id: 20, side: 'B', name: 'Web3', value: 60},
        {id: 21, side: 'B', name: 'Ethers.js', value: 65},
    ];

    return (
        <section className="section-skills bg-neutral-50 ">
            <div className="container mx-auto py-16">
                <div>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-semibold text-gray-700">
                            My <span className="text-primary">Skills</span>
                        </h2>
                        <p className="w-8/12 mx-auto text-lg font-semibold text-gray-400">
                            Experience has taught me how to always <b className="text-gray-900">enhance my knowledge</b>{' '}
                            to apply on my daily activities. Acquiring new skills is the best way for becoming a great
                            professional!
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex gap-32 ">
                    <div className="w-2/4">
                        {skills
                            .filter(item => item.side == 'A')
                            .map((item, index) => {
                                return (
                                    <div className="skill-box" key={index} ref={el => (listRef.current[item.id] = el)}>
                                        <h4 className="skill-title">{item.name}</h4>
                                        <div className="progress-line">
                                            <span data-percent={item.value}>
                                                <span className="percent-tooltip">{item.value}%</span>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="w-2/4">
                        {skills
                            .filter(item => item.side == 'B')
                            .map((item, index) => {
                                return (
                                    <div className="skill-box" key={index} ref={el => (listRef.current[item.id] = el)}>
                                        <h4 className="skill-title">{item.name}</h4>
                                        <div className="progress-line">
                                            <span data-percent={item.value}>
                                                <span className="percent-tooltip">{item.value}%</span>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="text-center mt-10">
                    <p className="text-lg text-gray-400">
                        I'm on <span className="text-gray-700">hackerhank.com</span> too!{' '}
                        <a
                            href="https://www.hackerrank.com/lgu85"
                            title="https://www.hackerrank.com/lgu85"
                            target="_blank"
                            className="font-semibold text-sky-600">
                            check my profile!
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
