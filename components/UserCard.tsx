// Explicitly use import type
import type { UserType } from "../utils/UserType";
import { Avatar, Card, CardBody, Divider } from "@nextui-org/react";
import {
  UsersIcon,
  ClockIcon,
  InboxIcon,
  MapPinIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

const UserCard = ({ info }: { info: UserType }) => {
  return (
    <>
      <Card className="m-2 max-w-sm">
        <CardBody>
          <div className="flex flex-col items-center justify-center gap-4 pb-5">
            <Avatar
              isBordered
              color="primary"
              src={info.picture.large}
              className="h-32 w-32 text-large"
            />
            <span className="text-3xl font-bold">
              {info.name.title} {info.name.first} {info.name.last}
            </span>
          </div>

          <Divider />

          <div className="w-[19rem] space-y-5 pt-5 font-bold capitalize">
            <div className="flex items-center gap-4">
              <UsersIcon className="h-7 w-7" />
              <span className="text-xl">{info.gender}</span>
            </div>

            <div className="flex items-center gap-4">
              <ClockIcon className="h-7 w-7" />
              <span className="text-xl">{info.dob.age} years</span>
            </div>

            <div className="flex items-center gap-3">
              <InboxIcon className="h-7 w-7 min-w-[2rem]" />
              <span className="overflow-y-auto text-xl lowercase">
                {info.email}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPinIcon className="h-7 w-7" />
              <span className="text-xl">
                {info.location.city}, {info.location.state}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <GlobeAsiaAustraliaIcon className="h-7 w-7" />
              <span className="text-xl">{info.location.country}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserCard;
