import MonaLisaImage from "../assets/monalisa.jpg"


        // <div className="flex flex-1">
        //     <img src={MonaLisaImage} alt="Picture of the Mona Lisa" className="h-full object-cover" />
        //     <section className="flex-1 p-6">
        //         About the MONA LISA
        //     </section>
        // </div>

function MonaLisa() {
    return (

        <div className="h-[92.5vh] flex flex-col overflow-hidden">
            <main className="flex flex-row h-full min-h-0 overflow-hidden">
                <div className="h-full shrink-0">
                    <img
                        src={MonaLisaImage}
                        alt="Image of the Mona Lisa"
                        className="block h-full w-auto max-w-none"
                    />
                </div>
                <section className="flex-1 overflow-y-auto p-6">
                    The <em>Mona Lisa</em> is an Italian Renaissance painting by Leonardo da Vinci.
                </section>
            </main>
        </div>
    )
}

export default MonaLisa;
