import React from "react";
import Card from "../components/Card";

const Employment = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      {/* TODO: Replace All hard coded values with data from resumeData.js */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Company ABC</h1>
        <Card title="Software Engineer (Jan 2013 - Present)">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Summary</h3>
              <p className="text-gray-600">
                Your role summary and responsibilities go here...
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Major achievement one</li>
                <li>Major achievement two</li>
                <li>Major achievement three</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Company DEF</h1>
        <Card title="Software Engineer (Jan 2013 - Present)">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Summary</h3>
              <p className="text-gray-600">
                Your role summary and responsibilities go here...
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Major achievement one</li>
                <li>Major achievement two</li>
                <li>Major achievement three</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Employment;
