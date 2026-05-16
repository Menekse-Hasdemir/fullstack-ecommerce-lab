import bestImage1 from '../assets/23057910d190d178c2a7b276e896b9d38b982bf6.jpg';
import bestImage2 from '../assets/edfda1c222054dedce3ff32fe480d8fc8eb07474.jpg';
import bestImage3 from '../assets/4a6a10161217dc07ba1cda4632e93a5851162bcb.jpg';
import bestImage4 from '../assets/74e648e43f346f3e64ec6890751ec33b3c7f5197.jpg';
import bestImage5 from '../assets/41ba1a582a6be5d0abdf4716fbac8cd3a73cb266.jpg';
import bestImage6 from '../assets/a4b9d5defc9e3b83803619da05903140ffc77947.jpg';
import bestImage7 from '../assets/110bc11c4432558f247264194359558513a225fe.jpg';
import bestImage8 from '../assets/c91168410dcfe4d267b32aaf7b21288f7b9656f2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

const commonData = {
  reviews: "10 Reviews",
  oldPrice:"16,48",
  newPrice: "6,48",
  availability: "In Stock",
  description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.",
  colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
  actions: [faHeart, faShoppingCart, faEye],
  thumbnails: [1, 2],
  rating: 4
}

export const products=[
    { id: 1, img: bestImage1, title: "Floating Phone", ...commonData },
      { id: 2, img: bestImage2, title: "Graphic Design", ...commonData },
      { id: 3, img: bestImage3, title: "Graphic Design", ...commonData },
      { id: 4, img: bestImage4, title: "Graphic Design", ...commonData },
      { id: 5, img: bestImage5, title: "Graphic Design", ...commonData },
      { id: 6, img: bestImage6, title: "Graphic Design", ...commonData },
      { id: 7, img: bestImage7, title: "Graphic Design", ...commonData },
      { id: 8, img: bestImage8, title: "Graphic Design", ...commonData },
]