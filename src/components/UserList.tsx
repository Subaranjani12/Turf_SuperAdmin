import { useState } from "react";
import { Search } from "lucide-react";
import { userList } from "../data/dashboardData";

export default function UserList() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedUser = userList.find(
    (user) => user.id === selectedUserId
  );

  return (
    <div className="flex gap-8 bg-gray-100 p-4 min-h-[600px] rounded-lg">
      {/* ================= LEFT : USER LIST ================= */}
      <div className="w-1/4 flex flex-col gap-4 -ml-3">

        {/* HEADER ROW */}
        <div className="flex items-center justify-between -mt-4">
          <h2 className="font-bold text-lg">User List</h2>

          {/* SEARCH BAR */}
          <div className="relative w-[220px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search for a User"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                h-9
                pl-9
                pr-3
                rounded-md
                bg-[#f2f4f7]
                border
                border-gray-300
                text-sm
                text-gray-700
                placeholder-gray-500
                outline-none
                focus:border-gray-400
              "
            />
          </div>
        </div>

        {/* USER LIST (FILTERED) */}
        {filteredUsers.map((user) => {
          const isActive = user.id === selectedUserId;

          return (
            <button
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={`flex items-center gap-3 p-3 rounded-md border ${
                isActive
                  ? "border-gray-700 bg-white shadow"
                  : "border-transparent bg-white hover:bg-gray-50"
              }`}
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gray-200" />

              {/* User Info */}
              <div className="flex flex-col text-left text-sm">
                <span className="font-semibold">{user.name}</span>
                <span className="text-xs text-gray-500">
                  {user.since}
                </span>
              </div>

              {/* Phone */}
              <span className="ml-auto text-xs text-gray-400">
                {user.phone}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow">
        {selectedUserId === null ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-lg">
            Select a user to see details
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">
              {selectedUser?.name}
            </h3>
            <p className="text-gray-600 mb-1">
              {selectedUser?.since}
            </p>
            <p className="text-gray-600">
              {selectedUser?.phone}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
