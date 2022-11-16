import React from "react";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aniq.filali.mehdi@gmail?subject=${formData.subject}&body=Bonjour, je suis ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col w-full space-y-6 md:space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          Si mon profil t{"'"}interresse{" "}
          <span className="italic underline text-[#F7AB0A]/50">
            Contacte moi 👍.
          </span>
        </h4>

        <div className="space-y-6 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a href="tel:+33 6 50 67 16 33" className="text-lg md:text-2xl">
              06 50 67 16 33
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">aniq.filali.mehdi@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">
              1 Square Charles Baudelaire, Evry
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-1/2"
              type="text"
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-1/2"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Sujet"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 md:py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/90 hover:text-white transition ease-in"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
