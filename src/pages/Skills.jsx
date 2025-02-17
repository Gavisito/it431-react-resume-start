import React from "react";
import Card from "../components/Card";

const Skills = ({ skillsData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      {/* TODO: Replace All hard coded values with data from resumeData.js */}
      <div className="mb-8">

        {
            skillsData.map((skillItem, index) => {
                return (
                    <Card
                        key={index}
                        title= {skillItem.skillname}
                    >
                    <div className="space-y-4">
                        <div>
                        <ul className="list-disc list-inside text-gray-600">
                            <li> {skillItem.yearsOfExperience} Year of experience</li>
                        </ul>
                        </div>
                    </div>
                    </Card>
                )
            })
        }
        {

            /*
                    <Card title="Skill Item">
          <div className="space-y-4">
            <div>
              <ul className="list-disc list-inside text-gray-600">
                <li> number Years of experience</li>
              </ul>
            </div>
          </div>
        </Card> */
        }
      </div>
    </div>
  );
};

export default Skills;