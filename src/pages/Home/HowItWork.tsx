import { CheckCircle } from "lucide-react";



const HowItWork = () => {
  return (
    <div className="container mx-auto py-10">
         <div className='text-center my-5 mt-10 space-y-2'> 
                <h3 className='text-4xl uppercase font-bold text-lime-700'>How It's Work</h3>
                
            </div>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-12">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <CheckCircle className="text-blue-500 text-4xl" />
          <h2 className="text-lg font-bold">Onboarding</h2>
          <p className="text-gray-500 text-center">
            Connect your account to start syncing your data.
          </p>
        </div>

        {/* Dotted Line */}
        <div className="lg:w-1/3 w-full lg:block hidden">
          <svg height="100" width="100%">
            <line
              x1="0"
              y1="50"
              x2="100%"
              y2="50"
              stroke="black"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <CheckCircle className="text-blue-500 text-4xl" />
          <h2 className="text-lg font-bold">Synchronization</h2>
          <p className="text-gray-500 text-center">
            Sync your products and information.
          </p>
        </div>

        {/* Dotted Line */}
        <div className="lg:w-1/3 w-full lg:block hidden">
          <svg height="100" width="100%">
            <line
              x1="0"
              y1="50"
              x2="100%"
              y2="50"
              stroke="black"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <CheckCircle className="text-blue-500 text-4xl" />
          <h2 className="text-lg font-bold">Fulfillment</h2>
          <p className="text-gray-500 text-center">
            Complete your setup and begin using the service.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWork;
