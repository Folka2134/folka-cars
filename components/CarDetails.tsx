import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@utils";
import { CarProps } from "@/types/carTypes";
import { useRouter } from "next/navigation";
import CheckoutButton from "./CheckoutButton";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
  carRent: number;
}

const CarDetails = ({ isOpen, closeModal, car, carRent }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5 overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute right-2 top-2 z-10 w-fit rounded-full bg-primary-blue-100 p-2"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative h-40 w-full rounded-lg bg-pattern bg-cover bg-center">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-semibold capitalize">
                        {car.make} {car.model}
                      </h2>
                      <CheckoutButton
                        carId={car.id}
                        carMake={car.make}
                        carModel={car.model}
                        carRent={carRent}
                      />
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex w-full justify-between gap-5 text-right"
                          key={key}
                        >
                          <h4 className="capitalize text-grey">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-100">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
