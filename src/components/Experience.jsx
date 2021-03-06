import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        ð¼ æçå·¥ä½ç»å
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          // å¨æ­¤å¤ä¿®æ¹ææ°å¢å·¥ä½ç»åå¡ç
          // å¦éæ°å¢å¡çï¼å¤å¶ä¸æ¹æ´ä¸ªè¢«{}åå´çå¯¹è±¡ï¼ä¿®æ¹å­ç¬¦ä¸²åå®¹ï¼æ¯ä¸ªå¯¹è±¡ç¨éå·åéã
          {
            img: "experience1.jpg",
            role: "ä»åºåç±»åãæå¡åãé£ååè£èãæ¬è¿å·¥",
            title: "å¹¿å·æéå¬å¸",
            time: "2021å¹´7æ - 2021å¹´8æ",
            descriptions: [
              "å¦æéå¾ç»å ä¸ªå½¢å®¹è¯æ¥æç»è¿äºå·¥ä½ï¼å°±æ¯å¼å§å´è´ååãåæ¥éæ¸æ¯ç¥ãæç»éº»æ¨å"
            ],
          },
          {
            img: "experience2.jpg",
            role: "å¹³é¢è®¾è®¡å®ä¹ çå©æ",
            title: "ç±ç¾å·¥ä½å®¤",
            time: "2021å¹´7æ - 2021å¹´8æ",
            descriptions: [
              "è°ç äºèªèº«è®¾è®¡ææ³ãè®¾è®¡è§åçä¼å¿åå·ä½ä¸å¡éæ±ï¼ç¨psåaiè¿è¡äºçµåç½ç«ççé¢è®¾è®¡åçé¢æ­å»ºï¼å®ç°äºæ»ä½ç½ç«çææã",
              "åºäºå­è²æ¯é£æ ¼è®¾è®¡äºç¬ç¹çå­è²æ¯é£æ ¼çç½ç«é£æ ¼ï¼ç¬å·ä¸æ ¼ï¼æ¶åpsãcadãuiãcadææ¯æ ï¼å°ç³»ç»çç¾åæååå°äºæè´ã",
            ],
          },
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
