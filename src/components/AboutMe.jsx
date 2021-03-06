import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutMe() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal">
      <div className="block text-center md:pt-30 pt-60 lg:mb-60">
        <div className="avatar">
          <LazyLoadImage
            className="w-52 h-52 rounded-full mx-auto"
            effect={"blur"}
            src={"profile-photo.jpg"}
            alt={"my profile photo"}
          />
        </div>
        <h2 className="font-black uppercase pt-8 pb-8 text-3xl text-yellow-500">
          ð ä½ å¥½åï¼ææ¯binbinï¼
        </h2>
        <p className="font-rubik font-semibold text-xl text-center text-gray-800 m-2">
          ææ¯ææ
        </p>
        {[
          // å¨æ­¤å¤ä¿®æ¹ææ°å¢åå®¹ï¼æ¯è¡åå®¹ç¨éå·åéï¼
          "ææ¯æ¹åç§æå­¦é¢çå¤§ä¸å­¦çï¼å³å°æ¯ä¸äº2024å¹´6æã",
          "æçç±å¥½æ¯å°æ³æ³è½¬æ¢æä»£ç ã",
          "æä¹åæ¬¢è·æ­¥ï¼ç¯®çåç¬å­å¹å¥ãð",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
