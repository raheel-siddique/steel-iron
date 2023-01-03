import React from "react";

const DetailHiglights = ({ singlePropertyDetails }) => {
  

  return (
    <>
      <div
        style={{ backgroundColor: "#9b51e0" }}
        className="text-light ltn__apartments-plan-area product-details-apartments-plan mt-5"
      >
        <div className="text-center  ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center--- mt-5 pt-2">
          <div className="nav">
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_1"
              className="active text-light"
            >
              Highlights
            </a>
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_2"
              className="rounded text-light"
            >
              Financials
            </a>
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_3"
              className="rounded text-light"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      <div className="tab-content active">
        <div className="tab-pane fade active " id="liton_tab_3_1">
          <div className="ltn__apartments-tab-content-inner">

            <div
              style={{
                backgroundColor: "white",
                display: "flex",
              }}
              className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
            >
              <div className="table-responsive mt-50 mb-5 col-lg-6">
                <table className="table">
                  <tbody
                    style={{
                      backgroundColor: "white",
                    }}
                  >

                    <tr style={{ backgroundColor: "white" }}>
                      <th style={{backgroundColor: "white"}}>
                        Expected Income :
                      </th>
                      <td style={{ backgroundColor: "white" }}>
                        13
                      </td>
                    </tr>
                 
                    <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray" }} >
                      <th scope="col">Rent Per Token:</th>
                      <td>
                       345
                      </td>
                    </tr>
                      <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray", }} >
                        <th scope="col">Token Price:</th>
                        <td>
                          fdfgh
                        </td>
                      </tr>
                    <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray" }} >
                      <th scope="col">Total Tokens :</th>
                      <td>
                       sdfghjk
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-50 mb-5 col-lg-6">
                <table className="table">
                  <tbody>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Property type: </th>
                      <td>
                        sdfgh
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Full Address:</th>
                      <td>tryfug</td>
                    </tr>

                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Neighborhood:</th>
                      <td>
                       dsgffhkj
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Construction Year: </th>
                      <td>
                       dfghjl;
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Stories:</th>
                      <td>
                       dfhgkh
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }}>
                      <th
                        style={{
                          backgroundColor: "white"
                        }}
                      >
                        Bedroom/Bath:
                      </th>
                      <td
                        style={{
                          backgroundColor: "white"
                        }}
                      >
                       dsdfygig
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Rental Type:</th>
                      <td>
                        stdfu
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Rented?:</th>
                      <td>
                        sdfygk
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Section 8?:</th>
                      <td>
                        dfgfj
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_tab_3_2">
          <div className="ltn__apartments-tab-content-inner">
            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  // justifyContent: "space-around",
                }}
                className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
              >
                <div className="table-responsive mt-50 mb-5 col-sm-12">
                  {/* <h4 className="text-center">Order Details</h4> */}
                  <table className="table">
                    <tbody>
                      {/* {singlePropertyDetails?.data?.data?.Financials
                        ?.grossRentPerMonth && ( */}
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          Gross Rent / year:
                        </th>
                        <td
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          4578
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Gross Rent / month:</th>
                        <td>
                         dsrtdfy
                        </td>
                      </tr>
                      {/* )} */}

                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Management:</th>
                        <td>
                         dfydui
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Smart Crowd Platform:</th>
                        <td>
                          45r6tyuio
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white",
                            borderBottomColor: "lightgray",
                          }}
                        >
                          Maintenance Expenses:
                        </th>
                        <td
                          style={{
                            backgroundColor: "white",
                            borderBottomColor: "lightgray",
                          }}
                        >
                          dsty
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Taxes:</th>
                        <td>
                          fdfy
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Insurance:</th>
                        <td>
                         457
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Utilities: </th>
                        <td>
                         23
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Initial Maintenance Reserve : </th>
                        <td>
                         78
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_tab_3_3">
          <div className="ltn__apartments-tab-content-inner">
            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
              {/* newlist */}
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  // justifyContent: "space-around",
                }}
                className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
              >
                <div className="table-responsive mt-50 mb-5 col-lg-6 col-sm-12">
                  <table className="table">
                    <tbody>
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          Lot Size (sqft):
                        </th>
                        <td
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                         fdgfj
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Foundation:</th>
                        <td>467</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Parking:</th>
                        <td>78</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mt-50 mb-5 col-lg-6 col-sm-12">
                  {/* <h4 className="text-center">Order Details</h4> */}
                  <table className="table">
                    <tbody>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Heating:</th>
                        <td>4565</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Cooling:</th>
                        <td>769</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Building Class:</th>
                        <td>3464</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Renovated:</th>
                        <td>23</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Manager:</th>
                        <td>22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailHiglights;
