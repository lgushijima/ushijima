import {Button} from '@/components/ui/button';
import {Mail, Smartphone} from 'lucide-react';

export const SectionInfo = () => {
    return (
        <section className="section-profile">
            <div className="container mx-auto py-16">
                <div className="flex">
                    <div className="w-8/12 space-y-6">
                        <h2 className="text-4xl font-semibold text-gray-700">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-lg font-semibold text-gray-400">
                            Professional <b className="text-gray-900">full-stack .Net developer</b> having +18 years
                            experience
                        </p>
                        <p className="text-lg text-gray-400">
                            I am a brazilian full-stack developer, passionate and fast-learner professional with over 18
                            years of experience in coding web sites, web applications and services using modern ASP.NET,
                            ASP.MCV, HTML, CSS, Vue.js, React.js, and JavaScript.
                        </p>
                        <p className="text-lg text-gray-400">
                            During my career, I had the opportunity to be responsible for the developments of amazing
                            projects and solutions focused on the delivery of new technologies, ERP integrations,
                            franchising, banking operations, supply chain, process improvement, organizational
                            re-structuring and solutions for retail.
                        </p>

                        <div className="flex space-x-10">
                            <div className="flex items-center">
                                <Mail className=" text-gray-400" strokeWidth={1} />
                                <label className="ml-1">gustavo@ushijima.com.br</label>
                            </div>

                            <div className="flex items-center">
                                <Smartphone className=" text-gray-400" strokeWidth={1} />
                                <label className="ml-1">+55 (41) 99986-0717</label>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <Button
                                    className="text-xl"
                                    onClick={() => {
                                        window.open(
                                            'https://1drv.ms/b/s!AlU6j10taDjBkxPi5TYbGtXKUYPR?e=ANYPJQ',
                                            '_blank',
                                        );
                                    }}>
                                    Get my resume here
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="w-3/12 self-center">
                        <div className="border-primary p-2 border-8 rounded-sm">
                            <img src="/images/my-photo.png" alt="" className="w-full rounded-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
