import {createPhotoData} from './data.js';
import {addPictures} from './render.js';
import './modal.js';
import './upload.js';
import './validation.js';

const photos = createPhotoData();
addPictures(photos);

