import styled from '../../src/styles/About/Content1.module.scss';
import Logo from '../../public/logos/logo_grande.svg';

export default function Content1() {
  return (
    <section className={`${styled.section} bgSec py-5`}>
      <div className='d-flex container flex-wrap flex-lg-nowrap'>
        <div className='container d-flex flex-column gap-5'>
          <h3 className='section__title'>História da Figueiró Advocacia</h3>
          <div>
            <p className='section__texto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa dui, molestie ut consectetur sed,
              finibus nec velit. Donec sed vehicula nisl, et dictum nulla. Vestibulum efficitur ut nunc ut blandit.
              Mauris non malesuada dui. Aliquam eu nulla justo. Nulla varius nulla a dui auctor, eu placerat nunc
              iaculis. Nullam id dignissim quam, dapibus tempor sapien. Morbi porta, elit et fringilla viverra,
              turpis est gravida ex, non mollis sapien quam et lorem. Duis malesuada finibus nulla eu pulvinar.
              Donec fermentum nisl nibh, vitae vulputate velit faucibus in. In hac habitasse platea dictumst.
              Suspendisse id augue sed ipsum molestie lacinia.
            </p>
            <p className='section__texto'>
              In faucibus nec libero in facilisis. Nullam rutrum diam at porttitor iaculis. Sed efficitur lacus
              orci, at porttitor felis venenatis nec. Sed at ipsum eget libero dignissim elementum. Integer diam
              lorem, tempor interdum sagittis eget, tempus vel sem. Etiam sem nunc, aliquet id metus sagittis,
              posuere tincidunt diam. Aenean ultricies enim sed eros venenatis faucibus. Cras eu pellentesque massa,
              non placerat nisi. Mauris aliquam aliquam sollicitudin. Donec eu viverra sem. Proin elementum mollis
              mauris in efficitur.
            </p>
          </div>
        </div>

        <div className='container d-flex justify-content-center d-none d-md-block d-lg-block'>

          <Logo />
        </div>
      </div>
    </section>

  );
}