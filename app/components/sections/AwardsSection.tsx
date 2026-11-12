import Image from "next/image";
export default function AwardsSection() {
  return (
    <section className="awards-section" id="penghargaan">
            <div className="awards-heading">
              <h2>Certificates <em>&amp; Awards.</em></h2>
            </div>
            <div className="awards-grid">
              <div className="awards-track">
                {Array.from({ length: 32 }, (_, i) => {
                  const number = (i % 16) + 1;
                  const filename = `award${number}.png`;
                  const duplicate = i >= 16;
                  return (
                    <figure className="award-card" key={`${filename}-${i}`} aria-hidden={duplicate}>
                      <div className="award-image">
                        <Image src={`/${filename}`} alt={duplicate ? "" : `Coway certificate and award ${number}`} fill sizes="(max-width: 560px) 36vw, 176px" />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>
          </section>
  );
}
