import React from 'react';
// import { Document, Page } from 'react-pdf';

function Resume() {
    return (
        <section id="about-me" className="fade">
          <div className="title">
            <h2>Resume</h2>
          </div>
          <article>
            <a className="school" href="https://bootcamp.case.edu/coding/"><strong>Case Western Reserve University Coding Bootcamp<br/>
             Full-Stack Web Development</strong><br/></a>
            <i><small>Graduated Feb. 2022</small></i>
            <p>Please have a look! <br/>Below is my technical resume for web development. </p>
            <a href={require("./Resume.pdf")} download="Kelbach Technical Resume for Full Stack Web Dev">Download my Resume here</a>
            <p>Proficiencies: </p>
            <ol>
                <li>Javascript/Java:
                    <ul>
                        <li>MERN/MEAN stack</li>
                        <li>Dynamic Applications created with React and Angular</li>
                        <li>Databases built in Mongo, SQL, GraphQL</li>
                        <li>Accessibility and functionality for Progressive Web Apps</li>
                        <li>Back-end app creation with Express, Node, Maven, Tomcat, Hibernate, SpringBoot</li>
                    </ul>
                </li>
                <li>Front-end UI design with HTML, CSS, Bootstrap</li>
                <li>Git, Github, Heroku</li>
            </ol>
          </article>
        </section>
    );
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document
//         file="somefile.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>
//     </div>
//   );
}

export default Resume;