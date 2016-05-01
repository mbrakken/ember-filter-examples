import Ember from 'ember';

const sizeMap = {
  small    : 135,
  medium   : 400,
  large    : 540,
  original : null
};

const mmsURL = 'https://mmscache.murfie.com/tc?src=';

export function resizedImage(params/*, hash*/) {
  let baseURL     = params[0],
      size        = params[1] || 'medium',
      imageURL    = `${mmsURL}${encodeURIComponent(baseURL)}&fmt=jpeg&auth=foo`,
      scale_width = sizeMap[size];

  imageURL = scale_width ? `${imageURL}&scale_width=${scale_width}` : imageURL;
  return imageURL;
}

export default Ember.Helper.helper(resizedImage);
