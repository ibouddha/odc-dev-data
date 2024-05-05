import { defaultChoice } from "@/constants";
import { PromoContext } from "@/context/PromoContext";
import { getStudents } from "@/db/fetchdata";
import clsx from "clsx";
import { Volume, VolumeX } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const { SwiperSlide } = require("swiper/react");
const { RandomChoiceCard } = require("../cards/ChoiseCard");
import { Swiper } from "swiper/react";

export const RandomChoiceSection = () => {
  const [choices, setChoices] = useState([]);
  const [muted, setMuted] = useState(false);
  const { data, dispatch } = useContext(PromoContext)


  const fetchChoices = async () => {
    const result = await getStudents(data?.promo?.id);
    if (result) {
      setChoices(result);
    }
  };

  useEffect(() => {
    fetchChoices();
  }, [data]);

  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
      <div className=" flex justify-between">
        <div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        Random Choice
      </h3>
      <div className="mt-2 py-[1px] w-32 bg-slate-900 dark:bg-white"></div>

        </div>
        <button
        onClick={() => setMuted(!muted)}
        >
        {
        !muted ? (<Volume />) : (<VolumeX />)
      }
        </button>
      </div>
      {choices.length > 0 && <SwiperView choices={choices} muted={muted} />}
    </div>
  );
};

const SwiperView = ({ choices = [], muted }) => {
  const [swipper , setSwipper] = useState({});
  const [showDefaultChoice, setShowDefaultChoice] = useState(true);
  const [isLoandingChoice, setIsLoandingChoice] = useState(false);
  const [prevChoise, setPrevChoise] = useState(null);


  const lenChoices = choices.length;
  const leftChoice = choices.slice(0, Math.ceil(lenChoices / 2));
  const rightChoice = choices.slice(Math.ceil(lenChoices / 2), lenChoices);

  const playSound = () => {
    if (!muted) {
      const audio = new Audio("/sounds/wheel-spin.mp3");
      audio.play();
    }
  }

  const handleRandomChoice = () => {
    let random = Math.floor(Math.random() * choices.length);
    console.log(prevChoise);
    console.log(random);
    while (prevChoise === random) {
      random = Math.floor(Math.random() * choices.length);
    }
    playSound();
    swipper.slideTo(random, 2000);
    setShowDefaultChoice(false);
    setIsLoandingChoice(true);
    setTimeout(() => {
      setIsLoandingChoice(false);
    }, 2000);
    setPrevChoise(random);
  };



  
  return (
    <div className="mt-10 py-4">
      <Swiper
        onSwiper={(swiper) => setSwipper(swiper)}
        slidesPerView={1}
        spaceBetween={10}
        initialSlide={Math.ceil(choices.length / 2)}
        centeredSlides={true}
        centeredSlidesBounds={true}
        className="mySwiper"
        loop={true}
        allowTouchMove={false}
        breakpoints={{
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 90,
          },
          1078: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {leftChoice.map((choice) => (
          <SwiperSlide key={choice.id} className="py-10">
            <RandomChoiceCard choice={choice} active={choice.active} />
          </SwiperSlide>
        ))}
        {showDefaultChoice && (
          <SwiperSlide key={defaultChoice.id} className="py-10">
            <RandomChoiceCard
              choice={defaultChoice}
            />
          </SwiperSlide>
        )}
        {rightChoice.map((choice) => (
          <SwiperSlide key={choice.id} className="py-10">
            <RandomChoiceCard choice={choice} active={choice.active} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex justify-center p-4">
        <RandomChoiceDice
          isLoandingChoice={isLoandingChoice}
          handleRandomChoice={handleRandomChoice}
        />
      </div>
    </div>
  );
};

const RandomChoiceDice = ({ isLoandingChoice, handleRandomChoice }) => {
  return (
    <button title="Random Choice" onClick={handleRandomChoice}
    disabled={isLoandingChoice}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 102 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(isLoandingChoice && "animate-spin")}
      >
        <path
          d="M50.9204 0C49.2631 0 47.6055 0.35267 46.3217 1.05801L5.3305 23.5738C2.76239 24.9845 2.76239 27.2152 5.3305 28.6259L46.3217 51.1417C48.8898 52.5524 52.9508 52.5524 55.5186 51.1417L96.5098 28.6259C99.0779 27.2155 99.0779 24.9845 96.5098 23.5741L55.5186 1.05826C54.2345 0.352415 52.5775 0 50.9204 0ZM50.6993 13.5334C53.118 13.5582 55.2926 14.0842 57.2229 15.1113C58.5432 15.8139 59.4078 16.6156 59.8168 17.5163C60.2121 18.41 60.2354 19.5877 59.8865 21.0493L59.4572 22.5033C59.1727 23.5438 59.1137 24.2922 59.2801 24.7483C59.4328 25.1976 59.8123 25.5836 60.4184 25.9062L61.3281 26.3898L52.4095 31.1346L51.4185 30.6079C50.3136 30.0202 49.6085 29.356 49.3031 28.6152C48.9843 27.8674 49.0374 26.6778 49.4625 25.0464L49.8715 23.5817C50.1094 22.7094 50.1326 21.9944 49.9412 21.4367C49.7659 20.8699 49.3684 20.4217 48.7487 20.092C47.8053 19.5902 46.6756 19.4098 45.3594 19.551C44.0297 19.6852 42.6566 20.129 41.2403 20.8824C39.9062 21.5922 38.6941 22.4807 37.6041 23.5478C36.5008 24.6084 35.5538 25.822 34.7631 27.1887L28.4166 23.8118C29.8437 22.4511 31.2459 21.2608 32.6233 20.2411C34.0008 19.2218 35.4554 18.3044 36.9872 17.489C41.006 15.3509 44.7432 14.0796 48.1988 13.6751C49.0282 13.5742 49.8638 13.5268 50.6998 13.5332L50.6993 13.5334ZM64.3199 27.9817L71.5157 31.8101L62.5971 36.5548L55.4011 32.7267L64.3199 27.9817ZM2.59333 32.891C1.04952 32.8515 0 33.9959 0 36.0202V76.2042C0 79.0204 2.03141 82.3614 4.59952 83.7698L44.0281 105.391C46.5962 106.799 48.6277 105.685 48.6277 102.869V62.6845C48.6277 59.8682 46.5962 56.5281 44.0281 55.1194L4.59952 33.4988C3.87766 33.1025 3.19739 32.9058 2.59333 32.8905V32.891ZM99.4067 32.8916C98.8029 32.9068 98.1231 33.1031 97.401 33.4993L57.9711 55.1199C55.4029 56.5283 53.3715 59.8693 53.3715 62.6855V102.871C53.3715 105.686 55.4029 106.799 57.9711 105.391L97.4013 83.7708C99.9694 82.3624 102 79.022 102 76.2057V36.0207C102 33.997 100.951 32.8528 99.4067 32.8921V32.8916ZM13.1202 49.1368C14.8787 49.485 16.4847 49.9108 17.9381 50.4142C19.3951 50.9193 20.8029 51.5438 22.1458 52.2807C25.6916 54.225 28.3946 56.4404 30.2548 58.9269C32.115 61.3987 33.0451 64.0352 33.0451 66.8365C33.0451 68.2737 32.7617 69.4088 32.195 70.2419C31.6281 71.0604 30.6616 71.7479 29.2957 72.3044L27.9003 72.7937C26.9121 73.1611 26.2654 73.54 25.9602 73.9302C25.6551 74.3051 25.5026 74.8226 25.5026 75.4825V76.4725L17.6333 72.1577V71.0798C17.6331 69.877 17.8728 68.9452 18.3524 68.2844C18.8321 67.6088 19.8421 66.9746 21.3826 66.3817L22.7781 65.8705C23.6064 65.5622 24.2094 65.1743 24.5873 64.7067C24.9792 64.2474 25.1753 63.6803 25.1755 63.0056C25.1755 61.9793 24.8266 60.9889 24.1289 60.0344C23.4314 59.0652 22.4577 58.2379 21.2079 57.5524C20.0308 56.9072 18.7591 56.4594 17.3928 56.209C16.0267 55.944 14.6025 55.8892 13.1202 56.0447V49.1368ZM85.4511 51.33C85.8594 51.33 86.2379 51.3719 86.5868 51.4556C88.447 51.8876 89.3771 53.5044 89.3771 56.3059C89.3771 57.743 89.0937 59.189 88.527 60.6437C87.9602 62.0836 86.9938 63.8306 85.6277 65.8848L84.2323 67.904C83.2441 69.3551 82.5973 70.4429 82.2921 71.1674C81.9871 71.8772 81.8346 72.5621 81.8346 73.222V74.212L73.9652 78.5266V77.4487C73.9652 76.246 74.205 75.0511 74.6844 73.8642C75.1644 72.6626 76.1745 70.921 77.7146 68.6394L79.11 66.5983C79.9383 65.3812 80.5414 64.3319 80.9192 63.4502C81.3112 62.5604 81.5073 61.7781 81.5075 61.1033C81.5075 60.0769 81.1588 59.4689 80.4614 59.2794C79.7637 59.0753 78.7899 59.3157 77.5399 60.0005C76.3628 60.6462 75.0912 61.5929 73.7253 62.8404C72.3594 64.0736 70.9352 65.5804 69.4527 67.3609V60.4528C71.2113 58.8729 72.8169 57.5378 74.2695 56.4475C75.7233 55.3574 77.1259 54.442 78.4773 53.7014C81.3586 52.1215 83.6834 51.3309 85.4517 51.3298L85.4511 51.33ZM17.633 75.4142L25.5026 79.7283V87.5605L17.6333 83.2464V75.4145L17.633 75.4142ZM81.8346 77.4681V85.3L73.9652 89.614V81.7827L81.8346 77.4681Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    </button>
  );
};
