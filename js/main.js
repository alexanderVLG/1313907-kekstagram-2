import { onPreviewButtonClick } from './upload.js';
import {setImageFormSubmit} from './validation.js';
import {getData} from './api.js';
import { showFilters } from './filter.js';
import { addErrorDataMessage } from './message.js';
import './upload.js';
import './scale.js';
import './effect.js';
import './photo-upload.js';


getData()
  .then((data) => {
    showFilters(data);
  })
  .catch(() => addErrorDataMessage());

setImageFormSubmit(onPreviewButtonClick);
