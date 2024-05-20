import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function History() {
  const historyList = [
    {
      id: 1,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 2,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 3,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 4,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 5,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 6,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 7,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 8,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 9,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
    {
      id: 10,
      title: "AI in autonomous",
      description: "AI in autonomous",
    },
  ];
  return (
    <div className="history-sidebar">
      <h1>
        History <IoClose />
      </h1>
      <p>Today’s</p>
      <div className="history-list">
        {historyList?.map((item) => (
          <div key={item?.id} className="history-card">
            <div>
              <h3>{item?.title}</h3>
              <h4>{item?.description}</h4>
            </div>
            <GoArrowUpRight />
          </div>
        ))}
      </div>
    </div>
  );
}
