import { HouseIcon, Mailbox, Phone } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="bg-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-20 justify-center py-20  gap-10 text-center">
            <div className="card  shadow-xl ">
              <div className="card-body ">
                <div className="flex items-center justify-center h-20 w-full">
                  <HouseIcon size={42}></HouseIcon>
                </div>

                <h2 className="text-2xl font-medium">Office Address:</h2>
                <p className="">38-2 Hilton Street, Chittagong</p>
              </div>
            </div>

            <div className="card shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-center h-20 w-full">
                  <Phone size={42}></Phone>
                </div>
                <h2 className=" text-2xl font-medium">Phone:</h2>
                <p className="">(+01) 123 456 7890</p>
              </div>
            </div>

            <div className="card  shadow-xl ">
              <div className="card-body">
                <div className="flex items-center justify-center h-20 w-full">
                  <Mailbox size={42}></Mailbox>
                </div>
                <h2 className=" text-2xl font-medium">Email</h2>
                <p className="">inform@dvents.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ContactInfo;