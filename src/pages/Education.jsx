import React from "react";
import Card from "../components/Card";

const Education = ({ educationData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      {/* TODO: Replace All hard coded values with data from resumeData.js */}
      <h1 className="text-3xl font-bold mb-8">Education</h1>

      {
        educationData.map((eduItem, index) => {
          return (
            <Card
             key={index}
             header={eduItem.schooName}
             title={eduItem.specialization.substring(19, -1)}
             subtitle={`${eduItem.specialization} * ${eduItem.monthOfPassing} ${eduItem.yearOfPassing}`}
            >

            {
            //assuming this bottom half is supoosed to be keep for demo reasoning without changes. template
            }
            <div className="space-y-4">
              <p className="text-gray-600">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>GPA: 3.8/4.0</li>
                <li>Major: Computer Science</li>
                <li>Minor: Mathematics</li>
                <li>{eduItem.achievements}</li>
              </ul>
            </div>
            </Card>
          )
        })
      }
      {/* static template
      <Card
        header="School 1"
        title="Bachelor of Science"
        subtitle="Computer Science • 2018-2022"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>GPA: 3.8/4.0</li>
            <li>Major: Computer Science</li>
            <li>Minor: Mathematics</li>
          </ul>
        </div>
      </Card>
      */}
    </div>
  );
};

export default Education;
