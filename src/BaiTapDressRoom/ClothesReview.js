import React, { useMemo, useEffect } from 'react';
import { useSpring, animated, useTransition } from 'react-spring'
import { useSelector } from 'react-redux';
import Background from './Background';
import BikiniBottom from './BikiniBottom';
import BikiniTop from './BikiniTop';
import Feet from './Feet';
import HairStyle from './HairStyle';
import HandBag from './HandBag';
import Necklace from './Necklace';

export default function ClothesReview(props) {
  const activeClothes = useSelector(state => state.dressRoomReducer.activeClothes);
  const clothesMemo = useMemo(() => ({ ...activeClothes }), [activeClothes]);

  const changeAnimation = useSelector(state => state.dressRoomReducer.isChange);
  const style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },reset: true, config: { duration: 2000 }})

return (
  <div className="col-md-4">
    <animated.div style={style} className="contain">
      <div className="body" />
      <div className="model" />
      <HairStyle hairstyle={clothesMemo.hairstyle} />
      <Necklace necklaces={clothesMemo.necklaces} />
      <BikiniTop topclothes={clothesMemo.topclothes} />
      <BikiniBottom botclothes={clothesMemo.botclothes} />
      <HandBag handbags={clothesMemo.handbags} />
      <Feet shoes={clothesMemo.shoes} />
      <Background background={clothesMemo.background} />
    </animated.div>
  </div>
)
}
