import React, { useState, useEffect } from "react";
import { fetchProjects } from "../../api/api";
import "./grid.css";
import Card from "../Gard/Card";

const Grid = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(10);
  
    useEffect(() => {
      const loadProjects = async () => {
        try {
          const data = await fetchProjects(currentPage, pageSize);
          setProjects(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      loadProjects();
    }, [currentPage, pageSize]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    if (loading) return <p>Завантаження...</p>;
    if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;
  
    return (
      <>
        <div className="project-grid">
          {projects.map((project) => (
            <Card key={project._id} project={project} />
          ))}
        </div>
        <div className="pagination">
          <button disabled={currentPage === 0} onClick={() => handlePageChange(currentPage - 1)}>
            &lt; Назад
          </button>
          <span>Сторінка {currentPage + 1}</span>
          <button onClick={() => handlePageChange(currentPage + 1)}>Вперед &gt;</button>
        </div>
      </>
    );
  };
  

export default Grid;
