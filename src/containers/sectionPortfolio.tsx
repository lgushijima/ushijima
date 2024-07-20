export const SectionPortfolio = () => {
    return (
        <section className="section-portifolio">
            <div className="container mx-auto py-16">
                <div>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-semibold text-gray-700">
                            My <span className="text-primary">Portfolio</span>
                        </h2>
                        <p className="w-8/12 mx-auto text-lg font-semibold text-gray-400">
                            With over 50+ websites and 20+ web applications completed, explore a selection of my most
                            recent projects below
                        </p>
                    </div>
                </div>

                <div></div>

                <div className="text-center mt-10">
                    <p className="text-lg text-gray-400">
                        Take a look on my <span className="text-gray-700">codecanyon.net</span> account too!{' '}
                        <a
                            href="https://codecanyon.net/user/lgushijima"
                            title="https://codecanyon.net/user/lgushijima"
                            target="_blank"
                            className="font-semibold text-sky-600">
                            check my profile!
                        </a>
                    </p>

                    <div className="flex justify-center">
                        <img
                            src="/images/codecanyon.png"
                            alt="https://codecanyon.net/user/lgushijima"
                            className="w-72 mt-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
