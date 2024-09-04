import Text from "../Atomic/Text";
import Image from "../Atomic/Image";

import "../sass/_herosection.scss";
import { IHero } from "../interface/Ihero";

const HeroSection = (props: IHero) => {
  const { temp_c, location, time, iconUrl } = props;
  return (
    <div className="hero">
      <Text
        type="h1"
        content={`${temp_c} °`}
        className="hero__main"
        id="big-text"
      />
      <div className="hero__secondary">
        <Text
          content={location}
          className="hero__secondary--big"
          id="medium-text"
          type="h2"
        />
        <Text
          content={time}
          className="hero__secondary--small"
          id="medium-text"
          type="h2"
        />
      </div>
      <Image src={iconUrl} width={70} height={70} />
    </div>
  );
};

export default HeroSection;
