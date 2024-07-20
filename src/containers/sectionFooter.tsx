import {Mail, MapPin, Smartphone} from 'lucide-react';

export const SectionFooter = () => {
    return (
        <section className="section-footer bg-zinc-900">
            <div className="container mx-auto py-16">
                <div className="flex items-center justify-center text-center">
                    <div className="w-2/6">
                        <MapPin className="size-20 text-primary mx-auto" strokeWidth={1} />
                        <div>
                            <h4 className="text-xl text-white mt-5">Address</h4>
                            <p className="text-gray-400">
                                Rua Manoel Ribas, 32
                                <br />
                                Terra Boa - PR, Brazil
                            </p>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <Smartphone className="size-20 text-primary mx-auto" strokeWidth={1} />
                        <div>
                            <h4 className="text-xl text-white  mt-5">Phone/Whatsapp</h4>
                            <p className="text-gray-400">+55 (41) 99986-0717</p>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <Mail className="size-20 text-primary mx-auto" strokeWidth={1} />
                        <div>
                            <h4 className="text-xl text-white mt-5">Email</h4>
                            <p className="text-gray-400">gustavo@ushijima.com.br</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-950 py-10 text-center">
                <p className="text-white">© {new Date().getFullYear()} ww.ushijima.com.br</p>
                <p className="text-sm text-gray-400">
                    This website was built using React.js, TypeScript, Shadcn UI, and Lucide Icons
                </p>
                <div className="flex"></div>
            </div>
        </section>
    );
};
