import { BarGraph } from "./BarGraph";
import { InfoCard } from "./InfoCard";
import { Navbar } from "./Navbar";
import { DougnetGraph } from "./DougnetGraph";
import { AddProfile } from "./AddProfile";
import { ProfileNew } from "./ProfileNew";

export const MainWindow = (props) => {
 
  return (
    <div style={{ width: '100%' }}>
      <Navbar userImg={props.userImg} />
      <div
        id="infoCards"
        className="flex flex-row gap-4 items-start justify-between mt-8"
      >
        {props.data.map((i) => {
          return (
            <InfoCard
              price={i.price}
              URL={i.iconUrl}
              color={i.color}
              change={i.change}
            />
          );
        })}
      </div>
      <BarGraph data={props.data} />
      <div className="flex flex-row gap-2 items-start justify-between">
        <DougnetGraph data={props.data} />
        {props.done ? (
          <ProfileNew formdata={props.formdata} />
        ) : (
          <AddProfile toggle={props.toggle} />
        )}
      </div>
    </div>
  );
}

