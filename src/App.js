import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import './App.css';

function LoaderCell() {
  return (
    <div style={{ width: '100%', height: '100%' }} className="purple">
      <ContentLoader
        speed={0.8}
        width={'100%'} // Adjusted width to fill the cell
        height={'100%'} // Adjusted height to fill the cell
        viewBox="0 0 600 900" //x y width height
        backgroundColor="#D2B4DE"
        foregroundColor="#FFF4E9"
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "25px",
          paddingRight: "25px"
        }}
      >
        <rect x="10" y="0" rx="0" ry="0" width="2" height="850" /> {/* Left */}
        <rect x="598" y="0" rx="0" ry="0" width="2" height="850" /> {/* Right */}
        <rect x="10" y="0" rx="0" ry="0" width="600" height="2" /> {/* Top */}
        <rect x="10" y="850" rx="0" ry="0" width="600" height="2" /> {/* Bottom */}

        {/* Modified rectangle with increased height and width */}
        <rect x="30" y="30" rx="10" ry="10" width="550" height="300" /> {/* Increase height and width here */}

        {/* Additional placeholders for other elements with a gap of 5 */}
        <rect x="150" y="345" rx="0" ry="0" width="290" height="20" /> {/* Line */}
        <rect x="50" y="385" rx="0" ry="0" width="510" height="10" /> {/* Line*/}
        <rect x="50" y="400" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="415" rx="0" ry="0" width="480" height="10" />
        <rect x="50" y="430" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="445" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="460" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="475" rx="0" ry="0" width="405" height="10" />
        <rect x="50" y="490" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="505" rx="0" ry="0" width="510" height="10" /> {/* Line*/}
        <rect x="50" y="520" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="535" rx="0" ry="0" width="465" height="10" />
        <rect x="50" y="550" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="565" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="580" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="595" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="610" rx="0" ry="0" width="435" height="10" />
        <rect x="50" y="625" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="640" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="655" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="670" rx="0" ry="0" width="480" height="10" /> {/* Line */}
        <rect x="50" y="685" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="700" rx="0" ry="0" width="510" height="10" />
        <rect x="50" y="715" rx="0" ry="0" width="320" height="10" />
        <rect x="200" y="780" rx="5" ry="5" width="200" height="50" /> {/* Bottom square */}
      </ContentLoader>
    </div>
  );
}

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //setLoading(false); // Set loading to false after 1000ms
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Loader">
      {loading && (
        <div className="table-div">
          <header className="Loader-header">
            <table className="loader-table">
              <tbody>
                {[...Array(1)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <LoaderCell />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </header>
        </div>
      )}
    </div>
  );
}

export default Loader;