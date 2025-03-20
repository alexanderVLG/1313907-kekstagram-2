import { closePreviewModal } from './upload.js';
import './upload.js';
import {addErrorDataMessage, setImageFormSubmit} from './validation.js';
import './scale.js';
import './effect.js';
import {getData} from './api.js';
import { showFilters } from './filter';
import './photo-upload.js';

getData()
  .then((data) => {
    showFilters(data);
  })
  .catch(() => addErrorDataMessage());

setImageFormSubmit(closePreviewModal);
