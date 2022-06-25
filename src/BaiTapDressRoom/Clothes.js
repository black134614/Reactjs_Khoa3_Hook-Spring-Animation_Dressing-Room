import React from 'react';
import data from './Data.json';
import { useDispatch, useSelector } from 'react-redux';
import { changeClothes } from '../redux/actions/actions';


export default function Clothes(props) {


    const dispatch = useDispatch();
    const currentClothes = useSelector(state => state.dressRoomReducer.activeClothes);
    const currentClothesValueArr = Object.values(currentClothes);


    const renderTabMenu = () => {
        return data.navPills.map((item, index) => {
            return <li key={index} className="nav-item">
                <a className={index === 0 ? 'nav-link active btn-default' : 'nav-link  btn-default'}
                    data-toggle="pill" href={'#' + item.type}>{item.showName}</a>
            </li>
        });
    }

    const renderTabPane = () => {
        return data.navPills.map((item, index) => {
            return <div key={index} className={index === 0 ? 'tab-pane container active' : 'tab-pane container'} id={item.type}>
                <div className="container" >
                    <div className="row">
                        {renderClothes(item.type)}
                    </div>
                </div>
            </div>
        })
    }

    const renderClothes = (type) => {
        return data.tabPanes.map((item, index) => {
            if (item.type === type) {
                return <div className="col-md-3" key={index}>
                    <div className="card text-center">
                        <img src={item.imgSrc_jpg} alt={item.desc} />
                        <h4><b>{item.name}</b></h4>
                        {currentClothesValueArr.findIndex(type => type === item.imgSrc_png) === -1
                            ?
                            <button onClick={(e) => {
                                dispatch(changeClothes(item));
                                //get possion of this button to set for clone img 
                                const getBounding = e.target.parentElement.getBoundingClientRect();
                                renderImgClone(e, item.imgSrc_jpg, getBounding.top, getBounding.left);
                            }}>
                                Thử đồ
                            </button>
                            :
                            <button disabled>Đã mặc</button>}
                    </div>
                </div>

            }
            return '';
        })
    }

    const renderImgClone = (e, src, top, left) => {
        const cloneImg = document.createElement('img');
        cloneImg.src = src;
        cloneImg.style.position = 'fixed';
        cloneImg.style.top = top + 'px';
        cloneImg.style.transform = 'scale(0)';
        cloneImg.style.left = left + 'px';
        cloneImg.style.zIndex = 999;
        cloneImg.classList.add('img-clone');
        e.target.parentElement.append(cloneImg);
        setTimeout(
            () => {
                const cloneImg = e.target.parentElement.querySelector('.img-clone');
                cloneImg.style.left = '1172px';
                cloneImg.style.transform = 'scale(1)';
            },
            300
        );
        setTimeout(
            () => {
                const cloneImg = e.target.parentElement.querySelector('.img-clone');
                cloneImg.remove();
            },
            1300
        );
    }

    return (
        <div className="col-md-8">
            <ul className="nav nav-pills">
                {renderTabMenu()}
            </ul>
            <div className="well">
                {/* Tab panes */}
                <div className="tab-content">
                    {renderTabPane()}
                </div>
            </div>
        </div>
    )
}
