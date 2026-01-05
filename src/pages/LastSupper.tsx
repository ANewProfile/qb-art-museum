import "../styles/WorkPages.css";
import LastSupperImage from "../assets/lastsupper.jpg"

function LastSupper() {
    return (
        <div className="h-[92.5vh] flex flex-col overflow-hidden">
            <main className="everything">
                <div className="image-container">
                    <img
                        src={LastSupperImage}
                        alt="Image of The Last Supper"
                        className="work-image"
                    />
                </div>
                <section className="description">
                    <p>
                        <strong>Title</strong>: <em>The Last Supper</em><br/>
                        <strong>Artist</strong>: Leonardo da Vinci<br/>
                        <strong>Medium</strong>: Mural (tempera on a dry wall)<br/>
                        <strong>Date</strong>: probably between 1495 and 1498<br/>
                        <strong>Curent Location</strong>: refectory of the Convent of Santa Maria delle Grazie in Milan, Italy<br/><br/><br/>
                    </p>
                    <p>
                    The painting presents a woman in a half-body portrait, with a distant landscape as the backdrop. The three-quarter view used in the painting, where the subject mostly turns towards the viewer, 
                    broke from the standard profile pose used in other Italian art. The <em>Mona Lisa</em>, however, caused a huge outbreak leading to this pose becoming the convention for all portraits through the 21st century.
                    </p>

                    <br/>

                    <p>
                    The subject's softly sculptural face shows da Vinci's skillful handling of sfumato (use of fine shading) and reveals his deep understanding of the musculature and the skull beneath the skin. The delicately painted veil,
                    the finely wrought tresses, and the careful rendering of folded fabric demonstrate Leonardo’s studied observations and inexhaustible patience. Moreover, the sensuous curves of the sitter’s hair and clothing are echoed
                    in the shapes of the valleys and rivers behind her. The sense of overall harmony achieved in the painting—especially apparent in the sitter’s faint smile—reflects Leonardo’s idea of the cosmic link connecting humanity
                    and nature, making this painting an enduring record of Leonardo’s vision. 
                    </p>

                    <br/>

                    <p>
                    In its exquisite synthesis of sitter and landscape, the Mona Lisa set the standard for all future portraits.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default LastSupper;
