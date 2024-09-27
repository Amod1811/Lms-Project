import React, { useEffect, useRef } from 'react';
import PureCounter from 'purecounterjs';

const Counter = () => {

    const countersRef = useRef(null);

  useEffect(() => {
    const options = {
      start: 0,
      end: 10,
      duration: 2,
      delay: 10,
      once: true,
    };
    
    // Initialize the counters
    const pureCounter = new PureCounter({ ...options, selector: '.purecounter' });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          pureCounter.start();
          observer.unobserve(entry.target); // Stop observing after starting the counter
        }
      });
    });

    // Observe the counter element
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);


  return (
    <section className="py-0 py-xl-5">
    <div className="container" ref={countersRef}>
      <div className="row g-4">
        {/* Counter item */}
        <div className="col-sm-6 col-xl-3">
          <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
            <span className="display-6 lh-1 text-warning mb-0"><i className="fas fa-tv" /></span>
            <div className="ms-4 h6 fw-normal mb-0">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={10} data-purecounter-duration={2}>0</h5>
                <span className="mb-0 h5">K</span>
              </div>
              <p className="mb-0">Online Courses</p>
            </div>
          </div>
        </div>
        {/* Counter item */}
        <div className="col-sm-6 col-xl-3">
          <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3">
            <span className="display-6 lh-1 text-blue mb-0"><i className="fas fa-user-tie" /></span>
            <div className="ms-4 h6 fw-normal mb-0">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={200} data-purecounter-duration={2}>0</h5>
                <span className="mb-0 h5">+</span>
              </div>
              <p className="mb-0">Expert Tutors</p>
            </div>
          </div>
        </div>
        {/* Counter item */}
        <div className="col-sm-6 col-xl-3">
          <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
            <span className="display-6 lh-1 text-purple mb-0"><i className="fas fa-user-graduate" /></span>
            <div className="ms-4 h6 fw-normal mb-0">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={60} data-purecounter-duration={2}>0</h5>
                <span className="mb-0 h5">K+</span>
              </div>
              <p className="mb-0">Online Students</p>
            </div>
          </div>
        </div>
        {/* Counter item */}
        <div className="col-sm-6 col-xl-3">
          <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
            <span className="display-6 lh-1 text-info mb-0"><i className="bi bi-patch-check-fill" /></span>
            <div className="ms-4 h6 fw-normal mb-0">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={6} data-purecounter-duration={2}>0</h5>
                <span className="mb-0 h5">K+</span>
              </div>
              <p className="mb-0">Certified Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Counter