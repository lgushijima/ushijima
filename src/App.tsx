import {useLayoutEffect} from 'react';
import {SectionInfo} from './containers/sectionInfo';
import {SectionSkills} from './containers/sectionSkills';
import {SectionExperience} from './containers/sectionExperience';
import {SectionRecommendation} from './containers/sectionRecommendation';
import {SectionFooter} from './containers/sectionFooter';
import {SectionPortfolio} from './containers/sectionPortfolio';

function App() {
    useLayoutEffect(() => {
        eval('headlineType()');

        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.addEventListener('scroll', event => {
                let section = document.elementFromPoint(1, 200) as HTMLElement;
                const sectionClass = Array.from(section.classList).find(cls => cls.startsWith('section-'));
                if (sectionClass) {
                    document.querySelectorAll('nav > a').forEach(a => a.classList.remove('active'));
                    document.querySelector(`[href="#${sectionClass}"]`)?.classList.add('active');
                }

                const target = event.target as HTMLElement;
                if (target.scrollTop < 500) {
                    document.body.classList.remove('fixed-header');
                } else {
                    document.body.classList.add('fixed-header');
                }
            });
        }
    }, []);

    const onNavigateClick = (event: any) => {
        let target = document.querySelector(`.${event.target.hash.slice(1)}`) as HTMLElement;
        $('#root')
            .stop()
            .animate(
                {
                    scrollTop: target.offsetTop - 50,
                },
                500,
            );
        return false;
    };

    return (
        <>
            <section className="section-home h-screen relative bg-main">
                <div className="flex flex-col h-full container mx-auto">
                    <div className="flex justify-end main-header">
                        <nav className="space-x-4">
                            <a href="#section-home" className="text-sm" onClick={onNavigateClick}>
                                Home
                            </a>
                            <a href="#section-profile" className="text-sm" onClick={onNavigateClick}>
                                About
                            </a>
                            <a href="#section-skills" className="text-sm" onClick={onNavigateClick}>
                                Skills
                            </a>
                            <a href="#section-experience" className="text-sm" onClick={onNavigateClick}>
                                Experience
                            </a>
                            <a href="#section-recomendation" className="text-sm" onClick={onNavigateClick}>
                                Testimonials
                            </a>
                            <a href="#section-portfolio" className="text-sm" onClick={onNavigateClick}>
                                Portfolio
                            </a>
                            <a href="#section-footer" className="text-sm" onClick={onNavigateClick}>
                                Contact
                            </a>
                        </nav>
                    </div>

                    <div className="flex-1 flex items-center justify-center text-center">
                        <div>
                            <h2 className="text-4xl">Welcome!</h2>
                            <h1 className="text-7xl py-4">
                                I am <b className="text-primary">Gustavo Ushijima</b>
                            </h1>
                            <p className="cd-headline clip text-3xl">
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">A Full-Stack .Net Developer</b>
                                    <b>Great skills with jQuery + Bootstrap</b>
                                    <b>Currently learning React and React Native</b>
                                    <b>Skilled in communication, teamwork, and problem-solving</b>
                                    <b>With a strong ability to adapt to new challenges and technologies.</b>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#about" className="scrolling-icon scrollto">
                            <span className="go-down"></span>
                        </a>
                    </div>
                </div>
            </section>

            <SectionInfo />
            <SectionSkills />
            <SectionExperience />
            <SectionRecommendation />
            <SectionPortfolio />

            <SectionFooter />
        </>
    );
}

export default App;
