import React, { useEffect, useState } from "react";
import "./videoContent.css";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import moment from "moment";

const VideoContent = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let onlineCourse;

  if (userDetails) {
    onlineCourse = userDetails.onlineCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/onlineCoursePayment");
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    // { id: 1, title: "1- WELCOME TO COURSE", url: "videos/VD1 INTRO1.mov" },
    {
      id: 1,
      title: "1- WELCOME TO COURSE",
      url: "https://player.vimeo.com/video/959612253?h=203baf094e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    // { id: 2, title: "2- INTRO OF THE TUTOR", url: "videos/VD2 INTRO2.mov" },
    {
      id: 2,
      title: "2- INTRO OF THE TUTOR",
      // url: "https://mega.nz/file/p3dlnLCI#AQs5dOeeBqpwYXxzIHXD2DZSv6mN18DJcND_CjPRZG0",
      url: "https://player.vimeo.com/video/959612045?h=aa6269d551&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 3, title: "3- ABOUT THE COURSE", url: "videos/WHY ISA.mov" },
    {
      id: 3,
      title: "3- ABOUT THE COURSE",
      // url: "https://mega.nz/file/QrVV0ITT#rf2r8EdEbgG-jpEsFrn8wwpN6-ZS2IJA0JK23gLWyhY",
      url: "https://player.vimeo.com/video/959612962?h=4111db57a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 4,
      title: "4- EQUIPMENTS TO BUY",
      url: "https://player.vimeo.com/video/961367924?h=8d89152c8a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 4, title: "4- INTRO OF EQUIPMENTS", url: "videos/EQUIP1 INTRO.mov" },
    {
      id: 5,
      title: "5- INTRO OF EQUIPMENTS",
      // url: "https://mega.nz/file/AvM1VCKI#vD4xSIrBvJMuifUIXTbTvJmyqEhrpNtTjw4Eo5Ar490",
      url: "https://player.vimeo.com/video/959614647?h=a4ecc154e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 5, title: "5- WHAT EQUIPMENTS DO U NEED!", url: "videos/EQUIP2.mov" },
    {
      id: 6,
      title: "6- WHAT EQUIPMENTS DO U NEED!",
      // url: "https://mega.nz/file/xqs32JyJ#IHTZ3aBXTwb2TrwDe0ZXHQq3uwRMnRGFVIpwRx6S_9s",
      url: "https://player.vimeo.com/video/959611749?h=e01ad6a48a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 6, title: "6- EQUIPMENT3", url: "videos/EQUIP3.mov" },
    {
      id: 7,
      title: "7- EQUIPMENT3",
      // url: "https://mega.nz/file/V29RTDzD#-F7hgr8vFwyIp9P-8KChGSTT5j3JZwrzXlBkQhM5bIc",
      url: "https://player.vimeo.com/video/959614854?h=a6ddc76866&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 7, title: "7- EQUIPMENT4", url: "videos/EQUIP4.MOV" },
    {
      id: 8,
      title: "8- EQUIPMENT4",
      // url: "https://player.vimeo.com/video/958239698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      url: "https://player.vimeo.com/video/959585680?h=4a4dfa2757&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 8, title: "8- EQUIPMENT5", url: "videos/EQUIP5.mov" },
    {
      id: 9,
      title: "9- EQUIPMENT5",
      // url: "https://mega.nz/file/p3sxhQpb#AE3trUf-BPQw4FG18L-lRF7XBEefT97nLYPW1nrmpC0",
      url: "https://player.vimeo.com/video/959614933?h=e815cb71f6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 9, title: "9- EQUIPMENT6", url: "videos/EQUIP6.mov" },
    {
      id: 10,
      title: "10- EQUIPMENT6",
      // url: "https://mega.nz/file/FjcUQIqa#HclLk87BAsLpESsFp1dTlnzhhT5FpeMu3BNRrRKexzM",
      url: "https://player.vimeo.com/video/959614989?h=732d400788&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 10, title: "10- EQUIPMENT7", url: "videos/EQUIP7.mov" },
    {
      id: 11,
      title: "11- EQUIPMENT7",
      // url: "https://mega.nz/file/ln0lmabI#r-7jOyhz6eoGgvFJzH6fwh35eTNe5IQG36u54ddeg5Y",
      url: "https://player.vimeo.com/video/959614089?h=607875ce41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 11, title: "11- EQUIPMENT8", url: "videos/EQUIP8.mov" },
    {
      id: 12,
      title: "12- EQUIPMENT8",
      // url: "https://mega.nz/file/Mm8gkIrL#71J6Q4qmzG3EhWVb6r9S2DXZpsz3QskfeX-DEydFkXU",
      url: "https://player.vimeo.com/video/959614578?h=69409adf53&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 12, title: "12- EQUIPMENT9", url: "videos/EQUIP9.mov" },
    {
      id: 13,
      title: "13- EQUIPMENT9",
      // url: "https://mega.nz/file/tzlmwSrA#lNrK-1uWYdYGe79JE2EmlDsxEpXJyYpLFWc79iZp4TA",
      url: "https://player.vimeo.com/video/959614805?h=16b1b3b757&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 14,
      title: "14- BONE OF THE HEAD",
      url: "https://player.vimeo.com/video/961393345?h=7152a4eb02&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 13,
    //   title: "13- HOW TO USE THE SCISSORS",
    //   url: "videos/SCISSORS1.mp4",
    // },
    {
      id: 15,
      title: "15- HOW TO USE THE SCISSORS",
      // url: "https://mega.nz/file/EuUhRCLA#MoWa5LZ95paO_ZfLOBVgpJhvqPN2vUPLJIpS_Xg4fP8",
      url: "https://player.vimeo.com/video/959614349?h=e3b2302405&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 14, title: "14- SCISSORS PART 2", url: "videos/SCI2.mov" },
    {
      id: 16,
      title: "16- SCISSORS PART 2",
      // url: "https://mega.nz/file/Ju1i0aAQ#bAtPe5DG3OevRwDgUTxWm34vWtG2vjvnqW1_Wo5yhtI",
      url: "https://player.vimeo.com/video/959613275?h=dd5ee89cb6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 15, title: "15- SCISSORS PART 3", url: "videos/SCI3.mov" },
    {
      id: 17,
      title: "17- SCISSORS PART 3",
      // url: "https://mega.nz/file/sr8AQQAD#u5NIlKha3bc1-FLUy4IX2xHq7XjDcMAcoGL49hnb710",
      url: "https://player.vimeo.com/video/959613439?h=9bc7b2c314&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 16, title: "16- SCISSORS PART 4", url: "videos/SCI4.mov" },
    {
      id: 18,
      title: "18- SCISSORS PART 4",
      // url: "https://mega.nz/file/U30hSajJ#zT0Wa_TAXP3uvT5eaCCxm5G4-CIFK-huGFCHRpeFuhE",
      url: "https://player.vimeo.com/video/959613867?h=b85c20fa81&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 17, title: "17- SCISSORS PART 5", url: "videos/SCI5.mov" },
    {
      id: 19,
      title: "19- SCISSORS PART 5",
      // url: "https://mega.nz/file/Vn1lCAiR#TcKDuBMxQwOTgpiqZ9ui17yK_FpcsVN7rAiP-QI3YoE",
      url: "https://player.vimeo.com/video/959614170?h=f775d06d14&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 18, title: "18- SCISSORS PART 6", url: "videos/SCI6.MOV" },
    {
      id: 20,
      title: "20- SCISSORS PART 6",
      // url: "https://mega.nz/file/RntT2RYY#YwmjZX6zKpTsm0dpfZadySn3iDo-teLBNwT4RB_yFq0",
      url: "https://player.vimeo.com/video/959614474?h=f603bdcccf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 19, title: "19- SCISSORS PART 7", url: "videos/SCI7.MOV" },
    {
      id: 21,
      title: "21- SCISSORS PART 7",
      // url: "https://mega.nz/file/Uj8CXLRb#safHW2_WqeLOrOSEyicnS1xP48MN0V0VAb6Bmo1xtNM",
      url: "https://player.vimeo.com/video/959614265?h=693577daa0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 20, title: "20- HOW TO USE CLIPPER", url: "videos/CLIPPER.mp4" },
    {
      id: 22,
      title: "22- HOW TO USE CLIPPER",
      // url: "https://mega.nz/file/YyFgEZxa#_OKZXYHhp0A3KBRYFPaCPfaem4k8kLAOo1qjcIRWIcw",
      url: "https://player.vimeo.com/video/959614526?h=d075df6093&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 21, title: "21- HOW TO USE THE TRIMMER ", url: "videos/TRIMMER.mov" },
    {
      id: 23,
      title: "23- HOW TO USE THE TRIMMER ",
      // url: "https://mega.nz/file/gzFynCwA#45pFdNGaRKj8qCXS1wpI_By4TcJtkhY1uPahu-fGX_g",
      url: "https://player.vimeo.com/video/959612824?h=7babe9c02e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 22,
    //   title: "22- WHAT IS THE RIGHT POSTURE",
    //   url: "videos/RIGHTPOS.mov",
    // },
    {
      id: 24,
      title: "24- WHAT IS THE RIGHT POSTURE",
      // url: "https://mega.nz/file/R6kTnTLI#cgFflzLk8zfZH1kOOQbIw_G70omAJBG0pYN6eRUHYWY",
      url: "https://player.vimeo.com/video/959612620?h=96de37ab75&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 23, title: "23- BONES OF THE HEAD", url: "videos/BONGS1.mov" },
    {
      id: 25,
      title: "25- BONES OF THE HEAD",
      // url: "https://mega.nz/file/Fj83FBDb#Z4OqXthJqjBT_J5yKXszQv0xlGKJAb46VQxcLEkK26Y",
      url: "https://player.vimeo.com/video/959613564?h=21e6dea6cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 24,
    //   title: "24- RIGHT CONSULTATION WITH CLIENT",
    //   url: "videos/CONSTL.mov",
    // },
    {
      id: 26,
      title: "26- RIGHT CONSULTATION WITH CLIENT",
      // url: "https://mega.nz/file/1yMTFQqD#5upCxK8FGCuZdd0cI-atbOd3GjhntmyEBxCmN7aU0jg",
      url: "https://player.vimeo.com/video/959613978?h=bb4881af38&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 25, title: "25- INTRO TO ONE LENGTH", url: "videos/INTRO OL1.mov" },
    {
      id: 27,
      title: "27- INTRO TO ONE LENGTH",
      // url: "https://mega.nz/file/1z1DAJYa#Zkle55RrOtxwa6naLqyzt4Phu_Mli9DyMRbr40H1FlE",
      url: "https://player.vimeo.com/video/959615075?h=6f1df9bfeb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 26, title: "26- ONELENGTH HAIRCUT ", url: "videos/OL HAIRCUT.mov" },
    {
      id: 28,
      title: "28- ONELENGTH HAIRCUT ",
      // url: "https://mega.nz/file/hqVwTCBQ#JqLXOmMgm9jL-ej21NnzjUXOgOLOIUxzZN2FZTQpizk",
      url: "https://player.vimeo.com/video/959605011?h=4e29d4c05a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 27,
    //   title: "27- INTRO SCISSORS UNDERHAND HAIRCUT ",
    //   url: "videos/INTRO SCISSORS UNDERHAND.mov",
    // },
    {
      id: 29,
      title: "29- INTRO SCISSORS UNDERHAND HAIRCUT ",
      // url: "https://mega.nz/file/YiNzTZyJ#N3Ktb7OlSY-WayFXrMZNXls5j9CjdgMzQikJlCGpqJg",
      url: "https://player.vimeo.com/video/959615038?h=7f385329e2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 30,
      title: "30- UNDERHAND HAIRCUT ",
      // url: "https://player.vimeo.com/video/958587018?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      url: "https://player.vimeo.com/video/959598425?h=09f77c43fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 28,
    //   title: "28- UNDERHAND HAIRCUT ",
    //   url: "videos/UNDERHAND HAIRCUT1.mov",
    // },
    // {
    //   id: 29,
    //   title: "29- INTRO FOR ONE SIDE HAIRCUT",
    //   url: "videos/INTRO ONE SIDE.mov",
    // },
    {
      id: 31,
      title: "31- INTRO FOR ONE SIDE HAIRCUT",
      // url: "https://mega.nz/file/Q38gRZ4R#wP9MkTlPjusLFjzK-P_lpKkDSoBUcnd45VM7tGXSdGg",
      url: "https://player.vimeo.com/video/959614757?h=077d4c8ef9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 30, title: "30- ONE BACK AND SIDE", url: "videos/ONE HAIRCUT.mov" },
    {
      id: 32,
      title: "32- ONE BACK AND SIDE",
      // url: "https://mega.nz/file/879x2byA#I4jyCSOOAK4zF0NTBMVWCVxYJPxR3peow4ZV8aG84aw",
      url: "https://player.vimeo.com/video/959607195?h=52f5467936&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 31,
    //   title: "31- INTRO FOR BUZZ CUT ",
    //   url: "videos/INTRO BUZZCUT.mov",
    // },
    {
      id: 33,
      title: "33- INTRO FOR BUZZ CUT ",
      // url: "https://mega.nz/file/t7NjyRpL#dLq51NCqeVVIhdLoVZo8M93Iu9gFwUgGPdvSgR06ePs",
      url: "https://player.vimeo.com/video/959615122?h=41da070799&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 32, title: "32- BUZZCUT ", url: "videos/BUZZCUT.mov" },
    {
      id: 34,
      title: "34- BUZZCUT ",
      // url: "https://mega.nz/file/5qFDDDCB#5_PVeWJjzHLev5pDCGwt7aGd6W38_kRsvOYdUxA5Ekw",
      url: "https://player.vimeo.com/video/959610969?h=54d021a2e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 33,
    //   title: "33- INTRO FOR CURLY TOP HAIRCUT",
    //   url: "videos/CURLYTOP INTRO.mov",
    // },
    {
      id: 35,
      title: "35- INTRO FOR CURLY TOP HAIRCUT",
      // url: "https://mega.nz/file/FqkgQCjD#sfk6KDqNI13VGIpC6MiE5PbIoNdvoQYmnfVkHOxshlA",
      url: "https://player.vimeo.com/video/959614695?h=4489cc033e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 36,
      title: "36- CURLYTOP BACK AND SIDE HAIRCUT",
      // url: "https://player.vimeo.com/video/958597219?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      url: "https://player.vimeo.com/video/959602451?h=50774b4d0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // {
    //   id: 34,
    //   title: "34- CURLYTOP BACK AND SIDE HAIRCUT",
    //   url: "videos/CURLYTOP HAIRCUT.mov",
    // },
    // { id: 35, title: "35- SKINFADE INTRO", url: "videos/SKINFADE INTRO.mov" },
    {
      id: 37,
      title: "37- SKINFADE INTRO",
      // url: "https://mega.nz/file/du9ESDAZ#QyenryQlWhLKnMWOgZYgcX9CxZygKMQrANEACEqGsA4",
      url: "https://player.vimeo.com/video/959614417?h=2531a2fb4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 38,
      title: "38- SKINFADE HAIRCUT",
      url: "https://player.vimeo.com/video/959592146?h=1f9563a6fa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 36, title: "36- BEARD TRIM PART 1", url: "videos/BEARD1.mov" },
    {
      id: 39,
      title: "39- BEARD TRIM PART 1",
      // url: "https://mega.nz/file/AmEl3QTR#5PftbMmvetTRxPTEQb5v1YOvigny2x_mpCPXwseRCI8",
      url: "https://player.vimeo.com/video/959609943?h=e2ce4a868c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 37, title: "37- BEARD TRIM PART 2", url: "videos/BEARD2.mov" },
    {
      id: 40,
      title: "40- BEARD TRIM PART 2",
      // url: "https://mega.nz/file/YuVlWQbK#ldWzzAVXvYJ-0PZfy9-J-Mgn7kIcEEaI27C_2Yt179s",
      url: "https://player.vimeo.com/video/959609016?h=c6592c79a5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    // { id: 38, title: "38- STYLING BEARD TRIM", url: "videos/BEARD3.mov" },
    {
      id: 41,
      title: "41- STYLING BEARD TRIM",
      // url: "https://mega.nz/file/0r0Eza5J#nBnAYn8Z6XdJmhjfI0PYm4_UZnbaXDXlYbXTcqzBCpw",
      url: "https://player.vimeo.com/video/959611402?h=7bfb2abe73&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 42,
      title: "42- BUZZCUT HAIRCUT ",
      url: "https://player.vimeo.com/video/961401983?h=ebaa213371&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 43,
      title: "43- TIPS AND TRICKS 1",
      url: "https://player.vimeo.com/video/961349915?h=2fa69b2532&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 44,
      title: "44- TIPS AND TRICKS 2",
      url: "https://player.vimeo.com/video/961350289?h=c0750d07be&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 45,
      title: "45- TIPS AND TRICKS 3",
      url: "https://player.vimeo.com/video/961349734?h=5d33c61747&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },

    {
      id: 46,
      title: "46- END COURSE VIDEO",
      url: "https://player.vimeo.com/video/961350397?h=aceb61aa7b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];

  const takeTest = () => {
    navigate("/educationTest");
  };

  const [allUsers, setAllUsers] = useState([]);

  const fetchAllSubscriptions = async () => {
    const fetchData = await fetch(SummaryApi.allSubscription.url, {
      method: SummaryApi.allSubscription.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllSubscriptions();
  }, []);

  const displayedDates = new Set();

  return (
    <>
      {user?._id ? (
        onlineCourse ? (
          <>
            <div className="flex justify-around items-center">
              <h6 style={{ textAlign: "center", fontSize: "40px" }}>
                Video Lectures
              </h6>
              {allUsers.map((u, index) => {
                if (
                  user?._id === u.userId &&
                  u.paymentType === "onlineCoursePayment" &&
                  onlineCourse
                ) {
                  const formattedDate = moment(u.expirySubDate).format("LL");

                  if (!displayedDates.has(formattedDate)) {
                    displayedDates.add(formattedDate);
                    return (
                      <p key={index} className="text-black text-lg">
                        <sup>**</sup>Course will expire on:{" "}
                        <span className="text-red-600">{formattedDate}</span>
                      </p>
                    );
                  }
                }
                return null;
              })}
            </div>
            <div className="app">
              <Sidebar videos={videos} onVideoSelect={setSelectedVideo} />
              <VideoPlayer video={selectedVideo} />
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-black-600 bg-black mt-5">
              <div className="flex flex-col w-full justify-center items-center">
                <p className="text-white font-medium">
                  Click below to open PDF Course
                </p>
                <div className="flex justify-around w-full">
                  <Link
                    to="/pdfCourse"
                    className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
                  >
                    BEGINNER BARBER BOOK
                  </Link>
                  <Link
                    to="/pdfCourse2"
                    className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
                  >
                    CONTENTS MODULESS ISA
                  </Link>
                  <Link
                    to="/pdfCourse3"
                    className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
                  >
                    FUNDAMENTALS BOOK ISA
                  </Link>
                </div>
              </div>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "2px",
                }}
              />

              <p className="text-white font-medium">
                Click on the button to take test
              </p>
              <button
                className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
                onClick={takeTest}
              >
                Final Education Course Test
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center h-96">
              <h1>You have not purchased the video course</h1>
              <button
                onClick={handleClick}
                className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                purchase
              </button>
            </div>
          </>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default VideoContent;
