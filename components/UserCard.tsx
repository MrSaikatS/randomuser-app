// Explicitly use import type
import { Avatar, Card, CardBody, Divider } from "@nextui-org/react";
import {
  UsersIcon,
  ClockIcon,
  InboxIcon,
  MapPinIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import type { UserType } from "../utils/UserType";

const UserCard = () => {
  return (
    <>
      <Card className='max-w-sm m-2'>
        <CardBody>
          <div className='flex flex-col items-center justify-center gap-2 pb-5'>
            <Avatar
              src='https://i.pravatar.cc/150?u=a04258114e29026708c'
              className='w-20 h-20 text-large'
            />
            <span className='text-4xl font-bold'>Mr Evan Nguyen</span>
          </div>

          <Divider />

          <div className='pt-5 space-y-4 w-[19rem] font-bold capitalize'>
            <div className='flex items-center gap-4'>
              <UsersIcon className='h-7 w-7' />
              <span className='text-xl'>Male</span>
            </div>

            <div className='flex items-center gap-4'>
              <ClockIcon className='h-7 w-7' />
              <span className='text-xl'>35 years</span>
            </div>

            <div className='flex items-center gap-3'>
              <InboxIcon className='h-7 w-7 min-w-[2rem]' />
              <span className='text-xl overflow-y-auto lowercase'>
                evan.nguyen@example.comdsdasdasdsd
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <MapPinIcon className='h-7 w-7' />
              <span className='text-xl'>city , state</span>
            </div>

            <div className='flex items-center gap-4'>
              <GlobeAsiaAustraliaIcon className='h-7 w-7' />
              <span className='text-xl'>country</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserCard;
