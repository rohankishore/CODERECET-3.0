/* eslint-disable react/prop-types */
import devfolio from "../assets/Devfolio_Logo-White.svg";
import armada from "../assets/Armada.png";
import buildclub from "../assets/BuildClub.png";

const sponsorCardStyle = {
  padding: "1.04px",
  borderRadius: "16.63px",

  background: `
    linear-gradient(155.8deg,
      rgba(163,163,163,0.5) 0%,
      rgba(230,248,90,0.5) 10%,
      rgba(255,255,255,0.375) 45%,
      rgba(163,163,163,0.5) 75%,
      rgba(230,248,90,0.5) 100%
    )
  `,

  backgroundClip: "padding-box",
  WebkitBackgroundClip: "padding-box",
};



function SponsorBox({ children, className = "", innerClassName = "" }) {
  return (
    <div className={`w-full ${className}`} style={sponsorCardStyle}>
      <div
        className={`h-full w-full flex items-center justify-center ${innerClassName}`}
        style={{
          borderRadius: "15.6px",
          backgroundColor: "#181818", 
          backgroundImage:
            "linear-gradient(156.51deg, rgba(250, 250, 250, 0.25) -151.95%, rgba(8, 8, 8, 0.25) 55.32%, rgba(107, 107, 107, 0.25) 202.54%)",
        }}

      >
        {children}
      </div>
    </div>
  );
}


function OurSponsors() {
  return (
    <section
      id="sponsors"
      className="bg-custom-black w-full"
      aria-label="Our Sponsors"
    >
      <div className="relative border-custom-gray border-y px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[442px] leading-none">
            <p
              className="font-hoops_brother text-[44px] md:text-[47px]"
              style={{ color: "#E6F85A" }}
            >
              OUR
            </p>
            <p
              className="font-thomeo -mt-3 text-[58px] md:text-[76px] uppercase"
              style={{ color: "#FFFFFA" }}
            >
              Sponsors
            </p>
          </div>

          <div className="mt-14 md:mt-[66px]">
            <h3
              className="text-center font-tactic_sans text-[29px] tracking-[0.05em]"
              style={{ color: "#FFFFFA" }}
            >
              Title Sponsor
            </h3>

            <div className="mt-4">
              <SponsorBox
                className="h-[176px] sm:h-[220px] md:h-[296px]"
                innerClassName="px-8 md:px-12"
              >
                <img
                  src={armada}
                  alt="Armada"
                  className="w-[78%] md:w-[62%] max-w-[768px] h-auto object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
                />
              </SponsorBox>
            </div>
          </div>

          <div className="mt-12 md:mt-[75px]">
            <h3
              className="text-center font-tactic_sans text-[29px] tracking-[0.05em]"
              style={{ color: "#FFFFFA" }}
            >
              Associate Sponsors
            </h3>

            <div className="mt-4 space-y-6 md:space-y-[30px]">
              <SponsorBox className="h-[140px] sm:h-[160px] md:h-[178px]" innerClassName="p-4">
                <a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-yellow"
                >
                  <img
                    src={devfolio}
                    alt="Devfolio"
                    className="h-[32px] sm:h-[48px] md:h-[64px] w-auto object-contain"
                  />
                </a>
              </SponsorBox>

              <SponsorBox className="h-[140px] sm:h-[160px] md:h-[178px]" innerClassName="p-4">
                <img
                  src={buildclub}
                  alt="BuildClub"
                  className="h-[68px] w-[68px] sm:h-[92px] sm:w-[92px] md:h-[122px] md:w-[122px] object-cover rounded-2xl"
                />
              </SponsorBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSponsors;
