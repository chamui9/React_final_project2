import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      setLoading2(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setSimilarProducts(data.slice(0, 4));
        setLoading2(false);
      } catch (error) {
        console.error("Error fetching similar products:", error);
        setLoading2(false);
      }
    };

    fetchSimilarProducts();
  }, []);

  const Loading2 = () => {
    return (
      <>
      <div className="my-4 py-4">
        <div className="d-flex">
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
        </div>
      </div>
    </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <div className="py-4 my-4">
        <div className="d-flex">
          {similarProducts.map((item) => (
            <div key={item.id} className="card mx-4 text-center">
              <img
                className="card-img-top p-3"
                src={item.image}
                alt="Card"
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title.substring(0, 15)}...
                </h5>
              </div>
              <div className="card-body">
                {/* Additional information or buttons */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };



  return (
    <>
      {/* Your existing home content */}
      <div className="hero border-1 pb-3">
        {/* Existing content */}
      </div>

      {/* Render Payment Methods */}
  

      {/* Render Marquee with similar products */}
      <div className="container">
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2>Recommended</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;