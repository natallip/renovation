export let initMap = function () {
  
  ymaps.ready(function () {
    const myMap = new ymaps.Map("map", {
      center: [51.657680, 39.200646], 
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl']    
    });
    myMap.behaviors.disable('scrollZoom');   
    
    let HintLayout = ymaps.templateLayoutFactory.createClass( '<div class="hint">' +
    '<div class="hint__header">г. Воронеж, ул. Свободы, 8</div>' + 
    '<div class="hint__body">понедельник-пятница 10:00 - 19:00</div>' + 
    '<div class="hint__body">суббота 11:00 - 16:00</div>' +
    '<div class="hint__footer">8 473 500-20-20 <br/>+7 909 123-00-33</div></div>', {                
      getShape: function () {
        let el = this.getElement(),
          result = null;
        if (el) {
          let firstChild = el.firstChild;
          result = new ymaps.shape.Rectangle(
            new ymaps.geometry.pixel.Rectangle([
              [0, 0],
              [firstChild.offsetWidth, firstChild.offsetHeight]
            ])
          );
        }
        return result;
        }
      }
    );

    const myPlacemark = new ymaps.Placemark([51.6596, 39.2007], {}, {  
      iconLayout: 'default#image',
      iconImageHref: '/images/pin.svg',
      iconImageSize: [40, 60],
      iconImageOffset: [-20, -20],
      hintLayout: HintLayout
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(70%)';
  });   
}  
