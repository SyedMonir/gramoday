import React from 'react';

const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-black">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div
              className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t
                           bg-[#01A39D] text-white rounded-lg"
            >
              <h3 className="text-base font-semibold">
                You need to download the Gramoday App for this action
              </h3>
              <button
                className="p-1  bg-transparent border-0 float-right text-xl leading-none font-semibold outline-none ml-2 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent h-6 w-6 text-xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-3 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Do you want to go to the play store?
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-[#01A39D] text-white active:bg-emerald-600 font-bold uppercase   text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Yes
                </button>
                <button
                  className="bg-[#01A39D] text-white active:bg-emerald-600 font-bold uppercase   text-sm px-6   shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
