import { useRef } from "react";
import { Icons } from "../assets/Icons";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  setModalVisible: any;
}

const TwitterModal: React.FC<LayoutProps> = ({
  children,
  title,
  setModalVisible,
}) => {
  const modalRef: any = useRef();

  return (
    <div
      onClick={(e) =>
        !modalRef.current.contains(e.target) ? setModalVisible(false) : null
      }
      className="absolute flex justify-center w-full h-full z-50 bg-black bg-opacity-40"
    >
      <div
        ref={modalRef}
        className="flex flex-col w-11/12 sm:w-5/6 lg:w-4/6 h-fit bg-white rounded-xl mt-12"
      >
        <div className="flex items-center p-3">
          <div className="min-w-[56px]">
            <div
              className="p-2 w-fit hover:bg-black hover:bg-opacity-10 cursor-pointer rounded-full"
              onClick={() => setModalVisible(false)}
            >
              <div className="min-w-[1.25em] min-h-[1.25em] max-w-[1.25em] max-h-[1.25em]">
                <Icons name="cancel" />
              </div>
            </div>
          </div>
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex flex-col px-3">{children}</div>
      </div>
    </div>
  );
};

export default TwitterModal;
