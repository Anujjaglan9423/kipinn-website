/* eslint-disable react/prop-types */

import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ setOpenModel, children }) => {
    const closeModel = () => {
        setOpenModel()
    };


    const getCurrentTarget = (e) => {
        const targetClass = Array.from(e.target.classList);
        if (targetClass.includes("addCommentModel")) {
            // console.log("hehehe")
            closeModel();
        }

    };

    return (
        <div
            onClick={getCurrentTarget}
            className=" fixed top-0 right-0 addCommentModel bottom-0 left-0 bg-neutral-900 backdrop-blur-sm bg-opacity-70 h-screen flex justify-center items-center z-50 addCommentModel overflow-y-auto"
        >
            <div className="bg-transparent relative z-20 w-50 h-50 ">
                <IoCloseOutline
                    onClick={closeModel}
                    className="absolute -top-2 -right-2 w-auto h-auto  cursor-pointer text-4xl text-gray-500 border bg-white rounded-full flex items-center justify-center shadow-lg z-40"
                />
                <div
                    style={{ maxHeight: "80vh", overflowY: "auto" }}
                    className="sm:w-[80vw] md:w-[40vw] w-[90vw] mx-auto h-auto  bg-white rounded-3xl p-1 relative overflow-hidden"
                >
                    <div className="border rounded-3xl bg-white h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
