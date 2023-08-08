import {
  ClockIcon,
  GlobeAsiaAustraliaIcon,
  InboxIcon,
  MapPinIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Divider, Skeleton } from "@nextui-org/react";

const LoadingComp = () => {
  return (
    <>
      <Card className='max-w-sm m-2'>
        <CardBody>
          <div className='flex flex-col items-center justify-center gap-4 pb-5'>
            <Skeleton className='rounded-full'>
              <div className='w-20 h-20 text-large'></div>
            </Skeleton>

            <Skeleton className='rounded-lg'>
              <span className='text-4xl font-bold'>Mr Evan Nguyen</span>
            </Skeleton>
          </div>

          {/* <Skeleton className='rounded-lg'></Skeleton> */}
          <Divider />

          <div className='pt-5 space-y-4 w-[19rem] font-bold capitalize'>
            <div className='flex items-center gap-4'>
              <Skeleton className='rounded-lg'>
                <UsersIcon className='h-7 w-7' />
              </Skeleton>
              <Skeleton className='rounded-lg'>
                <span className='text-xl'>Male</span>
              </Skeleton>
            </div>

            <div className='flex items-center gap-4'>
              <Skeleton className='rounded-lg'>
                <ClockIcon className='h-7 w-7' />
              </Skeleton>
              <Skeleton className='rounded-lg'>
                <span className='text-xl'>35 years</span>
              </Skeleton>
            </div>

            <div className='flex items-center gap-3'>
              <Skeleton className='rounded-lg'>
                <InboxIcon className='h-7 w-7 min-w-[2rem]' />
              </Skeleton>
              <Skeleton className='rounded-lg'>
                <span className='text-xl overflow-y-auto lowercase'>
                  evan.nguyen@example
                </span>
              </Skeleton>
            </div>

            <div className='flex items-center gap-4'>
              <Skeleton className='rounded-lg'>
                <MapPinIcon className='h-7 w-7' />
              </Skeleton>
              <Skeleton className='rounded-lg'>
                <span className='text-xl'>city , state</span>
              </Skeleton>
            </div>

            <div className='flex items-center gap-4'>
              <Skeleton className='rounded-lg'>
                <GlobeAsiaAustraliaIcon className='h-7 w-7' />
              </Skeleton>
              <Skeleton className='rounded-lg'>
                <span className='text-xl'>country</span>
              </Skeleton>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingComp;
