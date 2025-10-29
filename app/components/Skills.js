import React from "react";
import { skills } from "../utils/data";

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-900 text-white py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="bg-gray-700 rounded-lg p-4 flex items-center gap-4">
                                <img src={`https://skillicons.dev/icons?i=${skill.value}`} />
                                <span className="text-lg">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
