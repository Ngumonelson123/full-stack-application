import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const toastOptions = {
  duration: 4000,
  position: 'top-right',
  style: {
    background: '#fff',
    color: '#374151',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    padding: '16px',
    fontSize: '14px',
    fontWeight: '500',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  success: {
    iconTheme: {
      primary: '#10b981',
      secondary: '#fff',
    },
    style: {
      border: '1px solid #d1fae5',
      background: '#f0fdf4',
    },
  },
  error: {
    iconTheme: {
      primary: '#ef4444',
      secondary: '#fff',
    },
    style: {
      border: '1px solid #fecaca',
      background: '#fef2f2',
    },
  },
  loading: {
    iconTheme: {
      primary: '#3b82f6',
      secondary: '#fff',
    },
    style: {
      border: '1px solid #dbeafe',
      background: '#eff6ff',
    },
  },
};

export const showToast = {
  success: (message) => toast.success(message, toastOptions.success),
  error: (message) => toast.error(message, toastOptions.error),
  loading: (message) => toast.loading(message, toastOptions.loading),
  dismiss: (toastId) => toast.dismiss(toastId),
  promise: (promise, messages) => {
    return toast.promise(
      promise,
      {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Something went wrong!',
      },
      toastOptions
    );
  },
};

const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={toastOptions}
    />
  );
};

export default ToastContainer;