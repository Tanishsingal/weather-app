import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center bg-red-50 text-red-700 p-4 rounded-lg">
      <AlertCircle className="w-5 h-5 mr-2" />
      <span>{message}</span>
    </div>
  );
};