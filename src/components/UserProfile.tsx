import React from "react";

interface UserProfileProps {
  fullName: string;
  email: string;
}

export default function UserProfile({ fullName, email }: UserProfileProps) {
  return (
    <div className="mb-8 pt-8 lg:pt-0 transform transition-all duration-700 delay-100">
      <div className="font-semibold text-gray-900 dark:text-white text-lg">
        {fullName || "user full name"}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {email || "user email"}
      </div>
    </div>
  );
}
