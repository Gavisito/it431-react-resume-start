import React from "react";
import Card from "../components/Card";

const Education = ({ educationData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      {/* TODO: Replace All hard coded values with data from resumeData.js */}
      <h1 className="text-3xl font-bold mb-8">Education</h1>

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

      <Card header="School 2" title="High School Diploma" subtitle="2014-2018">
        <div className="space-y-4">
          <p className="text-gray-600">
            Relevant coursework and achievements during high school education.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Honor Roll Student</li>
            <li>Advanced Placement Courses</li>
            <li>Academic Achievements</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Education;
