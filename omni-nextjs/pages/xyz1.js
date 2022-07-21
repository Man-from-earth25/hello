

export default function About() {
    return (
        <>
            <div id="screen1">
              <h1>Hemepage</h1>
              {/*Segment*/}    
              <div id="segment2" className="bg-light ">
                <div id="segment2-item1" className="segment-item2 bg-light"> item1 </div>
                <div id="segment2-item2" className="segment-item2 bg-light"> item2 </div>
              </div>
              <div id="segment-indicator2" className="op" />
              <div id="segment3" className="bg-light ">
                <div id="segment3-item1" className="segment-item3 bg-light"> item1 </div>
                <div id="segment3-item2" className="segment-item3 bg-light"> item2 </div>
                <div id="segment3-item3" className="segment-item3 bg-light"> item3 </div>
              </div>
              <div id="segment-indicator3" className="op" />
              <div className id="welcome">
                <h1>Never give up!</h1>
              </div>
            </div>        
        </>
    )
};
