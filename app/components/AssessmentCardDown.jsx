

const AssessmentCardDown = ({ title, items }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              {item.icon && <item.icon className="w-6 h-6 mr-2" />}
              <span>{item.label}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default AssessmentCardDown;
  