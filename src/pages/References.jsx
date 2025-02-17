import React from "react";
import Card from "../components/Card";

const References = ({ referencesData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      {/* TODO: Replace All hard coded values with data from resumeData.js */}

        {
            referencesData.map((refItem, index) => {
                return (
                    <div key={index} className="mb-8">
                    <Card title={refItem.name}>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Relationship: {refItem.description}</h3>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                          <ul className="list-disc list-inside text-gray-600">
                            <li>Email: {refItem.email}</li>
                            <li>Phone: {refItem.phone}</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
            })
        }
    </div>
  );
};

export default References;
