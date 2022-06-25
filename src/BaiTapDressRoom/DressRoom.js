import React from 'react';
import '../assets/css/dressRoomStyle.css';
import Clothes from './Clothes';
import ClothesReview from './ClothesReview';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    return (
        <div className='container-fluid'>
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="text-center">
                                <img src="/images/cybersoft.png" alt="Card image" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">
                                    CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                    - Virtual Dressing Room
                                </h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Clothes/>
                    <ClothesReview/>
                </div>
            </div>

        </div>
    )
}
