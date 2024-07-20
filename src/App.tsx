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
    }, []);

    return (
        <>
            <div className="h-screen relative bg-main">
                <div className="flex flex-col h-full container mx-auto">
                    <div className="flex justify-end">
                        <nav className="space-x-4">
                            <a href="#" className="text-sm">
                                Home
                            </a>
                            <a href="#" className="text-sm">
                                About
                            </a>
                            <a href="#" className="text-sm">
                                Skills
                            </a>
                            <a href="#" className="text-sm">
                                Experience
                            </a>
                            <a href="#" className="text-sm">
                                Portfolio
                            </a>
                            <a href="#" className="text-sm">
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
            </div>

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
