import { Swiper, SwiperSlide } from 'swiper/react';
import imagen2 from '../../assets/img/video-2.png'
import imagen3 from '../../assets/img/video-3.png'
import imagen4 from '../../assets/img/video-4.png'
import imagen5 from '../../assets/img/video-5.png'
import imagen6 from '../../assets/img/video-6.png'
import imagen7 from '../../assets/img/video-7.png'
import imagen8 from '../../assets/img/video-8.png'
import imagen9 from '../../assets/img/video-1.png'

// Import Swiper styles
import 'swiper/css';
import { Pagination, Navigation } from "swiper";

import { CardVideo } from '../CardVideo';

export function Carrucel({color}) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            <SwiperSlide>
                <CardVideo link={'#'} src={imagen2} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen3} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen4} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen5} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen6} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen7} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen8} color={color} />
            </SwiperSlide>
            <SwiperSlide>
                <CardVideo link={'#'}  src={imagen9} color={color} />
            </SwiperSlide>
        </Swiper>
    );
}