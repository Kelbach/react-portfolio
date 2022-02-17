import React from 'react';
// import { Document, Page } from 'react-pdf';

function Resume() {
    return (
        <section id="about-me">
          <div className="title">
            <h2>Resume</h2>
          </div>
          <article>
            <p>Proficiencies: </p>
            <ol>
                <li>Javascript:
                    <ul>
                        <li>MERN stack</li>
                        <li>Progressive Web Apps</li>
                        <li>SQL, MVC, ORM</li>
                        <li>Express, Node, API's</li>
                    </ul>
                </li>
                <li>HTML</li>
                <li>CSS</li>
            </ol>
            <p>Below is my technical resume for web development. Please have a look!</p>
            <a href={require("./Resume.pdf")} download="Kelbach Technical Resume for Full Stack Web Dev">Download my Resume here</a>
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