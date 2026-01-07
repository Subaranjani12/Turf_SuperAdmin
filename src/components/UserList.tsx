import { useState } from "react";
import {
  Search,
  Star,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users as UsersIcon,
} from "lucide-react";
import { userList, userProfileData } from "../data/dashboardData";

export default function UserList() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);
  const [search, setSearch] = useState("");

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedUser = userList.find(
    (user) => user.id === selectedUserId
  );

  const selectedProfile = userProfileData.find(
    (user) => user.id === selectedUserId
  );

  return (
    <div className="flex gap-8 bg-gray-100 p-4 min-h-[600px] rounded-lg">
      {/* ================= LEFT : USER LIST ================= */}
      <div className="w-1/4 flex flex-col gap-4 -ml-3">
        <div className="flex items-center justify-between -mt-4">
          <h2 className="font-bold text-lg">User List</h2>

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
              className="w-full h-9 pl-9 pr-3 rounded-md bg-[#f2f4f7] border border-gray-300 text-sm"
            />
          </div>
        </div>

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
              <div className="w-10 h-10 rounded-full bg-gray-200" />

              <div className="flex flex-col text-left text-sm">
                <span className="font-semibold">{user.name}</span>
                <span className="text-xs text-gray-500">
                  {user.since}
                </span>
              </div>

              <span className="ml-auto text-xs text-gray-400">
                {user.phone}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= RIGHT : USER DETAILS ================= */}
      <div className="flex-1 bg-white rounded-lg p-8 shadow">
        {!selectedUser || !selectedProfile ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-lg">
            Select a user to see details
          </div>
        ) : (
          <>
            {/* ===== TOP PROFILE + STATS ===== */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {selectedUser.name}
                  </h2>
                  <p className="text-gray-500">
                    {selectedUser.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                {/* Revenue Card */}
                <div className="bg-[#F2F4F7] rounded-2xl p-6 w-[212px] h-[124px]">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-gray-700" />
                  </div>
                  <p className="text-xl font-bold">
                    ₹{selectedProfile.revenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Revenue by {selectedUser.name.split(" ")[0]}
                  </p>
                </div>

                {/* Active Users Card */}
                <div className="bg-[#F2F4F7] rounded-2xl p-6 w-[212px] h-[124px]">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3">
                    <UsersIcon className="w-5 h-5 text-gray-700" />
                  </div>
                  <p className="text-xl font-bold">
                    {selectedProfile.activeUsers}
                  </p>
                  <p className="text-sm text-gray-500">
                    Active User
                  </p>
                </div>
              </div>
            </div>

            {/* ===== DIVIDER ===== */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 border-t border-dashed" />
              <p className="text-gray-500 font-medium">
                {selectedUser.name.split(" ")[0]}'s Bookings
              </p>
              <div className="flex-1 border-t border-dashed" />
            </div>

            {/* ===== BOOKINGS LIST ===== */}
            <div className="flex flex-col gap-10">
              {selectedProfile.bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100" />

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold">
                          {booking.turfName}
                        </h4>
                        {booking.status === "verified" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-orange-400" />
                        )}
                      </div>

                      <p className="text-sm text-gray-500">
                        {booking.since}
                      </p>

                      <div className="flex gap-2 mt-2">
                        {booking.sports.map((sport) => (
                          <span
                            key={sport}
                            className="px-3 py-1 text-xs rounded-full border bg-white"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">
                      {booking.location}
                    </p>
                    <div className="flex gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i <= booking.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
