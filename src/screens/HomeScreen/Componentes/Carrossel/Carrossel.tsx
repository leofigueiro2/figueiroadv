import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import Imagem1 from '../../../../../public/Imagens/Carrossel/1.webp';
import Imagem2 from '../../../../../public/Imagens/Carrossel/2.webp';
import Imagem3 from '../../../../../public/Imagens/Carrossel/3.webp';
import Text from '@src/components/Text/Text';
import Box from '@src/components/Box/Box';
import theme from '@src/theme/theme';

const Carrossel = () => {
  return (
    <Swiper pagination={{
      dynamicBullets: true,
    }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      navigation={true}
      loop={true}
      style={{color: theme.colors.primary.x098}}
   
    >
      <SwiperSlide>
        <Image src={Imagem1} alt={'Imagem de pessoas conversando e uma delas desenhando em um papel'} style={{ position: 'relative'}} />
        <Box styleSheet={{ position: 'absolute', top: '40%', textAlign: 'center', width: '100%'}}>
          <Text variant='display1' styleSheet={{ fontFamily: theme.typography.fontDisplay }}>Inovador</Text>
          <Text>Mais facilidade para esclarecer suas dúvidas e resolver seus problemas</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box styleSheet={{ position: 'absolute', top: '40%', textAlign: 'center', width: '100%'}}>
          <Text variant='display1' styleSheet={{ fontFamily: theme.typography.fontDisplay }}>Digital</Text>
          <Text>Totalmente online, sem burocracia e complicações</Text>
        </Box>
        <Image src={Imagem2} alt={'Imagem de pessoas conversando e uma delas desenhando em um papel'} />
      </SwiperSlide>
      <SwiperSlide>
        <Box styleSheet={{ position: 'absolute', top: '40%', textAlign: 'center', width: '100%'}}>
          <Text variant='display1' styleSheet={{ fontFamily: theme.typography.fontDisplay }}>Personalizado</Text>
          <Text>Você pode utilizar os serviços de onde estiver, a qualquer hora!</Text>
        </Box>
        <Image src={Imagem3} alt={'Imagem de um laptop moderno, com a tela aberta'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrossel;
