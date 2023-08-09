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
      <Card className='max-w-sm m-2'>
        <CardBody>
          <div className='flex flex-col items-center justify-center gap-4 pb-5'>
            <Avatar
              isBordered
              color='primary'
              src={info.picture.large}
              className='w-32 h-32 text-large'
            />
            <span className='text-3xl font-bold'>
              {info.name.title} {info.name.first} {info.name.last}
            </span>
          </div>

          <Divider />

          <div className='pt-5 space-y-5 w-[19rem] font-bold capitalize'>
            <div className='flex items-center gap-4'>
              <UsersIcon className='h-7 w-7' />
              <span className='text-xl'>{info.gender}</span>
            </div>

            <div className='flex items-center gap-4'>
              <ClockIcon className='h-7 w-7' />
              <span className='text-xl'>{info.dob.age} years</span>
            </div>

            <div className='flex items-center gap-3'>
              <InboxIcon className='h-7 w-7 min-w-[2rem]' />
              <span className='text-xl overflow-y-auto lowercase'>
                {info.email}
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <MapPinIcon className='h-7 w-7' />
              <span className='text-xl'>
                {info.location.city}, {info.location.state}
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <GlobeAsiaAustraliaIcon className='h-7 w-7' />
              <span className='text-xl'>{info.location.country}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserCard;
