"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { IoShareOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  title: String;
  location: String;
  message?: String;
  position: String;
  copy?:string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  title,
  location,
  message,
  position,
}) => {
    const [showText, setShowText] = useState<boolean>(false);
    const [copyMessage, setCopyMessage] = useState<string>("Copy");
    const pasteMaker = ()=>{
        setTimeout(()=>{
            setCopyMessage("Copy")
        },4000)
        return !showText ? setCopyMessage("Copied") : setCopyMessage("Copy")
    }

    
  return (
    <div className="w-full flex justify-between items-start bg-white shadow-md px-6 py-4">
      {/* profile_left */}
      <div className="flex gap-4">
        <Image
          className="rounded-2xl"
          src="/images/avatar.jpg"
          width={150}
          height={150}
          alt="Avatar Logo"
        />
        <div className="avatar_information mt-2">
          <h2 className="fw-bold text-xl font-bold text-black">{title}</h2>
          <p className="text-base text-neutral-500 font-semibold">{position}</p>
          <div className="location mt-4 flex items-center gap-2">
            <GrMapLocation size={20} />
            <p>{location}</p>
          </div>
          <div className="message mt-4 flex items-center gap-2 hover:text-amber-400 transition">
            <TiMessages size={20} />
            <Link target="_blank" href="https://t.me/Miracle9">
              <p className="">{message}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* profile_right */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <IoShareOutline
              className="cursor-pointer share_btn  block md:hidden rounded-full transition"
              size={25}
            />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between items-center py-2">
              <AlertDialogTitle>Share my profile page</AlertDialogTitle>
              <AlertDialogAction>
                <IoIosClose size={30} />
              </AlertDialogAction>
            </div>
            <AlertDialogDescription>
              <Image
                className="rounded-full cursor-pointer"
                src="/images/facebook.png"
                alt="facebook"
                width={40}
                height={40}
              />
              <Image
                className="rounded-full cursor-pointer"
                src="/images/instagram.png"
                alt="instagram"
                width={40}
                height={40}
              />
              <Image
                className="rounded-full cursor-pointer"
                src="/images/telegram.png"
                alt="telegram"
                width={40}
                height={40}
              />
              <Image
                className="rounded-full cursor-pointer"
                src="/images/twitter.avif"
                alt="twitter"
                width={40}
                height={40}
              />
              <Image
                className="rounded-full cursor-pointer"
                src="/images/linkedin.png"
                alt="linkedin"
                width={40}
                height={40}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
               <div className="flex justify-between items-center cursor-pointer gap-1 py-4 px-2 rounded-md border-2 hover:bg-slate-200 transition-all">
                    <div className="flex gap-2 items-center ">
                        <FaRegCopy />
                        <p className="select-none">https://github.com/WaiYanMoeMyintt</p>
                    </div>
                    <p onClick={pasteMaker} className="text-black font-bold">{copyMessage}</p>
               </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProfileHeader;
