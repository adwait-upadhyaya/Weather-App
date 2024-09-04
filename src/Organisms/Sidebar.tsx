import "../sass/_sidebar.scss";
import Text from "../Atomic/Text";
import Image from "../Atomic/Image";
import { ISidebar } from "../interface/ISidebar";

// Icons
import humidityIcon from "../../public/images/outline.svg";
import cloudsIcon from "../../public/images/clouds.svg";
import windIcon from "../../public/images/winds.svg";

const Sidebar = (props: ISidebar) => {
  const { condition, humidity, cloud, winds } = props;
  return (
    <div className="sidebar">
      <Text
        content="Weather Details..."
        className="sidebar__heading"
        id="medium-text"
        type="h3"
      />

      <Text
        content={condition}
        className="sidebar__condition"
        id="medium-text"
        type="h3"
      />

      <div className="sidebar__condition-detail">
        <div className="sidebar__condition-detail-row">
          <Text
            content="Humidity"
            type="p"
            className="sidebar__condition-row-text"
            id="medium-text"
          />
          <div className="flex item-center gap">
            <Text
              content={`${humidity}%`}
              type="p"
              className="sidebar__condition-row-text"
              id="medium-text"
            />
            <Image src={humidityIcon} width={18} height={24} />
          </div>
        </div>
        <div className="sidebar__condition-detail-row">
          <Text
            content="Clouds"
            type="p"
            className="sidebar__condition-row-text"
            id="medium-text"
          />
          <div className="flex item-center gap">
            <Text
              content={`${cloud}%`}
              type="p"
              className="sidebar__condition-row-text"
              id="medium-text"
            />
            <Image src={cloudsIcon} width={18} height={24} />
          </div>
        </div>
        <div className="sidebar__condition-detail-row">
          <Text
            content="Winds"
            type="p"
            className="sidebar__condition-row-text"
            id="medium-text"
          />
          <div className="flex item-center gap">
            <Text
              content={`${winds}km/h`}
              type="p"
              className="sidebar__condition-row-text"
              id="medium-text"
            />
            <Image src={windIcon} width={18} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
