import { Users } from "lucide-react";
import { members } from "../data/members";
function Members() {
  return (
    <section className="px-6 mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Users className="text-blue-700" />
        <h2 className="text-4xl font-bold text-blue-900">Les membres du bureau</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg p-5 text-center w-64 flex-shrink-0"
          >
            <img
              src={member.image}
              className="w-28 h-28 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 font-bold text-lg">
              {member.name}
            </h3>
            <p className="text-gray-600">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Members;