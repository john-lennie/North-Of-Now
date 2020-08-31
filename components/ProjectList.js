import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import { projectListStyles } from 'styles'

const ProjectList = ({ category, projects }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [projectList, setProjectList] = useState(projects);
  const form = category =="long-form" ? "long-form" : "short-form";

  // const projectLinks = [];
  //
  // projectList.map((project, index) => (
  //   projectLinks.push(project.title.replace(/['"]+/g, '').split(' ').join('-').toLowerCase())
  // ))
  //
  // console.log(projectLinks);

  const handleDateChange = (event) => {
    // date chosen, type is "" or "All"
    if (event.target.value !== "All" && {type}.type === "") {
      setProjectList(projects.filter(project => project.data.date.slice(0, 4) === event.target.value))
    }
    // date is All, only type chosen
    if (event.target.value === "All" && {type}.type !== "") {
      setProjectList(projects.filter(project => project.data.type === {type}.type))
    }
    // date chosen and type chosen
    if (event.target.value !== "All" && {type}.type !== "") {
      setProjectList(projects.filter(project => project.data.date.slice(0, 4) === event.target.value && project.data.type === {type}.type))
    }
    // type is All, date is all
    if (event.target.value === "All" && {type}.type === "") {
      setProjectList(projects)
    }
    if (event.target.value === "All") {
      setDate("")
    } else {
      setDate(event.target.value)
    }
  }
  const handleTypeChange = (event) => {
    // type chosen, date is "" or "All"
    if (event.target.value !== "All" && {date}.date === "") {
      setProjectList(projects.filter(project => project.data.type === event.target.value))
    }
    // type is All, only date chosen
    if (event.target.value === "All" && {date}.date !== "") {
      setProjectList(projects.filter(project => project.data.date.slice(0, 4) === {date}.date))
    }
    // type chosen and date chosen
    if (event.target.value !== "All" && {date}.date !== "") {
      setProjectList(projects.filter(project => project.data.type === event.target.value && project.data.date.slice(0, 4) === {date}.date))
    }
    // type is All, date is all
    if (event.target.value === "All" && {date}.date === "") {
      setProjectList(projects)
    }
    if (event.target.value === "All") {
      setType("")
    } else {
      setType(event.target.value)
    }
  }

  return (
    <div className="container">
      <div className="filterBy">
        Filter By:
        <span className="floatR">
          <span className="filterByDate">
            <span className="grey">Year</span>
            <select onChange={handleDateChange}>
              <option value="All">All</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </span>
          <span className="filterByType">
            <span className="grey">Type</span>
            {
              form =="long-form" ? (
                <select onChange={handleTypeChange}>
                  <option value="All">All</option>
                  <option value="Documentary">Documentary</option>
                </select>
              ) : (
                <select onChange={handleTypeChange}>
                  <option value="All">All</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Music Video">Music Video</option>
                </select>
              )
            }
          </span></span>
      </div>
      <div className={form === "long-form" ? "long-form-project-thumbs" : "short-form-project-thumbs"}>
        {projectList.map((project, index) => (
          <div className="project-thumb" key={index}>
            <div className="meta">
              <p className="title fw500">{project.data.title}</p>
              <p><span className="grey">Date:</span> {project.data.date}</p>
              <p><span className="grey">Type:</span> {project.data.type}</p>
            </div>
            <div className="project-img">
              <DocLink link={ `/projects/${form}/${project.uid}` }>
                <img
                  src={project.data.thumbnail.url}
                  alt={project.data.thumbnail.alt}
                />
              </DocLink>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{projectListStyles}</style>
    </div>
  )
}

export default ProjectList
