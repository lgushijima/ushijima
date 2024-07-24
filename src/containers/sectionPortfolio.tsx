export const SectionPortfolio = () => {
    return (
        <section className="section-portfolio">
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

                <div>
                    <div className="flex gap-4 py-10">
                        <div className="w-2/4">
                            <img
                                src="/portfolio/projeto-bw-thumb.png"
                                alt=""
                                className="portfolio-item w-4/6 mx-auto"
                            />
                        </div>
                        <div className="w-2/4">
                            <h4 className="text-2xl">Electron.js - Blockchain Wallet</h4>
                            <p className="text-base font-semibold text-gray-400">
                                .NET Core, C#, REST API, MSSQL, Electron.js, jQuery, Bootstrap, SignalR, Web3.js,
                                Ethers.js, SignalR
                            </p>
                            <ul className="mt-5">
                                <li className="text-gray-400 list-disc ml-5">SPA Project</li>
                                <li className="text-gray-400 list-disc ml-5">Permissions and access area management</li>
                                <li className="text-gray-400 list-disc ml-5">
                                    Blockchain NFT, transactions and balances
                                </li>
                                <li className="text-gray-400 list-disc ml-5">Wallet creation</li>
                                <li className="text-gray-400 list-disc ml-5">Realtime Chat</li>
                                <li className="text-gray-400 list-disc ml-5">Purchase and credit card integrations</li>
                                <li className="text-gray-400 list-disc ml-5">Notifications and alerts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4 py-10">
                        <div className="w-2/4">
                            <img src="/portfolio/projeto-cg-thumb.png" alt="" className="portfolio-item h-96 mx-auto" />
                        </div>
                        <div className="w-2/4">
                            <h4 className="text-2xl">React Native - Poultry Farm Management</h4>
                            <p className="text-base font-semibold text-gray-400">
                                React Native, Redux, React Query, Tailwind
                            </p>
                            <ul className="mt-5">
                                <li className="text-gray-400 list-disc ml-5">User Control</li>
                                <li className="text-gray-400 list-disc ml-5">Dashboard and Charts</li>
                                <li className="text-gray-400 list-disc ml-5">Offline and Online access</li>
                                <li className="text-gray-400 list-disc ml-5">Data Import and Export</li>
                                <li className="text-gray-400 list-disc ml-5">
                                    Data visualization on website application
                                </li>
                                <li className="text-gray-400 list-disc ml-5">Local storage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4 py-10">
                        <div className="w-2/4">
                            <img
                                src="/portfolio/projeto-bp-thumb.png"
                                alt=""
                                className="portfolio-item w-4/6 mx-auto"
                            />
                        </div>
                        <div className="w-2/4">
                            <h4 className="text-2xl">ASP.MVC - Parking Management</h4>
                            <p className="text-base font-semibold text-gray-400">
                                ASP.NET MVC, C#, MSSQL, jQuery, Bootstrap, SignalR
                            </p>
                            <ul className="mt-5">
                                <li className="text-gray-400 list-disc ml-5">SPA project</li>
                                <li className="text-gray-400 list-disc ml-5">User Control</li>
                                <li className="text-gray-400 list-disc ml-5">Permissions and access area management</li>
                                <li className="text-gray-400 list-disc ml-5">General registrations and settings</li>
                                <li className="text-gray-400 list-disc ml-5">Dashboard and charts (Highcharts.js)</li>
                                <li className="text-gray-400 list-disc ml-5">Notifications and email alerts</li>
                                <li className="text-gray-400 list-disc ml-5">Reservation management</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4 py-10">
                        <div className="w-2/4">
                            <img src="/portfolio/projeto-ws-thumb.png" alt="" className="portfolio-item h-96 mx-auto" />
                        </div>
                        <div className="w-2/4">
                            <h4 className="text-2xl">ASP.MVC - General Websites & Web Applications</h4>
                            <p className="text-base font-semibold text-gray-400">
                                ASP.NET MVC, C#, MSSQL, jQuery, Bootstrap
                            </p>
                            <ul className="mt-5">
                                <li className="text-gray-400 list-disc ml-5">Abrigo Deus Cristo e Caridade</li>
                                <li className="text-gray-400 list-disc ml-5">
                                    InnoCheff - Restaurant Orders Management
                                </li>
                                <li className="text-gray-400 list-disc ml-5">CityComputer Website & admin panel</li>
                                <li className="text-gray-400 list-disc ml-5">Inno Website</li>
                                <li className="text-gray-400 list-disc ml-5">WFR Sistemas Website & admin panel</li>
                                <li className="text-gray-400 list-disc ml-5">Racco Cosméticos Website & admin panel</li>
                                <li className="text-gray-400 list-disc ml-5">
                                    Medlux Website & support tickets management area
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

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
