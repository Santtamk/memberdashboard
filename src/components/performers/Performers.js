import Image from "next/image";
import './TopSection.css';

const Performers = ({ header, employees }) => {
  return (
    <div className="w-full md:w-96 h-80 performanceCard mb-2 container ">
      <div className="flex justify-between performanceCard-header">
        <div className="text-base font-semibold">{header}</div>
        <div className="flex performanceCard-sideHeader">
          <div className="cursor-pointer performanceCard-sideHeader-text">
            This week Trend
          </div>
        </div>
      </div>
      <hr />
      {employees.map((employee) => (
        <div key={employee.id} className="flex flex-row performers-map">
            <div className="flex justify-center items-center TopSection-icons p-4">
            <Image
                src={employee.profilePicture}
                className="rounded-3xl"
                alt="User"
                width={35}
                height={35}
            />
            </div>
            <div className="flex justify-between items-center flex-1 performers-flexissue">
            <div className="flex flex-col justify-center items-center">
                <div className="font-medium text-sm text-[#4B465C]">{employee.name}</div>
                <div className="font-normal text-xs text-[#C0C0C0]">{employee.name}</div>
            </div>
            <div className="flex items-center text-[#A9A9A9]">{employee.score}</div>
            </div>
        </div>
        ))}
    </div>
  );
};

export default Performers;
