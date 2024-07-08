import React from 'react';
import { IoMdContact } from 'react-icons/io';
import { CiSaveDown2 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

export const ContactLink = () => {
  return (
    <span className="inline-flex items-center">
      <IoMdContact className="mx-2" />
      <a href="#" className="text-black">
        contacts
      </a>
    </span>
  );
};

export const SavedMessageLink = () => {
    return (
      <span className="inline-flex items-center">
        <CiSaveDown2 className="mx-2" />
        
          saved message
        
      </span>
    );
  };

  export const Setting = () => {
    return (
      <span className="inline-flex items-center">
        <IoSettingsOutline className="mx-2" />
        <a href="#" className="text-black">
          setting
        </a>
      </span>
    );
  };


