import React from 'react'

export default function ConfirmDialog({ isOpen, onClose, onConfirm, message }) {

    if (!isOpen) return null
    
  return (
    <>
          <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-4 text-center">
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500">
            {message || 'Souhaitez-vous poursuivre cette action ?'}
          </h3>
          <button
            onClick={onConfirm}
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
          >
            Oui, je suis sûr
          </button>
          <button
            onClick={onClose}
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200 hover:bg-red-700"
          > 
            Non, annule
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
