
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce JavaScript',
    category: 'HTML, CSS, JavaScript',
    description:
      'An online shopping website with product listings, shopping cart and user-friendly interface.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700',
    link:
      'https://bootstrap-project-company-vyfj.vercel.app/'
  },
  {
    id: 2,
    title: 'Booksky App',
    category: 'HTML, CSS, JavaScript',
    description:
      'A book management application to add, view and manage book information.',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700',
    link:
      'https://bookskyjsproject.vercel.app/'
  },
  {
    id: 3,
    title: 'E-Commerce React',
    category: 'React.js',
    description:
      'A React-based shopping application with product browsing and cart management.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700',
    link:
      'https://e-commerce-react-delta-sage.vercel.app/'
  },
  {
    id: 4,
    title: 'Expense Tracker',
    category: 'React.js',
    description:
      'An expense management application to track income, expenses and transactions.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700',
    link:
      'https://expense-tracker-pearl-one-37.vercel.app/'
  },
  {
    id: 5,
    title: 'Bootstrap Company Website',
    category: 'HTML, CSS, Bootstrap',
    description:
      'A responsive company website with services, portfolio and contact sections.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700',
    link:
      'https://bootstrap-project-company.vercel.app/'
  },
  {
    id: 6,
    title: 'MiniERP Management System',
    category: 'MERN Stack',
    description:
      'An employee and department management system developed using MongoDB, Express.js, React.js and Node.js.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700',
    link:
      'https://mini-erp-mern-project.vercel.app/'
  }
];

function Project() {
  return (
    <section id="projects" className="section-padding">

      <div className="container">

        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <p className="section-subtitle">
          Explore my web development projects and practical experience.
        </p>

        <div className="row g-4">

          {projects.map((project) => (

            <div
              className="col-lg-4 col-md-6"
              key={project.id}
            >

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Live Project →
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Project;
