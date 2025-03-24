import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useRef } from 'react';
import fjGallery from 'flickr-justified-gallery';
import exp from 'constants';

const Viewgallery = () =>  {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    useEffect(() => {
      fjGallery(document.querySelectorAll('.gallery'), {
        itemSelector: '.gallery__item',
        rowHeight: 110,
        lastRow: 'start',
        gutter: 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
      });
    }, []);

    return (
      <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={'gallery'}
      >
          <a href="/images/logo/logo-karjel.png" className="gallery__item">
            <img alt="img1" src="/images/logo/logo-karjel.png" />
          </a>
          <a href="/images/logo/logo.svg" className="gallery__item">
            <img alt="img2" src="/images/logo/logo.svg" />
          </a>
          <a href="/images/gallery/95b.jpg" className="gallery__item">
            <img alt="img3" src="/images/gallery/95b.jpg" />
          </a>
          <a href="/images/gallery/White Pharaoh.jpg" className="gallery__item">
            <img alt="img4" src="/images/gallery/White Pharaoh.jpg" />
          </a>
      </LightGallery>
      </div>
    );
}

export default Viewgallery;