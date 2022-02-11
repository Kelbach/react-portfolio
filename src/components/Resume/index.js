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
            <p>Below is my old Resume. The new is in the works!</p>
            <a href={require("./20190826_kelbach_resume_science.pdf")} download="Resume2019">Download my Old Resume here</a>
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