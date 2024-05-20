import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard || Crypto Nest Network";
  }, []);

  // const featureList = [
  //   {
  //     id: 1,
  //     title: "Upload Document",
  //     icon: <IoCloudUploadOutline />,
  //   },
  //   {
  //     id: 2,
  //     title: "Copy Text",
  //     icon: <LuClipboard />,
  //     color: "blue",
  //   },
  //   {
  //     id: 3,
  //     title: "Write Code",
  //     icon: <FaLaptopCode />,
  //     color: "blue",
  //   },
  //   {
  //     id: 4,
  //     title: "Image Generation",
  //     icon: <LuPencil />,
  //   },
  // ];
  return (
    <div className="chat-section">
      <div className="chat-inner-section">
        {/* <h1>
          LegalSmarts by <span>CyberSmarts.ai</span>
        </h1> */}
        {/* <p>Intelligent Legal Solutions Powered by AI</p>
        <div className="chat-feature-section">
          {featureList?.map((item) => (
            <div key={item?.id} className="feature-card">
              <div className="content-start-aligned gap-2">
                <span
                  className={`title-icon ${
                    item?.color === "blue" && "blue-bg"
                  }`}
                >
                  {item?.icon}
                </span>
                <h3>{item?.title}</h3>
              </div>
              <span className="plus-icon">
                <FiPlus />
              </span>
            </div>
          ))}
        </div> */}
      </div>

      {/* <div className="w-100">
        <div className="chat-input-style">
          <Form.Group className="position-relative">
            <Form.Control type="text" placeholder="Summarize this Document" />
            <VscSend />
          </Form.Group>
          <div className="bottom-part">
            <div className="content-start-aligned gap-2">
              <h4>
                <ImAttachment />
                Attachment
              </h4>
              <h4>
                <MdKeyboardVoice />
                Attachment
              </h4>
            </div>
            <h6>24/600</h6>
          </div>
        </div>
        <h6 className="chat-description">
          Mr. Troy 1.4 may contain errors in people, places, or facts. Please
          note.
        </h6>
      </div>
      <History /> */}
    </div>
  );
}
