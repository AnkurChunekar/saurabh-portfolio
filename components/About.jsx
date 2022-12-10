import Image from "next/image";
import React from "react";

import aboutImg from "../public/images/about-image.png";
import Button from "./Button";

const content = `Prede. Label. Fusk. Iskap. Vejpa. Seminat. Mikror. Antibel. Ututud. Rejäskapet. Krosa. Önera. Blattesvenska. Dinade. Antiktigt. 
Faturade. Mess. Sysarar. Nidos. Nynade. Megang. Heterokån. Mms. Ong. Pyfuborar. Prehuvis. Fana. Fårepp. Gigask. Exoktig. 
Fuktigt. Terar. Tudat. Är. Nelädiren. Onat. Är. Trelogi. Negon. Astropp. Doledes. Pasam. Reavyde. Valing. Rende. 
Prer. Samlarsyndrom. Telesk. Dud. Fungar. Resamma. Diar. Nid. Spevis. Kidånat. Gensax. Kron. Virar. Ultrahet. Jägören. 
Bevis. Neliga. Prelig. Sar. Trimani. Partad. Deplastisk. Surade. Gölos. Besogt. Euron. Omihak. Tresm. Misat. Previs. 
Neoitet. Hypertet. Dir. Rys. Hemiska. Pössa. Las. Intrad. Begt. Pock. Epide. Gereda. Antel. Tunera. Diagöst. 
Ona. Näringslots. Ladoligt. Fastlans. Yboskap. Nånannanism. Klickokrati. Lang. Pyl. Promäse. Virade. Ansiktsspårning. Episkade. Eusott. Dudade. 
Rerade. Nöment. Ninat. Homolig. Bios. Mära. Huning. Homonera. Dessa. Kroloplanade. Hbt. Nin. Posa. Teraktiga. Beren. 
Jänade. Foryn. Gemitåde. Vyryr. Selfiepinne. Krosepyledes. Husk. Vanytivis. Demogam. Desm. Oskap. Polig. Rere. Odellplatta. Tåderad.`;

const About = () => {
  return (
    <div id="About" className="mt-24 pb-10 border-b-2 border-gray-800">
      <div className="flex my-8 gap-x-16 justify-between">
        <div className="flex flex-col gap-y-8 w-3/5">
          <p className="text-5xl font-semibold font-secondary">
            Thanks for stopping by!
          </p>
          <p className="tracking-wide">{content}</p>
          <p>Want to work together or just want to say hi?</p>
          <Button>Contact Me!</Button>
        </div>

        <div className="shrink-0 w-2/5 flex justify-center">
          <Image
            src={aboutImg}
            alt="Logo for the portfolio"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
